/**
 * @description        RequestEntity请求参数
 * @param  {String}   url              -请求路径
 * @param  {String}   prefix          - 请求前缀
 * @param  {String}   type            - 请求类型
 * @param  {String}   data             -请求数据，可以省略
 * @param  {String}   loading         - 请求加载状态
 * @param  {String}   showMessage     -响应请求提示
 * @param  {String}   once            -请求次数
 * @param  {String}   contentType     - 请求头响应类型
 * @param  {String}   queer           -怪异请求 如：post请求/params参数
 * @param  {String}   request         - 请求响应返回字段
 * @example
 *  `
 *      {
 *           prefix: VITE_BASE_API,
 *           url: "/api/order/order/refundOrder",
 *           type: "put",
 *           request:'data’,
 *           showMessage: '操作成功',
 *           loading: '请稍等...'
 *      }
 *  `
 */

export interface RequestEntity {
    url : string;
    prefix : string;
    type : string;
    data : object | {};
    loading : string;
    showMessage : string;
    contentType : string;
    queer : boolean;
    once : number,
    request : string | 'data'
}


/**
 * @description                     数据转换LabelEntity，数组、下拉框、对象详情
 * @param  {String} label             - 字段
 * @param  {String} value             - 值/字段值
 * @param  {String} storage           - 判断缓存阈值
 * @param  {String} request           - 动态值获取指定的字段
 * @param  {Boolean} static           - 判断是否是静态值
 * @param  {Boolean} visible          - 是否显示
 * @param {String} path               - 跳转页面路径
 * @param {String} text               - 文本
 * @example
 * `
 *  const data={
 *      orderId:'78788',
 *      costPrice: 2000
 *      createBy: "1"
 *      createTime: "2024-09-18 09:58:13"
 *      deleted: "0"
 *      deliveryTemplateId: "63"
 *      favoriteCounts: 0
 *      forLevel: "Y"
 *  }
 *  const orderInfoList= [{
 *     label: '订单编号',
 *     visible: true,
 *     value: 'orderId'
 *   }, {
 *     label: '下单时间', visible: true,
 *     value: 'createTime'
 *   }, {
 *     label: '支付方式',
 *     visible: true,
 *     static: true,
 *     value: '微信支付'
 *   }]
 * `
 */

export interface LabelEntity {
    label? : string;
    value? : string;
    storage? : string;
    visible? : boolean,
    path? : string,
    static? : boolean;
    text? : string
}

export type LabelType = & LabelEntity

/**
 *   @name  ImageEntity             图片
 *   @description                -  图片组件单元
 *   @param {String} path        -  跳转路路
 *   @param {String} className   -  样式className
 *   @param {String} icon        -  处理函数
 *   @param {String} preview     -  是否预览
 *   @param {String} lazy        -  懒加载
 *   @param {String} mode         -  适应方式
 *   @param {String} alt         -  原生alt
 *   @param {Array} list          -  图片集
 *
 */

export interface ImageEntity {
    icon? : string | '';
    className? : string | '';
    path? : string | '';
    mode? : string | '';
    alt? : string | '';
    list? : Array<LabelEntity>;
    preview : boolean;
}


export type ImageType = {
    item? : ImageEntity,
    list? : Array<string>,
    classnames? : string | ''
} & ImageEntity


/**
 *  @name
 *  @description        获取指定参数
 *  @param   {Boolean}    multiple    数组传值
 *  @param  {Array<LabelEntity>} params  参数数组
 *  @example
 *  `
 *  const data={
 *      orderId:'78788',
 *      costPrice: 2000
 *      createBy: "1"
 *      createTime: "2024-09-18 09:58:13"
 *      deleted: "0"
 *      deliveryTemplateId: "63"
 *      favoriteCounts: 0
 *      forLevel: "Y"
 *  }
 *  const orderInfoList= [{
 *       label: 'orderId',
 *       value: 'orderId'
 *  }, {
 *       label: 'createTime',
 *       value: 'createTime'
 *  }, {
 *       label: 'label',
 *       static: true,
 *       value: '微信支付'
 *  }]
 *  @export
 * `
 *      {
 *          label:'微信支付',
 *          createTime:'2024-09-18 09:58:13',
 *          orderId:'78788'
 *      }
 * `
 `
 */

