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
    storage: string;
    visible: boolean,
    path: string,
    static: boolean;
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

export type labelType = {
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
}


/**
 *    @name  FormsEntity                 - 表单组件参数
 *    @description                       - 表单组件
 *    @param   {String}   inline         - 表单展示方式span赋值后无效;
 *    @param   {String}   rules          - 表单验证
 *    @param   {String}   loads          - 加载前表单请求;
 *    @param   {String}   data           - 表单静态数据或动态数据;
 *    @param   {String}   items          - 表单单元数据;
 *    @param   {String}   className      - 表单className;
 *    @param   {String}   disabled:      - 表单是否可操作;
 *    @param   {String}   boadyClassName
 *    @param   {String}   labelPosition  - 单元描述显示方向;
 *    @param   {String}   statusIcon     - 表单验证状态;
 *    @param   {String}   labelWidth     - 描述宽度;
 *    @param   {String}   showMessage    - 验证错误信息是否显示;
 *    @param   {String}   inlineMessage  - 验证信息显示方式;
 *    @param   {String}   span           - 表单显示多列;
 *    @param   {String}   gutter         - 每列间距;
 *
 */

export interface FormsEntity {
    inline: boolean;
    rules: object;
    load: Array<loadEntity>;
    data: object;
    items: Array<any>;
    className: string;
    disabled: boolean;
    labelStyle: string;
    labelClassName: string;
    span: number;
    gutter: number;
}


/**
 *
 * @param {String}  name                     - 选中绑定值； 单选有效
 * @param {String}  activeClassName          - 选中className类
 * @param {String}  className                - className 类
 * @param {Boolean} imageClassName           - 图片className
 * @param {String}  icon                     - 图标
 * @param {Boolean} disabled                 - 是否禁用
 *
 */
export interface ItemEntity extends LabelEntity {
    className?: string;
    imageClassName?: String;
    activeClassName?: String;
    icon?: string;
    disabled?: boolean

}

/**
 * @name  labelType                          -  列表单元
 * @param {String}  activeClassName          - 选中className类
 * @param {String}  className                - className 类
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
    className: {
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
 * @name UploadEntity
 */
export interface UploadEntity extends RadioEntity {
    placeholder: string;
    name: '';
}


/**
 * {@link <identifier>}
 * @desc 单选组件
 * @param {Object} item - 参数超过三个以上建议使用
 * @param {String} className - className 类
 * @param {String,Boolean,Number,Object} value - 值，多选时有效
 * @param {String} label - 文案
 * @param {Boolean} disabled - 是否禁用
 * @param {String,Boolean,Number,Object} trueValue - 选中绑定值； 单选有效
 * @param {String,Boolean,Number} falseValue - 未选中绑定值；单选有效
 * @param {String} color - 选中颜色设置
 * @param {String} activeClassName - 选中className类
 * @param {String} label - 文案
 * @param {Boolean} disabled - 是否禁用
 * @param {String}  classnames - className 类
 * @param {String}  color - 选中颜色设置
 * @param {String,Boolean,Number,Object} value - 值，多选时有效
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
export interface RadioEntity extends ItemEntity {
    className?: string,
    value?: String | Boolean | Number,
    label?: '',
    disabled: Boolean,
    trueValue?: String | Boolean | Number,
    falseValue?: String | Boolean | Number,
    checked?: Boolean,
    color?: String,
    activeClassNam?: String
}

/**
 * {@link <identifier>}
 * @desc 单选组件
 * @author  songen
 * @param {Object} item - 参数超过三个以上建议使用
 * @param {String} className - className 类
 * @param {String,Boolean,Number,Object} value - 值，多选时有效
 * @param {String} label - 文案
 * @param {Boolean} disabled - 是否禁用
 * @param {String,Boolean,Number,Object} trueValue - 选中绑定值； 单选有效
 * @param {String,Boolean,Number} falseValue - 未选中绑定值；单选有效
 * @param {String} color - 选中颜色设置
 * @param {String} activeClassName - 选中className类
 * @param {String} label - 文案
 * @param {Boolean} disabled - 是否禁用
 * @param {String}  classnames - className 类
 * @param {String}  color - 选中颜色设置
 * @param {String,Boolean,Number,Object} value - 值，多选时有效
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
export type RadioType = {
    item: {
        type: RadioEntity,
        required: false,
        default: {}
    },
    checked: {
        type: [Boolean, String, Number],
        required: true,
        default: false
    },
    disabled: {
        type: Boolean,
        required: true,
        default: false
    },
    label: {
        type: String,
        required: true,
        default: ''
    },
    classnames: {
        type: String,
        required: true,
        default: ''
    }
}


export interface CheckboxEntity extends RadioEntity {

}


export type CheckboxType = RadioType & {
    type: CheckboxEntity
}


/**
 *
 * @description 表单单元
 * @author songren
 * @param {Boolena} inline - 是否水平
 * @param {Object} item - 单元数据
 * @param {String} name - 绑定数据字段
 * @param {String} label - 文案
 * @param {String} labelClassName - 文案className类
 * @param {String} labelStyle - 文案行内样式
 * @param {String} itemClassName - 单元内容className
 * @param {String} slotName - 插槽名称
 * @param {String} eltype - 单元类型['input',upload,content,button,picker,switch,radio,code],
 * @param {Boolena} asterisk - 是否显示必选
 * @param {String} imgClassName - description
 * @param {String} placeholder - description
 * @param {String} placeholderClassName - description
 * @param {Boolena} disabled - 是否禁用
 * @param {Array} props - 下拉数据回显
 * @param {Object} load - 请求接口
 * @param {Array} params - 参数数组
 * @param {Object} rreq - 动态获取值
 * @param {Boolena} visible - 单元是否显示
 * @param {Array} control - 控制字段
 *
 */


