[pine-utils](../README.md) / [Modules](../modules.md) / [request](../modules/request.md) / axiosHttpRequest

# Class: axiosHttpRequest

[request](../modules/request.md).axiosHttpRequest

description  请求

## Hierarchy

- [`httpRequestConfig`](request.httpRequestConfig.md)

  ↳ **`axiosHttpRequest`**

## Table of contents

### Constructors

- [constructor](request.axiosHttpRequest.md#constructor)

### Properties

- [WebHttpRequest](request.axiosHttpRequest.md#webhttprequest)
- [configRequest](request.axiosHttpRequest.md#configrequest)
- [selfconfig](request.axiosHttpRequest.md#selfconfig)

### Methods

- [configRequestFunction](request.axiosHttpRequest.md#configrequestfunction)
- [httpErrorFunction](request.axiosHttpRequest.md#httperrorfunction)
- [httptResponseFunction](request.axiosHttpRequest.md#httptresponsefunction)
- [init](request.axiosHttpRequest.md#init)
- [request](request.axiosHttpRequest.md#request)

## Constructors

### constructor

• **new axiosHttpRequest**(`options`): [`axiosHttpRequest`](request.axiosHttpRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `any` |

#### Returns

[`axiosHttpRequest`](request.axiosHttpRequest.md)

#### Overrides

[httpRequestConfig](request.httpRequestConfig.md).[constructor](request.httpRequestConfig.md#constructor)

#### Defined in

request.ts:141

## Properties

### WebHttpRequest

• **WebHttpRequest**: `any`

#### Inherited from

[httpRequestConfig](request.httpRequestConfig.md).[WebHttpRequest](request.httpRequestConfig.md#webhttprequest)

#### Defined in

request.ts:68

___

### configRequest

• **configRequest**: `any`

#### Inherited from

[httpRequestConfig](request.httpRequestConfig.md).[configRequest](request.httpRequestConfig.md#configrequest)

#### Defined in

request.ts:67

___

### selfconfig

• **selfconfig**: `any`

#### Inherited from

[httpRequestConfig](request.httpRequestConfig.md).[selfconfig](request.httpRequestConfig.md#selfconfig)

#### Defined in

request.ts:69

## Methods

### configRequestFunction

▸ **configRequestFunction**(`config`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `any` |

#### Returns

`any`

#### Inherited from

[httpRequestConfig](request.httpRequestConfig.md).[configRequestFunction](request.httpRequestConfig.md#configrequestfunction)

#### Defined in

request.ts:71

___

### httpErrorFunction

▸ **httpErrorFunction**(`error`): `Promise`\<`never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `any` |

#### Returns

`Promise`\<`never`\>

#### Inherited from

[httpRequestConfig](request.httpRequestConfig.md).[httpErrorFunction](request.httpRequestConfig.md#httperrorfunction)

#### Defined in

request.ts:121

___

### httptResponseFunction

▸ **httptResponseFunction**(`response`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `object` |

#### Returns

`Promise`\<`any`\>

#### Inherited from

[httpRequestConfig](request.httpRequestConfig.md).[httptResponseFunction](request.httpRequestConfig.md#httptresponsefunction)

#### Defined in

request.ts:94

___

### init

▸ **init**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `RequestParams` |

#### Returns

`void`

#### Defined in

request.ts:148

___

### request

▸ **request**(`options`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `RequestEntity` |

#### Returns

`Promise`\<`any`\>

#### Defined in

request.ts:160
