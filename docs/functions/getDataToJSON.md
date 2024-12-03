[**pine-utils**](../README.md) • **Docs**

***

[pine-utils](../globals.md) / getDataToJSON

# Function: getDataToJSON()

> **getDataToJSON**(`data`): `any`

## Parameters

• **data**: `string`

## Returns

`any`

## Name

getDataToJSON

## Description

get参数转json对象'

## Author

songren

## Example

```ts
`
 const tempjson=http://baidu.com?label=label&value=value
 getDataToJSON(tempjson)
`
```

## Export

`
 {
     label:'label',
     value:'value'
 }
`

## Defined in

[utils.ts:171](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/utils.ts#L171)
