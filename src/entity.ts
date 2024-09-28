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
    url: string;
    prefix: string;
    type: string;
    data: object | {};
    loading: string;
    showMessage: string;
    contentType: string;
    queer: boolean;
    once: number,
    request: string | 'data'
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
    label: string;
    value: string;
    storage?: string;
    visible: boolean,
    path?: string,
    static?: boolean;
}

/**
 * @description         组件场景使用
 * @param {String }     label        - 字段
 * @param {String }     value        - 值/字段值
 * @param {String }     storage      - 判断缓存阈值
 * @param {Boolean }    static       - 动态值获取指
 * @param {Boolean}     visible      -  判断是否是
 * @param {String}      path         -  跳转路径
 *
 *
 */

export type LabelType = {
    label: {
        type: String,
        required: false,
        default: ''
    };
    value: {
        type: String,
        required: false,
        default: ''
    };
    storage: {
        type: String,
        required: false,
        default: ''
    };
    static: {
        type: String,
        required: false,
        default: ''
    };
    visible: {
        type: Boolean,
        required: false,
        default: true
    };
    path: {
        type: String,
        required: false,
        default: ''
    };
}


/**
 *   @name  ImageEntity             图片
 *   @description                -  图片组件单元
 *   @param {String} path        -  跳转路路
 *   @param {String} className   -  样式className
 *   @param {String} icon        -  处理函数
 *   @param {String} preview     -  是否预览
 *   @param {String} lazy        -  懒加载
 *   @param {String} fit         -  适应方式
 *   @param {String} alt         -  原生alt
 *
 */

export interface ImageEntity {
    icon: string;
    className: string;
    path: string;
    lazy: boolean;
    fit: string;
    alt: string;
    preview: boolean;
}


/**
 *    @name  ImageType             图片参数
 *    @description                 - 图片组件单元
 *    @param {String} path         - 跳转路路
 *    @param {String} classnames   - 样式className
 *    @param {String} icon         - 处理函数
 *    @param {Boolean} preview      - 是否预览
 *    @param {String} lazy         - 懒加载
 *    @param {String} fit          - 适应方式
 *    @param {String} alt          - 原生alt
 *
 */

export type ImageType = {
    path: {
        type: String,
        required: false,
        default: ''
    };
    classnames: {
        type: String,
        required: false,
        default: ''
    };
    preview: {
        type: Boolean,
        required: false,
        default: true
    };
    fit: {
        type: String,
        required: false,
        default: ''
    };
    lazy: {
        type: Boolean,
        required: false,
        default: false
    };
    alt: {
        type: String,
        required: false,
        default: ''
    };
}


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
    multiple: boolean;
    params: Array<LabelEntity>
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
    inline?: boolean;
    rules?: object;
    load?: Array<RequestEntity>;
    data?: object;
    items?: Array<any>;
    className?: string;
    disabled?: boolean;
    labelStyle?: string;
    labelClassName?: string;
    span?: number;
    gutter?: number;
    append: FormItemEntity;
    prepend: FormItemEntity;
}


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
    className?: string;
    imageClassName?: String;
    activeClassName?: String;
    icon?: string;
    disabled?: boolean;
    dataType?: string;
    rreq?: LabelEntity;
    nonstop?: LabelEntity;
    request: string;
    queer?: boolean;
    load: RequestEntity;
    params: Array<LabelEntity>;
}

/**
 * @name  ItemType                          -  列表单元
 * @param {String}  activeClassName          - 选中className类
 * @param {String}  classnames                - className 类
 * @param {Boolean} imageClassName           - 图片className
 * @param {String}  icon                     - 图标
 * @param {Boolean} disabled                 - 是否禁用
 *
 */

export  type ItemType = LabelType & {
    icon: {
        type: String,
        required: false,
        default: ''
    },
    disabled: {
        type: String,
        required: false,
        default: false
    },
    classnames: {
        type: String,
        required: false,
        default: ''
    },
    imageClassName: {
        type: String,
        required: false,
        default: ''
    },
    activeClassName: {
        type: String,
        required: false,
        default: ''
    }
}


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
    trueValue?: String | Boolean | Number,
    falseValue?: String | Boolean | Number,
    checked?: Boolean,
    color?: String,
    activeClassNam?: String
}

/**
 * {@link <identifier>}
 * @desc 单选组件
 * @param {ItemEntity} item                              - 参数超过三个以上建议使用
 * @param {String,Boolean,Number} trueValue       - 选中绑定值； 单选有效
 * @param {String,Boolean,Number} falseValue             - 未选中绑定值；单选有效
 * @param {String} color                                 - 选中颜色设置
 * @param {String} activeClassName                       - 选中className类
 * @param {Boolean} checked                              - 是否选中
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
export type RadioType = LabelType & {
    item: {
        type: RadioEntity,
        required: false,
        default: {}
    },
    activeClassName: {
        type: String,
        required: false,
        default: ''
    },
    color: {
        type: String,
        required: false,
        default: ''
    },
    falseValue: {
        type: [String, Boolean, Number],
        required: false,
        default: false
    },
    trueValue: {
        type: [String, Boolean, Number],
        required: false,
        default: true
    },
    checked: {
        type: Boolean,
        required: false,
        default: false
    }
}


/**
 * @name CheckboxEntity
 * @param {'checkbox', 'button'} type      - 类型
 *
 */
export interface CheckboxEntity extends RadioEntity {
    type?: 'checkbox' | 'button'
}

/**
 * @name CheckboxType
 * @description 复选框
 * @param {'checked'| 'button'} type      - 类型
 *
 */
