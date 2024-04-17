/*

    @description        请求参数配置参数介绍
    @author             songzi
    @params url         请求路径
    @params prefix      请求前缀
    @params type        请求类型
    @params data        请求数据
    @params request     获取响应字段
    @params message     获取响应消息
    @params code        获取响应状态
    @params loading     请求加载状态
    @params showMessage 响应请求消息提示
    @params once        请求失败后自动发起次数
    @params headers     请求设置头
    @params queer       组合请求模式（post请求/params参数）
    @params contentType 请求设置头类型
*/
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

/*
    @description        菜单单元动态字段
    @author             songzi
    @params label       字段
    @params value       值/字段值
    @params storage     缓存阈值（数据参数有效）
    @params static      静态阈值（数据参数有效）
    @params request     绑定赋值（数据回显有效）
    @params dataType    请求类型
    @params validate    表单是否需要校验
    @ex
*/
export interface LableValueEntity {
  label?: string;
  value?: string;
  storage?: string;
  static?: string;
  validate?: boolean;
  dataType?: string;
  request?: string;
}

/*
    @description        load请求参数
    @author             songzi
    @params load        请求数据
    @params request     动态字段值
    @params multiple    是否是多选择
    @params rreq        动态路由请求
    @params storage     是否从缓存中获取
    例子：[{
        load?: api.lesseeEquipSystem,
        rreq?: true,
        request?: 'id',
        multiple?: true,
        name?: 'systemIdList',
    }]
*/
export interface loadEntity {
  load?: RequestEntity;
  rreq?: Array<LableValueEntity>;
  nonstop?: LableValueEntity;
  multiple?: boolean;
  request?: string;
  storage?: string;
}

/*
    @description        图片组件单元
    @author             songzi
    @params path        跳转路路
    @params className   样式className
    @params src         处理函数
    @params preview     是否预览
    @params lazy        懒加载
    @params fit         适应方式
    @params alt         原生alt
 */

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

/*
    @description            FormsEntity组件单元
    @author                 songzi
    @params inline          表单展示方式span赋值后无效;
    @params rules           表单验证
    @params load           加载前表单请求;
    @params datas            表单静态数据或动态数据;
    @params items           表单单元数据;
    @params className       表单className;
    @params disabled?:       表单是否可操作;
    @params labelPosition   单元描述显示方向;
    @params statusIcon      表单验证状态;
    @params labelWidth      描述宽度;
    @params showMessage     验证错误信息是否显示;
    @params inlineMessage   验证信息显示方式;
    @params span            表单显示多列;
    @params gutter          每列间距;
 */
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

/*
    @description                SublevelEntity组件单元
    @author                     songzi
    @params name                字段
    @params label               地段描述
    @params placeholder         占位描述
    @params labelClassName      label className类名
    @params itemClassName       className类名
    @params imgClassName       图片className类名
    @params list                多数据列表
    @params path                跳转路路
    @params type                单元类型
    @params eltype              节点类型
    @params params              <LableValueEntity>请求参数
    @params rules               单元验证
    @params className           样式className
    @params visible             节点显示
    @params request             获取对应的返回数据
    @params multiple            选择多个字段
    @params rreq                动态路由方式请求(url?:`path/${rreq}`) rreq?:'id';
    @params props               参数配置
    @params dataType            参数类型
    @params load                <loadEntity>load请求
    @params dynamic             动态获取表单单元
    @params insert              动态插入单元,
    @params pinia               存储数据
    @params control            <LableValueEntity>控制字段
    @params cascader            关联字段请求
    @params nodeKey             关联请求字段
    @params oneself             下拉框自身获取数据
 */

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

/*
    @description                isMenuShow组件单元
    @author                     songzi
    @params name                路由名
    @params path                路由路径
    @params component           组件
    @params redirect            重定型
    @params meta                路由信息
    @params meta.isMenuShow       图片className类名
    @params meta.title                多数据列表
    @params meta.icon                跳转路路
    @params meta.iconClassName             单元类型
    @params meta.disabled              路由禁用
    @params meta.visible               路由是否显示
 */

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
