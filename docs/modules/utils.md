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

#### Defined in

utils.ts:317

## Functions

### arrayToOnly

▸ **arrayToOnly**(`list`, `key?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `list` | (`string` \| `number` \| `object`)[] | `undefined` |
| `key` | `string` | `"id"` |

#### Returns

`any`

#### Defined in

utils.ts:63

___

### beforeAxiosEnter

▸ **beforeAxiosEnter**(`item`, `datas?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `any` |
| `datas` | `any` |

#### Returns

`any`

#### Defined in

utils.ts:261

___

### dataEmpty

▸ **dataEmpty**(`item`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `itemType` |

#### Returns

`any`

#### Defined in

utils.ts:3

___

### fillNumber

▸ **fillNumber**(`n`): `string` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `string` \| `number` |

#### Returns

`string` \| `number`

#### Defined in

utils.ts:24

___

### findObjectValue

▸ **findObjectValue**(`datas`, `name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `datas` | `any` |
| `name` | `string` |

#### Returns

`any`

**`Params`**

datasx

*

#### Defined in

utils.ts:38

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

utils.ts:123

___

### getName

▸ **getName**(`item`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `any` |

#### Returns

`any`

#### Defined in

utils.ts:19

___

### getParams

▸ **getParams**(`item`, `datas`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `any` |
| `datas` | `any` |

#### Returns

`any`

#### Defined in

utils.ts:168

___

### getPlatform

▸ **getPlatform**(): ``"app"`` \| ``"pc"``

#### Returns

``"app"`` \| ``"pc"``

#### Defined in

utils.ts:356

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

utils.ts:28

___

### jsonToGetData

▸ **jsonToGetData**(`data`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`string`

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

utils.ts:95

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

**`Author`**

songren

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

utils.ts:149

___

### randomText

▸ **randomText**(`len?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `len` | `number` | `20` |

#### Returns

`string`

#### Defined in

utils.ts:156

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

utils.ts:256

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

utils.ts:368

___

### verifyData

▸ **verifyData**(`«destructured»`): `Promise`\<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `any` |

#### Returns

`Promise`\<`unknown`\>

**`Author`**

songren

**`Example`**

```ts
`

`
```

#### Defined in

utils.ts:238

___

### verifyOption

▸ **verifyOption**(`list`, `data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | `any` |
| `data` | `any` |

#### Returns

`boolean`

**`Author`**

songren

**`Description`**

表单校验

**`Example`**

```ts

```

#### Defined in

utils.ts:193