export interface FormItemEntity {
    name: string;
    type?: string;
    eltype: string;
    label?: string;
    disabled?: boolean;
    placeholder?: string;
    placeholderClassName?: string;
    params?: Array<ParamsEntity>;
    path?: string;
    props?: LabelEntity;
    className?: string;
    list?: Array<any>;
    labelStyle?: string;
    labelClassName?: string;
    itemClassName?: string;
    itemStyle?: string;
    imgClassName?: string;
    visible: boolean;
    multiple?: boolean;
    request?: string;
    rreq?: Array<LabelEntity>;
    control?: Array<LabelEntity>;
}


/**@deprecated 表单类型
 * @param {Boolena} inline - 是否水平
 * @param {Object} item - 单元数据
 * @param {String} name - 绑定数据字段
 * @param {String} label - 文案
 * @param {String} bodyClassName - 单元className
 * @param {String} labelClassName - 文案className类
 * @param {String} labelStyle - 文案行内样式
 * @param {String} itemClassName - 单元内容className
 * @param {String} slotName - 插槽名称
 * @param {String} eltype - 单元类型['input',upload,content,button,picker,switch,radio,code],
 * @param {Boolena} asterisk - 是否显示必选
 * @param {String} imgClassName - description
 * @param {String} placeholder - description
 * @param {String} placeholderClassName - description
 * @param {Boolena} disabled - 是否禁用
 * @param {Array} props - 下拉数据回显
 * @param {Object} load - 请求接口
 * @param {Array} params - 参数数组
 * @param {Object} rreq - 动态获取值
 * @param {Boolena} visible - 单元是否显示
 * @param {Array} control - 控制字段
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
        default: true,
        required: false
    },
    inline: {
        type: Boolean,
        default: true,
        required: false
    },
    asterisk: {
        type: Boolean,
        default: true,
        required: false
    },
    eltype: {
        type: [String],
        default: true,
        required: false
    },
    slotName: {
        type: Boolean,
        default: true,
        required: false
    },
    itemClassName: {
        type: String,
        default: true,
        required: false
    },
    labelClassName: {
        type: String,
        default: true,
        required: false
    },
    label: {
        type: String,
        default: true,
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
        default: true,
        required: false
    },
    placeholderClassName: {
        type: String,
        default: true,
        required: false
    }
}

export type itemType = {
    eltype: string;
    dataType: string
}
