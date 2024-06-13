export interface RequestEntity {
    url?: string;
    prefix?: string;
    type?: string;
    data?: object | null;
    loading?: string;
    showMessage?: string;
    headers?: object;
    queer?: boolean;
    once?: number;
    request?: string;
    message?: string;
    code?: string;
    contentType?: string;
}
export interface LableValueEntity {
    label?: string;
    value?: string;
    storage?: string;
    static?: string;
    validate?: boolean;
    dataType?: string;
    request?: string;
}
export interface loadEntity {
    load?: RequestEntity;
    rreq?: Array<LableValueEntity>;
    nonstop?: LableValueEntity;
    multiple?: boolean;
    request?: string;
    storage?: string;
}
export interface ImageEntity {
    icon?: string;
    className?: string;
    path?: string;
    lazy?: boolean;
    fit?: string;
    alt?: string;
    preview?: boolean;
}
export interface UploadEntity {
    placeholder?: string;
    name?: "";
}
export interface FormsEntity {
    inline?: boolean;
    rules?: object;
    load?: loadEntity;
    datas?: object;
    items?: Array<any>;
    className?: string;
    disabled?: boolean;
    labelPosition?: string;
    statusIcon?: boolean;
    labelWidth?: string;
    showMessage?: boolean;
    inlineMessage?: boolean;
    span?: number;
    gutter?: number;
}
export interface SublevelEntity {
    name?: string;
    type?: string;
    eltype?: string;
    label?: string;
    disabled?: boolean;
    placeholder?: string;
    params?: Array<LableValueEntity>;
    pinia?: any;
    nodeKey?: string;
    cascader?: Array<string>;
    path?: string;
    dataType?: string;
    props?: LableValueEntity;
    className?: string;
    list?: Array<LableValueEntity>;
    labelStyle?: string;
    labelClassName?: string;
    itemClassName?: string;
    itemStyle?: string;
    oneself?: string;
    imgClassName?: string;
    iconStyle?: string;
    load?: loadEntity;
    visible?: boolean;
    multiple?: boolean;
    dynamic?: loadEntity;
    insert?: boolean;
    request?: string;
    pattern?: RegExp;
    rreq?: Array<LableValueEntity>;
    control?: Array<LableValueEntity>;
}
export interface RouteEntity {
    name?: string;
    path?: string;
    component?: Function | null | undefined;
    redirect?: string | null | undefined;
    children?: Array<RouteEntity> | null | undefined;
    meta?: {
        isMenuShow?: boolean;
        isToken?: boolean;
        title?: string;
        icon?: string;
        className?: string;
        disabled?: boolean;
        visible?: boolean;
    };
}
/**
 * @param {TYPE}  type 请求类型
 * @param {TYPE} request - 请求插件
 * @param {TYPE} messageBox - 弹窗提示
 * @param {TYPE} router -路由跳转
 * @param {TYPE} config.mesgae - code
 * @param {TYPE} config.mesgae - 提示信息
 *
 */
export interface RequestParams {
    request: void;
    router?: void;
    messageBox?: void;
    config?: {
        code?: string | 1;
        mesgae?: string;
    };
}
