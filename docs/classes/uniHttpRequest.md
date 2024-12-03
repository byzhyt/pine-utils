[**pine-utils**](../README.md) • **Docs**

***

[pine-utils](../globals.md) / uniHttpRequest

# Class: uniHttpRequest

## Author

songren

## Description

请求响应配置

## Extends

- [`httpRequestConfig`](httpRequestConfig.md)

## Constructors

### new uniHttpRequest()

> **new uniHttpRequest**(`options`): [`uniHttpRequest`](uniHttpRequest.md)

#### Parameters

• **options**: `any`

#### Returns

[`uniHttpRequest`](uniHttpRequest.md)

#### Overrides

[`httpRequestConfig`](httpRequestConfig.md).[`constructor`](httpRequestConfig.md#constructors)

#### Defined in

[request.ts:179](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/request.ts#L179)

## Properties

### configRequest

> **configRequest**: `any`

#### Inherited from

[`httpRequestConfig`](httpRequestConfig.md).[`configRequest`](httpRequestConfig.md#configrequest)

#### Defined in

[request.ts:77](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/request.ts#L77)

***

### selfconfig

> **selfconfig**: `any`

#### Inherited from

[`httpRequestConfig`](httpRequestConfig.md).[`selfconfig`](httpRequestConfig.md#selfconfig)

#### Defined in

[request.ts:79](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/request.ts#L79)

***

### WebHttpRequest

> **WebHttpRequest**: `any`

#### Overrides

[`httpRequestConfig`](httpRequestConfig.md).[`WebHttpRequest`](httpRequestConfig.md#webhttprequest)

#### Defined in

[request.ts:178](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/request.ts#L178)

## Methods

### configRequestFunction()

> **configRequestFunction**(`config`): `any`

#### Parameters

• **config**: `any`

#### Returns

`any`

#### Inherited from

[`httpRequestConfig`](httpRequestConfig.md).[`configRequestFunction`](httpRequestConfig.md#configrequestfunction)

#### Defined in

[request.ts:81](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/request.ts#L81)

***

### httpErrorFunction()

> **httpErrorFunction**(`error`): `Promise`\<`never`\>

#### Parameters

• **error**: `any`

#### Returns

`Promise`\<`never`\>

#### Inherited from

[`httpRequestConfig`](httpRequestConfig.md).[`httpErrorFunction`](httpRequestConfig.md#httperrorfunction)

#### Defined in

[request.ts:131](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/request.ts#L131)

***

### httptResponseFunction()

> **httptResponseFunction**(`response`): `Promise`\<`any`\>

#### Parameters

• **response**: `object`

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`httpRequestConfig`](httpRequestConfig.md).[`httptResponseFunction`](httpRequestConfig.md#httptresponsefunction)

#### Defined in

[request.ts:104](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/request.ts#L104)

***

### init()

> **init**(`options`): `void`

#### Parameters

• **options**: [`RequestEntity`](../interfaces/RequestEntity.md)

#### Returns

`void`

#### Defined in

[request.ts:186](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/request.ts#L186)

***

### request()

> **request**(`options`): `Promise`\<`any`\>

#### Parameters

• **options**: [`RequestEntity`](../interfaces/RequestEntity.md)

#### Returns

`Promise`\<`any`\>

#### Defined in

[request.ts:190](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/request.ts#L190)
