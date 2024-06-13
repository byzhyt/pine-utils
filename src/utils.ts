export const dataEmpty = (item: { eltype: string; dataType: string }) => {
  const emptyJson: any = {
    b: false,
    s: "",
    a: [],
    n: null,
    m: 0,
    o: {},
  };
  if (["checkbox", "cascader"].includes(item.eltype)) {
    return [];
  } else {
    return emptyJson[item?.dataType || "s"];
  }
};

export const getName = (item: any) => {
  return item?.request ?? item?.name;
};

// 补全两位数
export const fillNumber = (n: number | string) => {
  return Number(n) < 10 ? "0" + n : n;
};

export const isObject = (val: any) => {
  if (Object.isExtensible(val) && !Array.isArray(val)) {
    return true;
  } else {
    return false;
  }
};

/**
 @params datas

 **/


export const findObjectValue = (datas: any, name: string) => {
  let value: any = "";
  const names: Array<any> = name ? name.split(".") : [];
  const findValue = async (data: any, sname: string) => {
    for (const key in data) {
      if (sname == key && data.hasOwnProperty(sname)) {
        if (isObject(data[sname]) && names.length) {
          await findValue(data[sname], names.shift());
        } else {
          value = data[sname];
          break;
        }
      }
    }
  };
  name && Object.keys(datas).length && findValue(datas, names.shift());
  return value;
};

// 数组去重
export const arrayToOnly = (
  list: Array<string | number | object>,
  key: string = "id"
) => {
  const empson: any = {};
  return list.reduce((item: any, next: any) => {
    if (next instanceof Object) {
      empson[next[key]] ? "" : (empson[next[key]] = true) && item.push(next);
    } else {
      empson[next] ? "" : (empson[next] = true) && item.push(next);
    }
    return item;
  }, []);
};

// JSON转get数据
export const jsonToGetData = (data: any) => {
  let tempjson = "?";
  for (const name in data) {
    if (name) {
      tempjson += `${name}=${data[name] ?? ""}&`;
    }
  }
  return tempjson.replace(/&$/, "");
};

// get转json数据
export const getDataToJSON = (data: string) => {
  const shref: string = decodeURIComponent(data).replace(/\S+\?/, "");
  const tempjson: any = {};
  shref.split("&").map((item) => {
    const arr = item.split("=");
    tempjson[arr[0]] = arr[1];
  });
  return tempjson;
};

// 获取随机数
export const random = (s: string | number, e: string | number) => {
  const m = Number(s),
    n = Number(e);
  return Math.floor(Math.random() * (m - n) + n);
};

// 设置有位数随机数
export const randomText = (len: number = 20) => {
  let result: string = "";
  for (let i = 0; i < len; i++) {
    if (random(0, 3)) {
      result += random(0, 10);
    } else {
      result += String.fromCharCode(97 + random(0, 26));
    }
  }
  return result;
};

export const getParams = (item: any, datas: any) => {
  const tempjson: any = {};
  // 获取设置参数值
  if (Array.isArray(item.params)) {
    item.params.map((pitem: any) => {
      if (pitem.static) {
        tempjson[pitem.label] = pitem.value;
      } else {
        isObject(datas) &&
          (tempjson[pitem.label] = datas[pitem.value] ?? +pitem);
      }
    });
  }
  return tempjson;
};

export const setFilePath = (path: string) => {
  return new URL("../../image/" + path, import.meta.url).href;
};

// 请求数据处理
export const beforeAxiosEnter = (item: any, datas: any) => {
  const load = { ...item.load };
  const rreq: any = item.rreq;
  const nonstop = item.nonstop;
  // 请求地址动态值设置
  if (isObject(rreq) && rreq.label && isObject(datas)) {
    if (rreq.static) {
      load.url = load.url.replace(/rreq/g, rreq.label);
    } else {
      load.url = load.url.replace(/rreq/g, datas[rreq.label]);
    }
  }
  const tempjson: any = {
    ...load,
    data: {},
  };
  // item.params为*表示tempjson。data需要赋值传入datas
  if (isObject(datas) && item.params == "*") {
    tempjson.data = datas;
  }
  // 获取设置参数值
  if (Array.isArray(item.params) && isObject(datas)) {
    tempjson.data = getParams(item, datas);
  }
  // 特殊请求包体如data非对象
  if (
    (isObject(nonstop) && isObject(datas)) ||
    (typeof nonstop == "boolean" && isObject(datas))
  ) {
    const list = [];
    if (typeof nonstop == "boolean" && nonstop && item.params == "*") {
      list.push(datas);
    } else {
      if (nonstop.static) {
        list.push(nonstop.value);
      } else {
        list.push(datas[nonstop.label]);
      }
    }
    if (item.dataType == "a") {
      tempjson.data = list;
    } else {
      tempjson.data = list[0];
    }
  }

  // 怪异请求如get参数post请求
  if (!(datas instanceof FormData) && item.queer && tempjson.type == "post") {
    tempjson.url = `${tempjson.url}?${jsonToGetData(tempjson.data)}`;
    delete tempjson.data;
  }
  return tempjson;
};



