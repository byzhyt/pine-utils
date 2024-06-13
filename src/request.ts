
import { RequestEntity, RequestParams, } from './entity';
import { jsonToGetData, isObject, findObjectValue, statusError } from "./utils";
export const contentType = "application/x-www-form-urlencoded";

// axios请求参数组合
export const axiosParamsConfig = (options: any): object => {
  let path = "";
  if (options?.queer) {
    path = `${options?.prefix || ""}${options?.url}?${jsonToGetData(
      options?.data || {}
    )}`;
  } else {
    path = `${options?.prefix || ""}${options?.url}`;
  }
  const datas = options?.data;
  // setSm2Data

  return {
    url: path,
    method: options?.type,
    params: ["get", "delete", "head"].includes(options?.type) && options?.data,
    data: ["post", "put", "patch"].includes(options?.type) && datas,
    loading: options?.loading,
    showMessage: options?.showMessage,
    message: options?.message,
    request: options?.request,
    code: options?.code,
    contentType: options?.contentType ?? contentType,
    once: options?.once
  };
};

// uni请求参数组合
export const uniParamsConfig = (options: any): object => {
  let path = "";
  if (options?.queer) {
    path = `${options?.prefix || ""}${options?.url}?${jsonToGetData(
      options?.data || {}
    )}`;
  } else {
    path = `${options?.prefix || ""}${options?.url}`;
  }
  const datas = options?.data;
  // setSm2Data

  return {
    url: path,
    method: options?.type,
    data: datas,
    loading: options?.loading,
    showMessage: options?.showMessage,
    message: options?.message,
    request: options?.request,
    code: options?.code,
    contentType: options?.contentType ?? contentType,
    once: options?.once
  };
};

/**
 * @author      songren
 * @description 请求响应配置
 */

export class httpRequestConfig {
  configRequest: any;
  WebHttpRequest: any;
  selfconfig: any;
  constructor() { }
  configRequestFunction = (config: any) => {
    const configJson = { ...config }
    if (configJson?.once && !this.configRequest) {
      this.configRequest = configJson;
      if (this.configRequest.once) {
        this.configRequest.once -= 1;
      } else {
        this.configRequest.once = 0;
      }
    }
    if (this.selfconfig.getToken() && !configJson.istoken) {
      const headers: any = this.selfconfig.getToken();
      if (isObject(headers)) {
        headers.keys(headers).map((name: string) => {
          configJson.headers[name] = headers[name]
        })
      }
    }

    configJson.headers["content-type"] = config?.contentType;
    return configJson;
  };
  // 请求成功处理
  httptResponseFunction = (response: object) => {
    const { config, data, status, statusText }: any = response;
    if (!isObject(data)) {
      return Promise.resolve(data);
    }
    const result: any = {
      code: data.code ?? status,
      page: data.page ?? {},
      message: data.msg || statusText,
      data: config?.request ? findObjectValue(data, config.request) : data
    };

    const statusCode: any = [this.selfconfig.config.code, "200"].includes(
      String(result.code)
    );
    // 数据响应提示
    if (config?.showMessage && statusCode) {
      this.selfconfig.messageBox({
        type: statusCode ? "success" : "error",
        duration: 2500,
        message: config?.message ?? statusError(statusCode)
      });
    }
    console.log(555)
    return statusCode ? Promise.resolve(result) : Promise.reject(result);
  };

  // 请求失败处理函数
  httpErrorFunction = (error: any) => {
    console.log(error, 7777777)
    const { config, code, message }: any = error ? JSON.parse(JSON.stringify(error)) : {};
    // 重新请求
    if (config && config.once && this.configRequest) {
      this.WebHttpRequest.request(config);
    }

    this.selfconfig.messageBox({
      type: "error",
      duration: 2500,
      message: config?.message ?? statusError(code) ?? message
    });
    return Promise.reject(error);
  }
}

/**
 * description  请求
 */
export class axiosHttpRequest extends httpRequestConfig {
  constructor(options: RequestParams | any) {
    super()
    this.configRequest = null
    this.selfconfig = options
    this.init(options);
  }
  // 初始化
  init(options: RequestParams) {
    const axios: any = options.request;
    this.WebHttpRequest = axios.create();
    this.WebHttpRequest.interceptors.request.use(
      this.configRequestFunction,
      (error: any) => error
    );
    this.WebHttpRequest.interceptors.response.use(
      this.httptResponseFunction,
      this.httpErrorFunction
    );
  }
  async request(options: RequestEntity) {
    return await this.WebHttpRequest.request(axiosParamsConfig(options));
  }

}


export class uniHttpRequest extends httpRequestConfig {
  WebHttpRequest: any;
  constructor(options: RequestParams | any) {
    super()
    this.configRequest = null
    this.selfconfig = options
    this.init(options);
  }
  // 初始化
  init(options: RequestParams) {
    const axios: any = options.request;
    this.WebHttpRequest = { ...axios.request };
  }
  async request(options: RequestEntity) {
    return await this.WebHttpRequest.request({
      ...uniParamsConfig(options),
      success: this.httptResponseFunction,
      fail: this.httpErrorFunction
    });
  }
}