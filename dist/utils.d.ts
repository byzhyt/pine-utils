export declare const dataEmpty: (item: {
    eltype: string;
    dataType: string;
}) => any;
export declare const getName: (item: any) => any;
export declare const fillNumber: (n: number | string) => string | number;
export declare const isObject: (val: any) => boolean;
/**
 @params datas

 **/
export declare const findObjectValue: (datas: any, name: string) => any;
export declare const arrayToOnly: (list: Array<string | number | object>, key?: string) => any;
export declare const jsonToGetData: (data: any) => string;
export declare const getDataToJSON: (data: string) => any;
export declare const random: (s: string | number, e: string | number) => number;
export declare const randomText: (len?: number) => string;
export declare const getParams: (item: any, datas: any) => any;
export declare const setFilePath: (path: string) => string;
export declare const beforeAxiosEnter: (item: any, datas: any) => any;
export declare const validation: any;
export declare const getPlatform: () => "app" | "pc";
export declare const statusError: (code: string) => any;
