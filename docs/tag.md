<div id="gourd">

> ## 基本用法

- 通过 type 属性控制标签颜色。

```
<gourd-tag>默认</gourd-tag>
<gourd-tag type="danger">公告</gourd-tag>
<gourd-tag type="warning">置顶</gourd-tag>
<gourd-tag type="success">LV12</gourd-tag>
<gourd-tag type="primary"><i class="iconfont icon-nan"></i>18</gourd-tag>
```

<output data-lang="output">
<gourd-tag>默认</gourd-tag>
<gourd-tag type="danger">公告</gourd-tag>
<gourd-tag type="warning">置顶</gourd-tag>
<gourd-tag type="success">LV12</gourd-tag>
<gourd-tag type="primary"><i class="iconfont icon-nan"></i>18</gourd-tag>
</output>


> ## 样式风格

- 通过 round 设置为圆角样式。

```
<gourd-tag type="success" round>孤独</gourd-tag>
<gourd-tag type="primary" round>小丑</gourd-tag>
<gourd-tag type="success">新</gourd-tag>
<gourd-tag type="danger">热</gourd-tag>
```

<output data-lang="output">
<gourd-tag type="success" round>孤独</gourd-tag>
<gourd-tag type="primary" round>小丑</gourd-tag>
<gourd-tag type="success">新</gourd-tag>
<gourd-tag type="danger">热</gourd-tag>
</output>

> ## 标签大小

- 通过 `small` 属性调整标签为小型。

```
<gourd-tag type="success" round small>孤独</gourd-tag>
<gourd-tag type="primary" round small>小丑</gourd-tag>
<gourd-tag type="success" small>新</gourd-tag>
<gourd-tag type="danger" small>热</gourd-tag>
```

<output data-lang="output">
<gourd-tag type="success" round small>孤独</gourd-tag>
<gourd-tag type="primary" round small>小丑</gourd-tag>
<gourd-tag type="success" small>新</gourd-tag>
<gourd-tag type="danger" small>热</gourd-tag>
</output>

> ## 自定义颜色

- 通过 `color` 和 `text-color` 属性设置标签颜色。

```
<gourd-tag color="#bd07bd">大哥</gourd-tag>
<gourd-tag color="#fc26c7">二哥</gourd-tag>
<gourd-tag color="#d50e1b">三哥</gourd-tag>
<gourd-tag color="#1dc8f0" text-color="#bd07bd">孤独</gourd-tag>
```

<output data-lang="output">
<gourd-tag color="#bd07bd">大哥</gourd-tag>
<gourd-tag color="#fc26c7">二哥</gourd-tag>
<gourd-tag color="#d50e1b">三哥</gourd-tag>
<gourd-tag color="#1dc8f0" text-color="#bd07bd">孤独</gourd-tag>
</output>

> ## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | :---: |
| `type` | 	类型，可选值为`primary` `success` `danger` `warning` | `string` | `default` |
| `small` | 是否为小型标签 | `boolean` | `false` |
| `color` | 标签颜色	 | `string` | -- |
| `round` | 是否为圆角样式 | `boolean` | `false` |
| `text-color` | 文本颜色，优先级高于 `color` 属性 | `string` | `#fff` |

</div>