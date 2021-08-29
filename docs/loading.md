<div id="gourd">

> ## 基本使用

- 可以使用默认插槽在图标的右侧插入加载文案。

```
<gourd-loading>加载中...</gourd-loading>
```

<output data-lang="output">
<gourd-loading>加载中...</gourd-loading>
</output>

> ## 自定义大小

- 通过 `size` 属性设置加载图标的大小，默认单位为 `px`。

```
<gourd-loading size="20">加载中...</gourd-loading>
```

<output data-lang="output">
<gourd-loading size="20">加载中...</gourd-loading>
</output>

> ## 自定义文案颜色

- 通过 `color` 或者 `text-color` 属性设置加载文案的颜色。

```
<div>
<gourd-loading size="20" color="#0094ff">加载中...</gourd-loading>
</div>
<div style="margin-top: 16px;">
<gourd-loading size="20" color="purple" text-color="red">加载中...</gourd-loading>
</div>
```

<output data-lang="output">
<div>
<gourd-loading size="20" color="#0094ff">加载中...</gourd-loading>
</div>
<div style="margin-top: 16px;">
<gourd-loading size="20" color="purple" text-color="red">加载中...</gourd-loading>
</div>
</output>

> ## 平滑旋转

- 通过 `smooth` 可以使加载图标平滑旋转。

```
<div>
<gourd-loading>steps旋转...</gourd-loading>
</div>
<div style="margin-top: 16px;">
<gourd-loading smooth>平滑旋转...</gourd-loading>
</div>
```

<output data-lang="output">
<div>
<gourd-loading>steps旋转...</gourd-loading>
</div>
<div style="margin-top: 16px;">
<gourd-loading smooth>平滑旋转...</gourd-loading>
</div>
</output>

> ## 垂直排列

- 设置 `vertical` 属性后，图标和文案会垂直排列。

```
<div>
<gourd-loading vertical>默认旋转...</gourd-loading>
</div>
<div style="margin-top: 16px;">
<gourd-loading vertical smooth>平滑旋转...</gourd-loading>
</div>
```

<output data-lang="output">
<div>
<gourd-loading vertical>默认旋转...</gourd-loading>
</div>
<div style="margin-top: 16px;">
<gourd-loading vertical smooth>平滑旋转...</gourd-loading>
</div>
</output>

> ## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `color` | 颜色 | `string` | `#c8c9cc` |
| `size` | 加载图标大小，默认单位为 `px` | `number` `string`	 | `30px` |
| `text-color` | 文字颜色 | `string` | `#969799` |
| `vertical` | 是否垂直排列图标和文字内容 | `boolean` | `false` |
| `smooth` | 是否平滑旋转 | `boolean` | `false` |

</div>