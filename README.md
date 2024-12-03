# Pine-utils 公共方法插件

## 安装

npm i pine-utils     

[ItemEntity](./src/entity.ts?ItemEntity)

## dataEmpty

| 参数   |   类型   |   说明 |   
|:-----|:------:|-----:|   
| item | object | Item |      




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
