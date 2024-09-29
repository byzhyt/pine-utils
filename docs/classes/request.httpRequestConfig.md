[pine-utils](../README.md) / [Modules](../modules.md) / [request](../modules/request.md) / httpRequestConfig

# Class: httpRequestConfig

[request](../modules/request.md).httpRequestConfig

**`Author`**

songren

**`Description`**

请求响应配置

## Hierarchy

- **`httpRequestConfig`**

  ↳ [`axiosHttpRequest`](request.axiosHttpRequest.md)

  ↳ [`uniHttpRequest`](request.uniHttpRequest.md)

## Table of contents

### Constructors

- [constructor](request.httpRequestConfig.md#constructor)

### Properties

- [WebHttpRequest](request.httpRequestConfig.md#webhttprequest)
- [configRequest](request.httpRequestConfig.md#configrequest)
- [selfconfig](request.httpRequestConfig.md#selfconfig)

### Methods

- [configRequestFunction](request.httpRequestConfig.md#configrequestfunction)
- [httpErrorFunction](request.httpRequestConfig.md#httperrorfunction)
- [httptResponseFunction](request.httpRequestConfig.md#httptresponsefunction)

## Constructors

### constructor

• **new httpRequestConfig**(): [`httpRequestConfig`](request.httpRequestConfig.md)

#### Returns

[`httpRequestConfig`](request.httpRequestConfig.md)

#### Defined in

[request.ts:70](https://github.com/byzhyt/pine-utils/blob/ffd389eb3428df548d6915e5e5ecf51280b6f477/src/request.ts#L70)

## Properties

### WebHttpRequest

• **WebHttpRequest**: `any`

#### Defined in

[request.ts:68](https://github.com/byzhyt/pine-utils/blob/ffd389eb3428df548d6915e5e5ecf51280b6f477/src/request.ts#L68)

___

### configRequest

• **configRequest**: `any`

#### Defined in

[request.ts:67](https://github.com/byzhyt/pine-utils/blob/ffd389eb3428df548d6915e5e5ecf51280b6f477/src/request.ts#L67)

___

### selfconfig

• **selfconfig**: `any`

#### Defined in

[request.ts:69](https://github.com/byzhyt/pine-utils/blob/ffd389eb3428df548d6915e5e5ecf51280b6f477/src/request.ts#L69)

## Methods

### configRequestFunction

▸ **configRequestFunction**(`config`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `any` |

#### Returns

`any`

#### Defined in

[request.ts:71](https://github.com/byzhyt/pine-utils/blob/ffd389eb3428df548d6915e5e5ecf51280b6f477/src/request.ts#L71)

___

### httpErrorFunction

▸ **httpErrorFunction**(`error`): `Promise`\<`never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `any` |

#### Returns

`Promise`\<`never`\>

#### Defined in

[request.ts:121](https://github.com/byzhyt/pine-utils/blob/ffd389eb3428df548d6915e5e5ecf51280b6f477/src/request.ts#L121)

___

### httptResponseFunction

▸ **httptResponseFunction**(`response`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `object` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[request.ts:94](https://github.com/byzhyt/pine-utils/blob/ffd389eb3428df548d6915e5e5ecf51280b6f477/src/request.ts#L94)
