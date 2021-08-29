<div id="gourd">

> ## 基本用法

- 通过 `square` 可以设置徽标为方形。

```
<gourd-badge value="11" square></gourd-badge>
<gourd-badge value="20" square></gourd-badge>
<gourd-badge value="30"></gourd-badge>
```

<output data-lang="output">
<gourd-badge value="11" square></gourd-badge>
<gourd-badge value="20" square></gourd-badge>
<gourd-badge value="30"></gourd-badge>
</output>

> ## 最大值

- 设置 `max` 属性后，当 `content` 的数值超过最大值时，会自动显示为 `{max}+`。

```
<gourd-badge value="11" :max="9"></gourd-badge>
<gourd-badge value="20" :max="15"></gourd-badge>
<gourd-badge value="30" :max="20"></gourd-badge>
```

<output data-lang="output">
<gourd-badge value="11" :max="9"></gourd-badge>
<gourd-badge value="20" :max="15"></gourd-badge>
<gourd-badge value="30" :max="20"></gourd-badge>
</output>

> ## 尺寸

- 通过 `small` 可以设置徽标为小型的尺寸。

```
<gourd-badge value="30" :max="20"></gourd-badge>
<gourd-badge value="11" :max="9" small></gourd-badge>
<gourd-badge value="20" :max="15" square small></gourd-badge>
```

<output data-lang="output">
<gourd-badge value="30" :max="20"></gourd-badge>
<gourd-badge value="11" :max="9" small></gourd-badge>
<gourd-badge value="20" :max="15" square small></gourd-badge>
</output>

> ## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | :---: |
| `value` | 徽标内容 | `number` `string` | -- |
| `max` | 最大值，超过最大值会显示 `{max}+`，仅当 `value` 为数字时有效 | `number` `string` | -- |
| `small` | 是否为小型尺寸 | `boolean` | `false` |
| `square` | 是否为方形徽标 | `boolean` | `false` |

</div>