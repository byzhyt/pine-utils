[pine-utils](../README.md) / [Modules](../modules.md) / [request](../modules/request.md) / uniHttpRequest

# Class: uniHttpRequest

[request](../modules/request.md).uniHttpRequest

**`Author`**

songren

**`Description`**

请求响应配置

## Hierarchy

- [`httpRequestConfig`](request.httpRequestConfig.md)

  ↳ **`uniHttpRequest`**

## Table of contents

### Constructors

- [constructor](request.uniHttpRequest.md#constructor)

### Properties

- [WebHttpRequest](request.uniHttpRequest.md#webhttprequest)
- [configRequest](request.uniHttpRequest.md#configrequest)
- [selfconfig](request.uniHttpRequest.md#selfconfig)

### Methods

- [configRequestFunction](request.uniHttpRequest.md#configrequestfunction)
- [httpErrorFunction](request.uniHttpRequest.md#httperrorfunction)
- [httptResponseFunction](request.uniHttpRequest.md#httptresponsefunction)
- [init](request.uniHttpRequest.md#init)
- [request](request.uniHttpRequest.md#request)

## Constructors

### constructor

• **new uniHttpRequest**(`options`): [`uniHttpRequest`](request.uniHttpRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `any` |

#### Returns

[`uniHttpRequest`](request.uniHttpRequest.md)

#### Overrides

[httpRequestConfig](request.httpRequestConfig.md).[constructor](request.httpRequestConfig.md#constructor)

#### Defined in

request.ts:169

## Properties

### WebHttpRequest

• **WebHttpRequest**: `any`

#### Overrides

[httpRequestConfig](request.httpRequestConfig.md).[WebHttpRequest](request.httpRequestConfig.md#webhttprequest)

#### Defined in

request.ts:168

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

request.ts:176

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

request.ts:180