// 默认校验 pattern
export const validation: object = {
  // 域名验证
  http: /^(http|https):\/\//,
  // 营业执照
  license: /(^[A-H,J-N,P-R,TU,W-Y,0-9]{18}$)/,
  // 用户名
  name: /(^[a-z,A-Z]{1,50}$)|(^[\u4e00-\u9fa5]{2,20}$)/,
  // 编码
  code: /(^[a-z,A-Z,0-9,1-9]{1,50}$)/,
  // 中文
  zh: /^[\u4e00-\u9fa5]{1,20}$/,
  telephone: /((^0[1-9]{2,3}\d{7,8}$)|(^[1-9]\d{6,7}$))/,
  // 英文
  en: /^[a-z,A-Z]{1,50}$/,
  // 英文字典名
  enCode: /^\w{1,32}$/,
  // 邮箱
  email: /(^[a-zA-Z0-9]{1,}@[\d\w\W]+\.[\w\W]{2,5}$)/,
  // 手机号
  phone: /^1[3-5,7-9]\d{9}$/,
  // 座机号码
  tel: /(^0[1-9]{2,3}\d{7,8}$)|(^[1-9]\d{6,7}$)/,
  // 整数
  inter: /(^[1-9]+$)|(^[1-9]\d+$)/,
  // 浮点数
  float: /(^0\.\d{1,2}$)|(^[1-9]\d+\.\d{1,2}$)/,
  // 身份证
  iden: /^[1-8]\d{5}[1-2]\d{3}(0[1-9]|1[1-2])([0-2][1-9]|[1-2]0|3[0-1])\d{3}([1-9]|X)$/,
  // 信用卡
  credit: /^4$/,
  // 银行卡
  bank: /(^62\d{16}|\d{19}|\d{13}|\d{17}$)|(^[37,34]\d{13}$)|(^[30,36,38,39]\d{12}$)|(^5[1-5]\d{14}$)|(^4\d{15}$)/,
  // 日期
  date: /(^[1,2]\d{3}-(0[1-9]|1[0-2])-[0[1-9]|[1,2][0-9]|3[0-1]]$)|(^[1,2]\d{3}-(0[1-9]|1[0-2])-[0[1-9]|[1,2][0-9]|3[0-1]]\s(0[0-9][1-5][0-9]):(0[0-9][1-5][0-9]):(0[0-9][1-5][0-9])$)/,
  // 文本信息
  content: /^\S+$/,
};

// 判断设备
export const getPlatform = () => {
  const { appVersion }: any = window.navigator;
  if (
    ["iPhone", "Android", "iPad"].includes(appVersion) ||
    window.innerWidth < 760
  ) {
    return "app";
  } else {
    return "pc";
  }
};

export const statusError = (code: string) => {
  const statusText: any = {
    "400": "请求方法与服务器约定的方法不一致",
    "401": "请求地址未经授权",
    "403": "请求地址访问被拒",
    "404": "请求地址不存在",
    "410": "请求的地址已经不再可用",
    "413": "请求的资源过大服务器允许的大小",
    "414": "请求地址URL长于服务器允许的长度",
    "500": "服务器内部错误无法完成请求，请联系管理员",
    "502": "服务端网关错误，请联系管理员",
    "503": "服务器超载/停机维护，服务器目前无法使用，请稍后访问",
  };

  if (/^30/.test(code)) {
    return "请求的地址已被重定向";
  } else {
    return statusText[code];
  }
};
