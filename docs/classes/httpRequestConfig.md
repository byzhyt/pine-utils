[**pine-utils**](../README.md) • **Docs**

***

[pine-utils](../globals.md) / httpRequestConfig

# Class: httpRequestConfig

## Author

songren

## Description

请求响应配置

## Extended by

- [`axiosHttpRequest`](axiosHttpRequest.md)
- [`uniHttpRequest`](uniHttpRequest.md)

## Constructors

### new httpRequestConfig()

> **new httpRequestConfig**(): [`httpRequestConfig`](httpRequestConfig.md)

#### Returns

[`httpRequestConfig`](httpRequestConfig.md)

#### Defined in

[request.ts:80](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/request.ts#L80)

## Properties

### configRequest

> **configRequest**: `any`

#### Defined in

[request.ts:77](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/request.ts#L77)

***

### selfconfig

> **selfconfig**: `any`

#### Defined in

[request.ts:79](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/request.ts#L79)

***

### WebHttpRequest

> **WebHttpRequest**: `any`

#### Defined in

[request.ts:78](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/request.ts#L78)

## Methods

### configRequestFunction()

> **configRequestFunction**(`config`): `any`

#### Parameters

• **config**: `any`

#### Returns

`any`

#### Defined in

[request.ts:81](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/request.ts#L81)

***

### httpErrorFunction()

> **httpErrorFunction**(`error`): `Promise`\<`never`\>

#### Parameters

• **error**: `any`

#### Returns

`Promise`\<`never`\>

#### Defined in

[request.ts:131](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/request.ts#L131)

***

### httptResponseFunction()

> **httptResponseFunction**(`response`): `Promise`\<`any`\>

#### Parameters

• **response**: `object`

#### Returns

`Promise`\<`any`\>

#### Defined in

[request.ts:104](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/request.ts#L104)
