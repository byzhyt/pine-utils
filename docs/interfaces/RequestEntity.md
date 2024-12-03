[**pine-utils**](../README.md) • **Docs**

***

[pine-utils](../globals.md) / RequestEntity

# Interface: RequestEntity

## Description

RequestEntity请求参数

## Param

请求路径

## Param

请求前缀

## Param

请求类型

## Param

请求数据，可以省略

## Param

请求加载状态

## Param

响应请求提示

## Param

请求次数

## Param

请求头响应类型

## Param

怪异请求 如：post请求/params参数

## Param

请求响应返回字段

## Example

```ts
`
     {
          prefix: VITE_BASE_API,
          url: "/api/order/order/refundOrder",
          type: "put",
          request:'data’,
          showMessage: '操作成功',
          loading: '请稍等...'
     }
 `
```

## Properties

### contentType

> **contentType**: `string`

#### Defined in

[entity.ts:33](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/entity.ts#L33)

***

### data

> **data**: `object` \| `object`

#### Defined in

[entity.ts:30](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/entity.ts#L30)

***

### loading

> **loading**: `string`

#### Defined in

[entity.ts:31](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/entity.ts#L31)

***

### once

> **once**: `number`

#### Defined in

[entity.ts:35](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/entity.ts#L35)

***

### prefix

> **prefix**: `string`

#### Defined in

[entity.ts:28](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/entity.ts#L28)

***

### queer

> **queer**: `boolean`

#### Defined in

[entity.ts:34](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/entity.ts#L34)

***

### request

> **request**: `string`

#### Defined in

[entity.ts:36](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/entity.ts#L36)

***

### showMessage

> **showMessage**: `string`

#### Defined in

[entity.ts:32](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/entity.ts#L32)

***

### type

> **type**: `string`

#### Defined in

[entity.ts:29](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/entity.ts#L29)

***

### url

> **url**: `string`

#### Defined in

[entity.ts:27](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/entity.ts#L27)
