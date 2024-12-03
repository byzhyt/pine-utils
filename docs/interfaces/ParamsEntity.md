[**pine-utils**](../README.md) • **Docs**

***

[pine-utils](../globals.md) / ParamsEntity

# Interface: ParamsEntity

## Name

## Description

获取指定参数

## Param

数组传值

## Param

参数数组

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
      label: 'orderId',
      value: 'orderId'
 }, {
      label: 'createTime',
      value: 'createTime'
 }, {
      label: 'label',
      static: true,
      value: '微信支付'
 }]
 @export
`
     {
         label:'微信支付',
         createTime:'2024-09-18 09:58:13',
         orderId:'78788'
     }
`
`
```

## Extends

- [`LabelEntity`](LabelEntity.md)

## Properties

### label

> **label**: `string`

#### Inherited from

[`LabelEntity`](LabelEntity.md).[`label`](LabelEntity.md#label)

#### Defined in

[entity.ts:78](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/entity.ts#L78)

***

### multiple

> **multiple**: `boolean`

#### Defined in

[entity.ts:243](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/entity.ts#L243)

***

### params

> **params**: [`LabelEntity`](LabelEntity.md)[]

#### Defined in

[entity.ts:244](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/entity.ts#L244)

***

### path?

> `optional` **path**: `string`

#### Inherited from

[`LabelEntity`](LabelEntity.md).[`path`](LabelEntity.md#path)

#### Defined in

[entity.ts:82](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/entity.ts#L82)

***

### static?

> `optional` **static**: `boolean`

#### Inherited from

[`LabelEntity`](LabelEntity.md).[`static`](LabelEntity.md#static)

#### Defined in

[entity.ts:83](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/entity.ts#L83)

***

### storage?

> `optional` **storage**: `string`

#### Inherited from

[`LabelEntity`](LabelEntity.md).[`storage`](LabelEntity.md#storage)

#### Defined in

[entity.ts:80](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/entity.ts#L80)

***

### value

> **value**: `string`

#### Inherited from

[`LabelEntity`](LabelEntity.md).[`value`](LabelEntity.md#value)

#### Defined in

[entity.ts:79](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/entity.ts#L79)

***

### visible

> **visible**: `boolean`

#### Inherited from

[`LabelEntity`](LabelEntity.md).[`visible`](LabelEntity.md#visible)

#### Defined in

[entity.ts:81](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/entity.ts#L81)
