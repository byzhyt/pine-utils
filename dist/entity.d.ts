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
    component?: Function;
    redirect?: string;
    children?: Array<RouteEntity>;
    meta?: {
        isMenuShow?: boolean;
        title?: string;
        icon?: string;
        className?: string;
        disabled?: boolean;
        visible?: boolean;
    };
}
