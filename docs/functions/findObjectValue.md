[**pine-utils**](../README.md) • **Docs**

***

[pine-utils](../globals.md) / findObjectValue

# Function: findObjectValue()

> **findObjectValue**(`datas`, `name`): `any`

## Parameters

• **datas**: `any`

数据源

• **name**: `string`

查找字段 ：如果多级以逗号,分开

## Returns

`any`

## Name

findObjectValue

## Description

获取json数据指定key的值

## Example

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

## Export

`
 label
`

## Defined in

[utils.ts:80](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/utils.ts#L80)
