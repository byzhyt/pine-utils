[**pine-utils**](../README.md) • **Docs**

***

[pine-utils](../globals.md) / verifyData

# Function: verifyData()

> **verifyData**(`__namedParameters`): `Promise`\<`unknown`\>

## Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.data**: `Object`

• **\_\_namedParameters.items**: [`ItemEntity`](../interfaces/ItemEntity.md)[]

• **\_\_namedParameters.validate?**: `object`

## Returns

`Promise`\<`unknown`\>

## Name

verifyData

## Description

校验数据

## Example

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

## Export

`
 true
`

## Defined in

[utils.ts:386](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/utils.ts#L386)