export interface ParamsEntity extends LabelEntity {
    multiple? : boolean;
    params? : Array<LabelEntity>;
}

/**
 *    @name  FormsEntity                            - 表单组件参数
 *    @description                                  - 表单组件
 *    @param   {String}   inline                    - 表单展示方式span赋值后无效;
 *    @param   {String}   rules                     - 表单验证
 *    @param   {String}   loads                     - 加载前表单请求;
 *    @param   {String}   data                      - 表单静态数据或动态数据;
 *    @param   {String}   items                     - 表单单元数据;
 *    @param   {String}   className                 - 表单className;
 *    @param   {String}   disabled:                 - 表单是否可操作;
 *    @param   {String}   bodyClassName            - 表单单元className 类;
 *    @param   {String}   labelPosition             - 单元描述显示方向;
 *    @param   {String}   statusIcon                - 表单验证状态;
 *    @param   {String}   labelWidth                - 描述宽度;
 *    @param   {String}   showMessage               - 验证错误信息是否显示;
 *    @param   {String}   inlineMessage             - 验证信息显示方式;
 *    @param   {String}   span                      - 表单显示多列;
 *    @param   {String}   gutter                    - 每列间距;
 *    @param   {FormItemEntity}   prepend           - 像表单前插入节点;
 *    @param   {FormItemEntity}   append            - 像表单后插入节点;
 *
 */


export interface FormsEntity {
    inline? : boolean;
    rules? : object;
    load? : Array<RequestEntity>;
    data? : object;
    items? : Array<any>;
    className? : string;
    disabled? : boolean;
    labelStyle? : string;
    labelClassName? : string;
    append : FormItemEntity;
    prepend : FormItemEntity;
}

export type  FormsType = { option? : FormsEntity | any, classnames? : string } & FormsEntity;


/**
 * @name  ItemEntity
 * @param {String}  name                     - 选中绑定值； 单选有效
 * @param {String}  activeClassName          - 选中className类
 * @param {String}  className                - className 类
 * @param {Boolean} imageClassName           - 图片className
 * @param {String}  icon                     - 图标
 * @param {Boolean} disabled                 - 是否禁用
 * @param {String} dataType                  - 数据类型
 * @param {LabelEntity}    rreq              - 请求地址动态值设置
 * @param {LabelEntity}    nonstop           - 特殊请求包体如data非对象
 * @param {Boolean}        queer             - 怪异请求如get参数post请求
 * @param {RequestEntity } load              - 请求
 * @param {Array<LabelEntity>} params        - 参数数组
 * @param {String}    request                -动态参数
 *
 */
export interface ItemEntity extends LabelEntity {
    className? : string;
    imgClassName? : String;
    itemClassName? : String;
    activeClassName? : String;
    icon? : string;
    disabled? : boolean;
    dataType? : string;
    rreq? : LabelEntity;
    nonstop? : LabelEntity;
    request? : string;
    queer? : boolean;
    load? : RequestEntity;
    params? : Array<LabelEntity>;
}

export type ItemType = {
    item? : ItemEntity | any,
    classnames? : string
} & ItemEntity;

/**
 * @name  RadioEntity
 * {@link <identifier>}
 * @description 单选组件
 * @param {String} activeClassName - 选中className类
 * @param {String}  classnames - className 类
 * @param {String}  color - 选中颜色设置
 * @param {String,Boolean,Number,Object} trueValue - 选中绑定值； 单选有效
 * @param {String,Boolean,Number} falseValue - 未选中绑定值；单选有效
 * @param {Boolean} checked - 是否选中
 *
 * @example
 *
 * ```js
 * {
 * label:'',
 * value:'',
 * }
 * ```
 *
 *
 */
export interface RadioEntity extends LabelEntity {
    trueValue? : String | Boolean | Number;
    falseValue? : String | Boolean | Number;
    checked? : Boolean;
    color? : String;
    activeClassNam? : String;
}


export type RadioType = { item? : RadioEntity | any, classnames? : string } & RadioEntity


/**
 * @name CheckboxEntity
 * @param {'checkbox', 'button'} type      - 类型
 *
 */
export interface CheckboxEntity extends RadioEntity {
    type? : 'checkbox' | 'button';
}

