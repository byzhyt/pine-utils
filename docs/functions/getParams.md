[**pine-utils**](../README.md) • **Docs**

***

[pine-utils](../globals.md) / getParams

# Function: getParams()

> **getParams**(`item`, `datas`): `any`

## Parameters

• **item**: [`ParamsEntity`](../interfaces/ParamsEntity.md)

参数数组单元

• **datas**: `any`

数源

## Returns

`any`

## Name

getParams

## Example

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

## Export

`
  {
      orderId:'78788'
  }

  `

## Defined in

[utils.ts:264](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/utils.ts#L264)
