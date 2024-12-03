[**pine-utils**](../README.md) • **Docs**

***

[pine-utils](../globals.md) / validation

# Variable: validation

> `const` **validation**: `any`

## Name

validation

## Param

域名验证

## Param

营业执照

## Param

用户名

## Param

编码

## Param

中文

## Param

手机号/电话

## Param

英文

## Param

英文字典名

## Param

邮箱

## Param

手机号

## Param

座机号码

## Param

整数

## Param

浮点数

## Param

银行卡

## Param

日期

## Param

文本信息

## Example

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

## Export

`
     retrun  false
`

## Defined in

[utils.ts:534](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/utils.ts#L534)
