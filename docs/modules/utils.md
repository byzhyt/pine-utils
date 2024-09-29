[pine-utils](../README.md) / [Modules](../modules.md) / utils

# Module: utils

## Table of contents

### Variables

- [validation](utils.md#validation)

### Functions

- [arrayToOnly](utils.md#arraytoonly)
- [beforeAxiosEnter](utils.md#beforeaxiosenter)
- [dataEmpty](utils.md#dataempty)
- [fillNumber](utils.md#fillnumber)
- [findObjectValue](utils.md#findobjectvalue)
- [getDataToJSON](utils.md#getdatatojson)
- [getName](utils.md#getname)
- [getParams](utils.md#getparams)
- [getPlatform](utils.md#getplatform)
- [isObject](utils.md#isobject)
- [jsonToGetData](utils.md#jsontogetdata)
- [random](utils.md#random)
- [randomText](utils.md#randomtext)
- [setFilePath](utils.md#setfilepath)
- [statusError](utils.md#statuserror)
- [verifyData](utils.md#verifydata)
- [verifyOption](utils.md#verifyoption)

## Variables

### validation

• `Const` **validation**: `any`

**`Name`**

validation

**`Param`**

域名验证

**`Param`**

营业执照

**`Param`**

用户名

**`Param`**

编码

**`Param`**

中文

**`Param`**

手机号/电话

**`Param`**

英文

**`Param`**

英文字典名

**`Param`**

邮箱

**`Param`**

手机号

**`Param`**

座机号码

**`Param`**

整数

**`Param`**

浮点数

**`Param`**

银行卡

**`Param`**

日期

**`Param`**

文本信息

**`Example`**

```ts
`
const data={
    phone:'4544545'
}
const iten={
        name: 'mobile',
        visible: true,
        eltype: 'input',
        maxlength: 11,
        minlength: 11,
        asterisk: true,
        required: true,
        label: '手机号：',
        pattern:validation['phone'],
        type: 'number',
        placeholder: '请输入收货人手机号',
        bodyClassName: ' border-bottom p-25rpx text-24rpx'
}
new RegExp(validation[iten.pattern])
`
```

**`Export`**

`
     retrun  false
`

#### Defined in

[utils.ts:531](https://github.com/byzhyt/pine-utils/blob/ffd389eb3428df548d6915e5e5ecf51280b6f477/src/utils.ts#L531)

## Functions

### arrayToOnly

▸ **arrayToOnly**(`list`, `key?`): `any`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `list` | (`string` \| `number` \| `object`)[] | `undefined` | 数组 |
| `key` | `string` | `"id"` | 唯一标识 |

#### Returns

`any`

**`Name`**

arrayToOnly

**`Description`**

去重数组

#### Defined in

[utils.ts:108](https://github.com/byzhyt/pine-utils/blob/ffd389eb3428df548d6915e5e5ecf51280b6f477/src/utils.ts#L108)

___

### beforeAxiosEnter

▸ **beforeAxiosEnter**(`item`, `datas?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `FormItemEntity` |
| `datas` | `any` |

#### Returns

`any`

**`Name`**

beforeAxiosEnter

**`Example`**

```ts
`
 const item={

 }
 const data={

 }
 beforeAxiosEnter(item,data)
`
```

#### Defined in

[utils.ts:429](https://github.com/byzhyt/pine-utils/blob/ffd389eb3428df548d6915e5e5ecf51280b6f477/src/utils.ts#L429)

___

### dataEmpty

▸ **dataEmpty**(`item`): `any`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `FormItemEntity` | 对象参数 |

#### Returns

`any`

**`Name`**

**`Description`**

默认类型值设置

**`Export`**

`
dataEmpty({dataType:'a'})
`

#### Defined in

[utils.ts:13](https://github.com/byzhyt/pine-utils/blob/ffd389eb3428df548d6915e5e5ecf51280b6f477/src/utils.ts#L13)

___

### fillNumber

▸ **fillNumber**(`n`): `string` \| `number`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `string` \| `number` | 数据源 |

#### Returns

`string` \| `number`

**`Name`**

fillNumber

**`Description`**

补全两位数,各位数补0

**`Export`**

`
fillNumber(2)
`

**`Export`**

`02`

#### Defined in

[utils.ts:50](https://github.com/byzhyt/pine-utils/blob/ffd389eb3428df548d6915e5e5ecf51280b6f477/src/utils.ts#L50)

___

### findObjectValue

▸ **findObjectValue**(`datas`, `name`): `any`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `datas` | `any` | 数据源 |
| `name` | `string` | 查找字段 ：如果多级以逗号,分开 |

#### Returns

`any`

**`Name`**

findObjectValue

**`Description`**

获取json数据指定key的值

**`Example`**

```ts
`
 const temjson={
    data:{
         label:'label',
         value:'label'
    }
 }
 findObjectValue(temjson,'data.label')
`
```

**`Export`**

`
 label
`

#### Defined in

[utils.ts:80](https://github.com/byzhyt/pine-utils/blob/ffd389eb3428df548d6915e5e5ecf51280b6f477/src/utils.ts#L80)

___

### getDataToJSON

▸ **getDataToJSON**(`data`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`any`

**`Name`**

getDataToJSON

**`Description`**

get参数转json对象'

**`Author`**

songren

**`Example`**

```ts
`
 const tempjson=http://baidu.com?label=label&value=value
 getDataToJSON(tempjson)
`
```

**`Export`**

`
 {
     label:'label',
     value:'value'
 }
`

#### Defined in

[utils.ts:171](https://github.com/byzhyt/pine-utils/blob/ffd389eb3428df548d6915e5e5ecf51280b6f477/src/utils.ts#L171)

___

### getName

▸ **getName**(`item`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `FormItemEntity` |

#### Returns

`string`

**`Name`**

getName

**`Description`**

#### Defined in

[utils.ts:35](https://github.com/byzhyt/pine-utils/blob/ffd389eb3428df548d6915e5e5ecf51280b6f477/src/utils.ts#L35)

___

### getParams

▸ **getParams**(`item`, `datas`): `any`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `ParamsEntity` | 参数数组单元 |
| `datas` | `any` | 数源 |

#### Returns

`any`

**`Name`**

getParams

**`Example`**

```ts
`
  const data={
     orderId:'78788',
     costPrice: 2000
     createBy: "1"
     createTime: "2024-09-18 09:58:13"
     deleted: "0"
     deliveryTemplateId: "63"
     favoriteCounts: 0
     forLevel: "Y"
  }
 const item={
     label:'orderId',
     value:'orderId',
     static:''
 }
 getParams(item,data)

 `
```

**`Export`**

`
  {
      orderId:'78788'
  }

  `

#### Defined in

[utils.ts:264](https://github.com/byzhyt/pine-utils/blob/ffd389eb3428df548d6915e5e5ecf51280b6f477/src/utils.ts#L264)

___

### getPlatform

▸ **getPlatform**(): ``"app"`` \| ``"pc"``

#### Returns

``"app"`` \| ``"pc"``

#### Defined in

[utils.ts:571](https://github.com/byzhyt/pine-utils/blob/ffd389eb3428df548d6915e5e5ecf51280b6f477/src/utils.ts#L571)

___

### isObject

▸ **isObject**(`val`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |

#### Returns

`boolean`

#### Defined in

[utils.ts:54](https://github.com/byzhyt/pine-utils/blob/ffd389eb3428df548d6915e5e5ecf51280b6f477/src/utils.ts#L54)

___

### jsonToGetData

▸ **jsonToGetData**(`data`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`string`

**`Name`**

jsonToGetData

**`Description`**

JSON转get数据

**`Example`**

```ts
`
 const tempjson={
     label:'label',
     value:'value'
 }
`
```

**`Export`**

`
`?label=label&value=value
`

#### Defined in

[utils.ts:143](https://github.com/byzhyt/pine-utils/blob/ffd389eb3428df548d6915e5e5ecf51280b6f477/src/utils.ts#L143)

___

### random

▸ **random**(`s`, `e`): `number`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `s` | `string` \| `number` | 范围开始 |
| `e` | `string` \| `number` | 范围结束 |

#### Returns

`number`

**`Nme`**

random

**`Description`**

获取随机数

**`Export`**

`
 random(1,5)
`

**`Export`**

`
 随机返回1-5之间的数字
`

#### Defined in

[utils.ts:197](https://github.com/byzhyt/pine-utils/blob/ffd389eb3428df548d6915e5e5ecf51280b6f477/src/utils.ts#L197)

___

### randomText

▸ **randomText**(`len?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `len` | `number` | `20` |

#### Returns

`string`

''

**`Name`**

randomText

**`Description`**

设置有位数随机数

**`Example`**

```
randomText(10)
```

**`Export`**

0
'100'

#### Defined in

[utils.ts:218](https://github.com/byzhyt/pine-utils/blob/ffd389eb3428df548d6915e5e5ecf51280b6f477/src/utils.ts#L218)

___

### setFilePath

▸ **setFilePath**(`path`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`string`

#### Defined in

[utils.ts:405](https://github.com/byzhyt/pine-utils/blob/ffd389eb3428df548d6915e5e5ecf51280b6f477/src/utils.ts#L405)

___

### statusError

▸ **statusError**(`code`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Returns

`any`

#### Defined in

[utils.ts:583](https://github.com/byzhyt/pine-utils/blob/ffd389eb3428df548d6915e5e5ecf51280b6f477/src/utils.ts#L583)

___

### verifyData

▸ **verifyData**(`«destructured»`): `Promise`\<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `data` | `Object` |
| › `items` | `ItemEntity`[] |
| › `validate?` | `object` |

#### Returns

`Promise`\<`unknown`\>

**`Name`**

verifyData

**`Description`**

校验数据

**`Example`**

```ts
`

 const data= {
     receiver:'455'
 }
 const items=[{
       name: 'receiver',
        eltype: 'input',
        asterisk: true,
        visible: true,
        maxlength: 20,
        minlength: 2,
        label: '收货人：',
        type: 'text',
        required: true,
        pattern: 'name',
        placeholder: '请输入收货人',
        bodyClassName: ' border-bottom p-25rpx text-24rpx'
 }]
 verifyData(data,items)
`
```

**`Export`**

`
 true
`

#### Defined in

[utils.ts:386](https://github.com/byzhyt/pine-utils/blob/ffd389eb3428df548d6915e5e5ecf51280b6f477/src/utils.ts#L386)

___

### verifyOption

▸ **verifyOption**(`list`, `data`, `name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | `any` |
| `data` | `any` |
| `name` | `string` |

#### Returns

`boolean`

**`Name`**

verifyOption

**`Description`**

表单校验

**`Example`**

```ts
`
 const data= {
     receiver:'455'
 }
 const items=[{
       name: 'receiver',
        eltype: 'input',
        asterisk: true,
        visible: true,
        maxlength: 20,
        minlength: 2,
        label: '收货人：',
        type: 'text',
        required: true,
        pattern: 'name',
        placeholder: '请输入收货人',
        bodyClassName: ' border-bottom p-25rpx text-24rpx'
 }]
 verifyOption(list,data,name)
`
```

**`Export`**

true
`

#### Defined in

[utils.ts:317](https://github.com/byzhyt/pine-utils/blob/ffd389eb3428df548d6915e5e5ecf51280b6f477/src/utils.ts#L317)