export type CheckboxType = { item? : CheckboxEntity | any, classnames? : string } & CheckboxEntity


/**
 *
 * @name  FormItemEntity
 * @description  表单单元
 * @param {String}  labelClassName                    -文案className类
 * @param {String}  labelStyle                        - 文案行内样式
 * @param {String}  itemClassName                     - 单元内容className
 * @param {String}  slotName                          - 插槽名称
 * @param {'input','upload','content','button','picker','switch','radio','code','editor' , 'tcp'} eltype - 单元类型
 * @param {Boolean} asterisk                          - 是否显示必选
 * @param {String}  placeholder                       - description
 * @param {String}  placeholderClassName              - description
 * @param {LabelEntity}   control                     - 控制字段
 * @param {LabelEntity}   cascader                    -  关联元素
 * @param {String}   bodyClassName                     - 单元clasName 类
 * @param {String}  name                               - 字段
 *
 */

export interface FormItemEntity extends ItemEntity {
    name? : string | '';
    asterisk? : boolean | false;
    eltype? : 'input' | 'upload' | 'content' | 'button' | 'picker' | 'switch' | 'radio' | 'code' | 'editor' | 'tcp' | 'textarea';
    slotName? : string | '';
    placeholder? : string | '';
    bodyClassName? : string | '';
    placeholderClassName? : string | '';
    labelStyle? : string | '';
    labelClassName? : string;
    itemStyle? : string | '';
    control? : Array<LabelEntity> | [];
    cascader? : Array<LabelEntity> | [];
}


export type FormItemType = { item? : FormItemEntity | any, classnames? : string } & FormItemEntity;

/**
 * @name  InputEntity
 * @param {String} name                          - 参数字段
 * @param {'password' | 'text'} type             - 类型
 * @param {RequestEntity} load                   - 请求
 * @param {String} params                        - 参数名称
 * @param {Number} minlength                     - 最小值
 * @param {Number} maxlength                     - 最大值
 * @param {Boolean} fixed                        - 是否为绝对定位
 *
 */
export interface InputEntity extends FormItemEntity {
    type? : 'password' | 'text';
    minlength? : number;
    maxlength? : number;
}

export  type InputType = { item? : InputEntity | any, classnames? : string } & InputEntity

/**
 * @name {Boolean} fixed
 * @param {Number} rows                   - 动态参数
 *
 */
export interface TextareaEntity extends InputEntity {
    fixed : boolean,
    rows : number | 30
}

export type TextareaType = { item? : TextareaEntity | any, classnames? : string } & TextareaEntity

/**
 * @name  SelectEntity
 * @param {RequestEntity} props                   - 动态参数
 *
 */

export interface SelectEntity extends InputEntity {
    props? : LabelEntity,
}


/**
 * @name  SelectType
 * @param {RequestEntity} props                   - 动态参数
 *
 */

export type SelectType = { item? : SelectEntity | any, classnames? : string | '' } & SelectEntity

/**
 * @name  SwitchEntity
 * @param {RequestEntity} props                   - 动态参数
 *
 */

export interface SwitchEntity extends RadioEntity {
    props : LabelEntity,
}

export type SwitchType = { item? : SwitchEntity | any, classnames? : string | '' } & SwitchEntity


/**
 * @name UploadEntity      -  上传文件
 * @param {String} name    - 参数名称
 * @param {String} placeholder    - 参数名称
 * @param {RequestEntity} load    - 参数名称
 * @param {String} placeholderClassName    - 参数名称
 * @param {String} className    - 参数名称
 * @param {String} params    - 参数名称
 *
 */
export interface UploadEntity extends InputEntity {

}

export type UploadType = { item? : UploadEntity | any, classnames? : string | '' } & UploadEntity


/**
 * @description 选择框
 * @name  PickerEntity
 * @param {LabelEntity} children                   - 动态参数
 * @param {Number} column                   - 动态参数
 *
 */

export interface PickerEntity extends SelectEntity {
    children : LabelEntity;
    column : number;
}

/**
 * @name  PickerType
 * @param {RequestEntity} props                   - 动态参数
 *
 */

export type PickerType = { item? : PickerEntity | any, classnames? : string | '' } & PickerEntity


