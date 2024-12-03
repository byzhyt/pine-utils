[**pine-utils**](../README.md) • **Docs**

***

[pine-utils](../globals.md) / RadioType

# Type Alias: RadioType

> **RadioType**: [`LabelType`](LabelType.md) & `object`

<identifier>

## Type declaration

### activeClassName

> **activeClassName**: `object`

### activeClassName.default

> **default**: `""`

### activeClassName.required

> **required**: `false`

### activeClassName.type

> **type**: `String`

### checked

> **checked**: `object`

### checked.default

> **default**: `false`

### checked.required

> **required**: `false`

### checked.type

> **type**: `Boolean`

### color

> **color**: `object`

### color.default

> **default**: `""`

### color.required

> **required**: `false`

### color.type

> **type**: `String`

### falseValue

> **falseValue**: `object`

### falseValue.default

> **default**: `false`

### falseValue.required

> **required**: `false`

### falseValue.type

> **type**: [`String`, `Boolean`, `Number`]

### item

> **item**: `object`

### item.default

> **default**: `object`

### item.required

> **required**: `false`

### item.type

> **type**: [`RadioEntity`](../interfaces/RadioEntity.md)

### trueValue

> **trueValue**: `object`

### trueValue.default

> **default**: `true`

### trueValue.required

> **required**: `false`

### trueValue.type

> **type**: [`String`, `Boolean`, `Number`]

## Desc

单选组件

## Param

参数超过三个以上建议使用

## Param

选中绑定值； 单选有效

## Param

未选中绑定值；单选有效

## Param

选中颜色设置

## Param

选中className类

## Param

是否选中

## Example

```js
{
label:'',
value:'',
}
```

## Defined in

[entity.ts:410](https://github.com/byzhyt/pine-utils/blob/924fa77904d2b99c7ab94631f9f8a700b695aa96/src/entity.ts#L410)
