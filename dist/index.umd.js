!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).index={})}(this,(function(e){"use strict";var t="undefined"!=typeof document?document.currentScript:null;const s=e=>!(!Object.isExtensible(e)||Array.isArray(e)),o=(e,t)=>{let o="";const n=t?t.split("."):[],r=async(e,t)=>{for(const a in e)if(t==a&&e.hasOwnProperty(t)){if(!s(e[t])||!n.length){o=e[t];break}await r(e[t],n.shift())}};return t&&Object.keys(e).length&&r(e,n.shift()),o},n=e=>{let t="?";for(const s in e)s&&(t+=`${s}=${e[s]??""}&`);return t.replace(/&$/,"")},r=(e,t)=>{const s=Number(e),o=Number(t);return Math.floor(Math.random()*(s-o)+o)},a=(e,t)=>{const o={};return Array.isArray(e.params)&&e.params.map((e=>{e.static?o[e.label]=e.value:s(t)&&(o[e.label]=t[e.value]??+e)})),o},c=e=>{const t={400:"请求方法与服务器约定的方法不一致",401:"请求地址未经授权",403:"请求地址访问被拒",404:"请求地址不存在",410:"请求的地址已经不再可用",413:"请求的资源过大服务器允许的大小",414:"请求地址URL长于服务器允许的长度",500:"服务器内部错误无法完成请求，请联系管理员",502:"服务端网关错误，请联系管理员",503:"服务器超载/停机维护，服务器目前无法使用，请稍后访问"};return/^30/.test(e)?"请求的地址已被重定向":t[e]},i="application/x-www-form-urlencoded",l=e=>{let t="";t=e?.queer?`${e?.prefix||""}${e?.url}?${n(e?.data||{})}`:`${e?.prefix||""}${e?.url}`;const s=e?.data;return{url:t,method:e?.type,params:["get","delete","head"].includes(e?.type)&&e?.data,data:["post","put","patch"].includes(e?.type)&&s,loading:e?.loading,showMessage:e?.showMessage,message:e?.message,request:e?.request,code:e?.code,contentType:e?.contentType??i,once:e?.once}},u=e=>{let t="";t=e?.queer?`${e?.prefix||""}${e?.url}?${n(e?.data||{})}`:`${e?.prefix||""}${e?.url}`;const s=e?.data;return{url:t,method:e?.type,data:s,loading:e?.loading,showMessage:e?.showMessage,message:e?.message,request:e?.request,code:e?.code,contentType:e?.contentType??i,once:e?.once}};class d{constructor(){this.configRequestFunction=e=>{const t={...e};if(t?.once&&!this.configRequest&&(this.configRequest=t,this.configRequest.once?this.configRequest.once-=1:this.configRequest.once=0),this.selfconfig.getToken()&&!t.istoken){const e=this.selfconfig.getToken();s(e)&&e.keys(e).map((s=>{t.headers[s]=e[s]}))}return t.headers["content-type"]=e?.contentType,t},this.httptResponseFunction=e=>{const{config:t,data:n,status:r,statusText:a}=e;if(!s(n))return Promise.resolve(n);const i={code:n.code??r,page:n.page??{},message:n.msg||a,data:t?.request?o(n,t.request):n},l=[this.selfconfig.config.code,"200"].includes(String(i.code));return t?.showMessage&&l&&this.selfconfig.messageBox({type:l?"success":"error",duration:2500,message:t?.message??c(l)}),l?Promise.resolve(i):Promise.reject(i)},this.httpErrorFunction=e=>{const{config:t,code:s,message:o}=e?JSON.parse(JSON.stringify(e)):{};return t&&t.once&&this.configRequest&&this.WebHttpRequest.request(t),this.selfconfig.messageBox({type:"error",duration:2500,message:t?.message??c(s)??o}),Promise.reject(e)}}}e.arrayToOnly=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id";const s={};return e.reduce(((e,o)=>(o instanceof Object?!s[o[t]]&&((s[o[t]]=!0)&&e.push(o)):!s[o]&&((s[o]=!0)&&e.push(o)),e)),[])},e.axiosHttpRequest=class extends d{constructor(e){super(),this.configRequest=null,this.selfconfig=e,this.init(e)}init(e){const t=e.request;this.WebHttpRequest=t.create(),this.WebHttpRequest.interceptors.request.use(this.configRequestFunction,(e=>e)),this.WebHttpRequest.interceptors.response.use(this.httptResponseFunction,this.httpErrorFunction)}async request(e){return await this.WebHttpRequest.request(l(e))}},e.axiosParamsConfig=l,e.beforeAxiosEnter=(e,t)=>{const o={...e.load},r=e.rreq,c=e.nonstop;s(r)&&r.label&&s(t)&&(r.static?o.url=o.url.replace(/rreq/g,r.label):o.url=o.url.replace(/rreq/g,t[r.label]));const i={...o,data:{}};if(s(t)&&"*"==e.params&&(i.data=t),Array.isArray(e.params)&&s(t)&&(i.data=a(e,t)),s(c)&&s(t)||"boolean"==typeof c&&s(t)){const s=[];"boolean"==typeof c&&c&&"*"==e.params?s.push(t):c.static?s.push(c.value):s.push(t[c.label]),"a"==e.dataType?i.data=s:i.data=s[0]}return t instanceof FormData||!e.queer||"post"!=i.type||(i.url=`${i.url}?${n(i.data)}`,delete i.data),i},e.contentType=i,e.dataEmpty=e=>{const t={b:!1,s:"",a:[],n:null,m:0,o:{}};return["checkbox","cascader"].includes(e.eltype)?[]:t[e?.dataType||"s"]},e.fillNumber=e=>Number(e)<10?"0"+e:e,e.findObjectValue=o,e.getDataToJSON=e=>{const t=decodeURIComponent(e).replace(/\S+\?/,""),s={};return t.split("&").map((e=>{const t=e.split("=");s[t[0]]=t[1]})),s},e.getName=e=>e?.request??e?.name,e.getParams=a,e.getPlatform=()=>{const{appVersion:e}=window.navigator;return["iPhone","Android","iPad"].includes(e)||window.innerWidth<760?"app":"pc"},e.httpRequestConfig=d,e.isObject=s,e.jsonToGetData=n,e.random=r,e.randomText=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20,t="";for(let s=0;s<e;s++)r(0,3)?t+=r(0,10):t+=String.fromCharCode(97+r(0,26));return t},e.setFilePath=e=>new URL("../../image/"+e,"undefined"==typeof document&&"undefined"==typeof location?require("url").pathToFileURL(__filename).href:"undefined"==typeof document?location.href:t&&t.src||new URL("index.umd.js",document.baseURI).href).href,e.statusError=c,e.themeJson={"--color-line":"#f7f8fa","--color-h1":"#333333","--color-h2":"#666666","--color-h3":"#999999","--el-bg-color":"#f2f6fc","--el-color-info":"#909399","--el-color-error":"#f56c6c","--el-color-danger":"#f56c6c","--el-color-warning":"#010101","--el-color-success":"#67c23a","--el-color-primary":"#409eff","--el-color-white":"#ffffff","--el-color-black":" #303248","--el-border-color":"#dcdfe6","--el-disabled-text-color":"#dcdcdc","--el-disabled-bg-color":"#eeeff2","--el-text-color-placeholder":"#cccccc","--el-text-color-disabled":"#c0c4cc"},e.uniHttpRequest=class extends d{constructor(e){super(),this.configRequest=null,this.selfconfig=e,this.init(e)}init(e){const t=e.request;this.WebHttpRequest={...t.request}}async request(e){return await this.WebHttpRequest.request({...u(e),success:this.httptResponseFunction,fail:this.httpErrorFunction})}},e.uniParamsConfig=u,e.validation={http:/^(http|https):\/\//,license:/(^[A-H,J-N,P-R,TU,W-Y,0-9]{18}$)/,name:/(^[a-z,A-Z]{1,50}$)|(^[\u4e00-\u9fa5]{2,20}$)/,code:/(^[a-z,A-Z,0-9,1-9]{1,50}$)/,zh:/^[\u4e00-\u9fa5]{1,20}$/,telephone:/((^0[1-9]{2,3}\d{7,8}$)|(^[1-9]\d{6,7}$))/,en:/^[a-z,A-Z]{1,50}$/,enCode:/^\w{1,32}$/,email:/(^[a-zA-Z0-9]{1,}@[\d\w\W]+\.[\w\W]{2,5}$)/,phone:/^1[3-5,7-9]\d{9}$/,tel:/(^0[1-9]{2,3}\d{7,8}$)|(^[1-9]\d{6,7}$)/,inter:/(^[1-9]+$)|(^[1-9]\d+$)/,float:/(^0\.\d{1,2}$)|(^[1-9]\d+\.\d{1,2}$)/,iden:/^[1-8]\d{5}[1-2]\d{3}(0[1-9]|1[1-2])([0-2][1-9]|[1-2]0|3[0-1])\d{3}([1-9]|X)$/,credit:/^4$/,bank:/(^62\d{16}|\d{19}|\d{13}|\d{17}$)|(^[37,34]\d{13}$)|(^[30,36,38,39]\d{12}$)|(^5[1-5]\d{14}$)|(^4\d{15}$)/,date:/(^[1,2]\d{3}-(0[1-9]|1[0-2])-[0[1-9]|[1,2][0-9]|3[0-1]]$)|(^[1,2]\d{3}-(0[1-9]|1[0-2])-[0[1-9]|[1,2][0-9]|3[0-1]]\s(0[0-9][1-5][0-9]):(0[0-9][1-5][0-9]):(0[0-9][1-5][0-9])$)/,content:/^\S+$/}}));