/**
 * @description 弹窗
 * @param {String} dialogTopClassName - 弹窗头部class
 * @param {String} dialogBodyClassName - 弹窗内容区域class
 * @param {String} isclose - 是否显示关闭按钮，默认不显示
 * @param {String} isok - 是否显示确认按钮,默认显示
 * @param {String} dtype - 弹窗位置,默认center
 *
 */

export interface DialogEntity {
    dtype? : string | 'center';
    dialogTopClassName? : string;
    isok? : boolean;
    isclose? : boolean | false;
    dialogBodyClassName? : string;
};

export  type DialogType = { item? : DialogEntity | any, classnames? : string | '' } & DialogEntity;

/**
 *
 * @hideconstructor 按钮
 * @param {String} text - 文本,默认center
 *
 */
export interface ButtonEntity extends LabelEntity {
    imgClassName? : string;
    list? : Array<LabelEntity>;
}

export type ButtonType = { item? : ButtonEntity | any, classnames? : string | '' } & ButtonEntity;

/**
 * @hideconstructor 协议
 * @param {String} text - 文本,默认center
 *
 */
export interface TcpEntity extends CheckboxEntity {
    text? : string | '';
    list? : Array<LabelEntity>;
}

export type TcpType = { item? : TcpEntity | any, classnames? : string | '' } & TcpEntity;

/**
 * @description 轮播图
 * @param {String} circular                 - 是否采用衔接滑动
 * @param {String} indicatorDots            - 是否显示面板指示点
 * @param {String} autoplay                 - 是否自动切换
 * @param {String} list                     - 数据列表
 * @param {String} className                - classNmae
 * @param {String} current                  - 当前位置
 * @param {String} interval                 - 自动切换时间间隔
 * @param {String} vertical                 - 滑动方向是否为纵向
 * @param {String} indicatorActiveColor     - 当前选中的指示点颜色
 * @param {String} indicatorColor           - 指示点颜色
 *
 */
export interface SwiperEntity {
    circular? : boolean | true;
    indicatorDots? : boolean | true;
    autoplay? : boolean | true;
    list? : Array<LabelEntity | string>;
    className? : string;
    current? : number | 0;
    interval : number | 8000;
    vertical? : boolean | false;
    indicatorActiveColor? : string;
    indicatorColor? : string;
}

export  type SwiperType = { item? : SwiperEntity | any, classnames? : string | '' } & SwiperEntity

/**
 * @description 容器
 * @param {Boolean} scrollY                - 垂直滚动
 * @param {Boolean} scrollX                - 水平滚动
 * @param {String} scrollTop               - 顶部距离
 * @param {String} className               - 弹窗位置,默认center
 * @param {String} styleView               - 弹窗位置,默认center
 * @param {Number} upperThreshold          - 距顶部/左边多远时（单位px），触发 scrolltoupper 事件
 * @param {Number} lowerThreshold          - 距底部/右边多远时（单位px），触发 scrolltolower 事件
 *
 */
export interface ScrollEntity {
    scrollY? : boolean | true;
    scrollX? : boolean | false;
    scrollPosition? : number;
    scrollTop? : number | 0;
    classnames? : string | '';
    styleView? : string;
    scrollIntoView? : string;
    upperThreshold? : number | 100;
    lowerThreshold? : number | 100;
}

export  type ScrollType = & ScrollEntity;

/**
 * @description 容器
 * @param {String} scrollY - 垂直滚动
 * @param {String} scrollX - 水平滚动
 * @param {String} scrollLeft - 左边距离
 * @param {String} scrollTop - 顶部距离
 * @param {String} dtype - 弹窗位置,默认center
 *
 */
export interface TabsEntity extends LabelEntity {
    itemClassName? : number | 50;
    activeClassName? : number | 50;
    className? : string | '';
    list : Array<LabelEntity>;
}

export  type TabsType = { item : TabsEntity | any, classnames : string } & ScrollEntity;

/**
 * @description 容器
 * @param {String} items - 顶部距离
 *
 */
export interface MenuEntity extends ItemEntity {
    data : object;
    mode : string;
    bodyClassName : string;
}

export  type MenuType = {
    option : MenuEntity;
    items : Array<MenuEntity>;
    classnames : string;
} & MenuEntity;
