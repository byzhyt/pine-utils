[**pine-utils**](../README.md) • **Docs**

***

[pine-utils](../globals.md) / LabelEntity

# Interface: LabelEntity

## Description

数据转换LabelEntity，数组、下拉框、对象详情

## Param

字段

## Param

值/字段值

## Param

判断缓存阈值

## Param

动态值获取指定的字段

## Param

判断是否是静态值

## Param

是否显示

## Param

跳转页面路径

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
 const orderInfoList= [{
    label: '订单编号',
    visible: true,
    value: 'orderId'
  }, {
    label: '下单时间', visible: true,
    value: 'createTime'
  }, {
    label: '支付方式',
    visible: true,
    static: true,
    value: '微信支付'
  }]
`
```

## Extended by

- [`ParamsEntity`](ParamsEntity.md)
- [`ItemEntity`](ItemEntity.md)
- [`RadioEntity`](RadioEntity.md)

## Properties

### label

> **label**: `string`

#### Defined in

[entity.ts:78](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/entity.ts#L78)

***

### path?

> `optional` **path**: `string`

#### Defined in

[entity.ts:82](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/entity.ts#L82)

***

### static?

> `optional` **static**: `boolean`

#### Defined in

[entity.ts:83](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/entity.ts#L83)

***

### storage?

> `optional` **storage**: `string`

#### Defined in

[entity.ts:80](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/entity.ts#L80)

***

### value

> **value**: `string`

#### Defined in

[entity.ts:79](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/entity.ts#L79)

***

### visible

> **visible**: `boolean`

#### Defined in

[entity.ts:81](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/entity.ts#L81)