export type CheckboxType = RadioType & {
    item: {
        type: CheckboxEntity,
        required: false,
        default: {}
    },
    type: {
        type: ['checkbox', 'button'],
        required: false,
        default: 'checkbox'
    }
}


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
    name?: string,
    asterisk?: string,
    eltype: 'input' | 'upload' | 'content' | 'button' | 'picker' | 'switch' | 'radio' | 'code' | 'editor' | 'tcp',
    slotName?: string,
    placeholder?: string;
    bodyClassName?: string,
    placeholderClassName?: string;
    labelStyle?: string;
    labelClassName?: string;
    itemClassName?: string;
    itemStyle?: string;
    imgClassName?: string;
    control?: Array<LabelEntity>;
    cascader?: Array<LabelEntity>
}


/**
 * @name  FormItemType
 * @deprecated                                                表单类型
 * @param {Boolean} inline                                    - 是否水平
 * @param {FormItemEntity}  item                               - 单元数据
 * @param {String} label                                      - 文案
 * @param {String} bodyClassName                              - 单元className
 * @param {String} labelClassName                             - 文案className类
 * @param {String} labelStyle                                 - 文案行内样式
 * @param {String} itemClassName                              - 单元内容className
 * @param {String} eltype                                     - 单元类型['input',upload,content,button,picker,switch,radio,code,editor , tcp],
 * @param {Boolean} asterisk                                  - 是否显示必选
 * @param {String} placeholder                                - description
 * @param {String} placeholderClassName                       - description
 * @param {Boolean} disabled                                  - 是否禁用
 * @param {Boolean} visible                                   - 单元是否显示
 * @param {Array} control                                     - 控制字段
 *
 */
export type FormItemType = {
    item: {
        type: FormItemEntity,
        default: {},
        required: false
    },
    bodyClassName: {
        type: String,
        default: '',
        required: false
    },
    asterisk: {
        type: Boolean,
        default: true,
        required: false
    },
    eltype: {
        type: ['input', 'upload', 'content', 'button', 'picker', 'switch', 'radio', 'code', 'tcp', 'editor'],
        default: '',
        required: false
    },
    itemClassName: {
        type: String,
        default: '',
        required: false
    },
    labelClassName: {
        type: String,
        default: '',
        required: false
    },
    label: {
        type: String,
        default: '',
        required: false
    },
    change: {
        type: void,
        default: () => {},
        required: false
    },
    submit: {
        type: void,
        default: () => {},
        required: false
    },
    disabled: {
        type: Boolean,
        default: true,
        required: false
    },
    placeholder: {
        type: String,
        default: '',
        required: false
    },
    placeholderClassName: {
        type: String,
        default: '',
        required: false
    }
}


/**
 * @name  InputEntity
 * @param {String} name                          - 参数字段
 * @param {'password' | 'text'} type             - 类型
 * @param {RequestEntity} load                   - 请求
 * @param {String} params                        - 参数名称
 * @param {Number} minlength                     - 最小值
 * @param {Number} maxlength                     - 最大值
 *
 */
export interface InputEntity extends FormItemEntity {
    type?: 'password' | 'text'
    minlength: number
    maxlength: number
}

/**
 * @name  InputType
 * @param {String} name                          - 参数字段
 * @param {'password' | 'text'} type             - 类型
 * @param {RequestEntity} load                   - 请求
 * @param {String} params                        - 参数名称
 * @param {Number} minlength                     - 最小值
 * @param {Number} maxlength                     - 最大值
 *
 */

export  type InputType = FormItemType & {
    item: {
        type: InputEntity,
        default: {},
        required: false
    },
    type: {
        type: String,
        default: '',
        required: false
    },
    load: {
        type: RequestEntity,
        default: {},
        required: false
    },
    name: {
        type: String,
        default: '',
        required: false
    },
    maxlength: {
        type: Number,
        default: 10,
        required: false
    },
    minlength: {
        type: Number,
        default: 0,
        required: false
    },
    params: {
        type: Array<LabelEntity>,
        default: [],
        required: false
    }
}


/**
 * @name  SelectEntity
 * @param {RequestEntity} props                   - 动态参数
 *
 */

export interface SelectEntity extends InputEntity {
    props: LabelEntity,
}


/**
 * @name  SelectType
 * @param {RequestEntity} props                   - 动态参数
 *
 */

export type SelectType = InputType & {
    props: {
        type: LabelEntity,
        default: LabelEntity,
        required: false
    }
}

/**
 * @name  SwitchEntity
 * @param {RequestEntity} props                   - 动态参数
 *
 */

export interface SwitchEntity extends RadioEntity {
    props: LabelEntity,
}


/**
 * @name  SwitchType
 * @param {RequestEntity} props                   - 动态参数
 *
 */

export type SwitchType = RadioType


/**
 * @name UploadEntity
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

/**
 * @name   UploadType
 * @param {String} name    - 参数名称
 * @param {String} placeholder    - 参数名称
 * @param {RequestEntity} load    - 参数名称
 * @param {String} placeholderClassName    - 参数名称
 * @param {String} className    - 参数名称
 * @param {String} params    - 参数名称
 */


export type UploadType = & InputType


/**
 * @name  PickerEntity
 * @param {LabelEntity} children                   - 动态参数
 *
 * @param {Number} column                   - 动态参数
 *
 */

export interface PickerEntity extends SelectEntity {
    children: LabelEntity;
    column: number
}


/**
 * @name  PickerType
 * @param {RequestEntity} props                   - 动态参数
 *
 */

export type PickerType = & PickerEntity

export type itemType = {
    eltype: string;
    dataType: string
}
