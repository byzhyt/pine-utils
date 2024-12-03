[**pine-utils**](../README.md) • **Docs**

***

[pine-utils](../globals.md) / verifyOption

# Function: verifyOption()

> **verifyOption**(`list`, `data`, `name`): `boolean`

## Parameters

• **list**: `any`

• **data**: `any`

• **name**: `string`

## Returns

`boolean`

## Name

verifyOption

## Description

表单校验

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
 verifyOption(list,data,name)
`
```

## Export

true
`

## Defined in

[utils.ts:317](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/utils.ts#L317)
