
<div id="gourd">


> ## 按钮类型

- 按钮支持 `default`、`primary`、`info`、`warning`、`danger` 五种类型，默认为 `default`。


``` 
<gourd-button>默认按钮</gourd-button>
<gourd-button type="primary">主要按钮</gourd-button>
<gourd-button type="success">成功按钮</gourd-button>
<gourd-button type="danger">危险按钮</gourd-button>
<gourd-button type="warning">警告按钮</gourd-button>
<gourd-button type="info">信息按钮</gourd-button>
```


<output data-lang="output">
<gourd-button>默认按钮</gourd-button>
<gourd-button type="primary">主要按钮</gourd-button>
<gourd-button type="success">成功按钮</gourd-button>
<gourd-button type="danger">危险按钮</gourd-button>
<gourd-button type="warning">警告按钮</gourd-button>
<gourd-button type="info">信息按钮</gourd-button>
</output>

> ## 补素按钮

- 通过 `plain` 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

``` 
<gourd-button type="primary" plain>主要按钮</gourd-button>
<gourd-button type="success" plain>成功按钮</gourd-button>
<gourd-button type="danger" plain>危险按钮</gourd-button>
<gourd-button type="warning" plain>警告按钮</gourd-button>
<gourd-button type="info" plain>信息按钮</gourd-button>
```

<output data-lang="output">
<gourd-button type="primary" plain>主要按钮</gourd-button>
<gourd-button type="success" plain>成功按钮</gourd-button>
<gourd-button type="danger" plain>危险按钮</gourd-button>
<gourd-button type="warning" plain>警告按钮</gourd-button>
<gourd-button type="info" plain>信息按钮</gourd-button>
</output>

> ## 禁用状态

- 通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。

```
<gourd-button type="primary" disabled>主要按钮</gourd-button>
<gourd-button type="success" disabled>成功按钮</gourd-button>
<gourd-button type="danger"  plain disabled>危险按钮</gourd-button>
<gourd-button type="warning" plain disabled>警告按钮</gourd-button>
```

<output data-lang="output">
<gourd-button type="primary" disabled>主要按钮</gourd-button>
<gourd-button type="success" disabled>成功按钮</gourd-button>
<gourd-button type="danger"  plain disabled>危险按钮</gourd-button>
<gourd-button type="warning" plain disabled>警告按钮</gourd-button>
</output>

> ## 图标按钮

- 通过 `icon` 属性设置按钮图标。

```
<gourd-button icon="el-icon-warning"></gourd-button>
<gourd-button type="danger" icon="el-icon-delete"></gourd-button>
<gourd-button type="warning" icon="el-icon-warning">警告按钮</gourd-button>
<gourd-button type="success" icon="el-icon-success" plain>成功按钮</gourd-button>
```

<output data-lang="output">
<gourd-button icon="el-icon-warning"></gourd-button>
<gourd-button type="danger" icon="el-icon-delete"></gourd-button>
<gourd-button type="warning" icon="el-icon-warning">警告按钮</gourd-button>
<gourd-button type="success" icon="el-icon-success" plain>成功按钮</gourd-button>
</output>

> ## 按钮尺寸

- 额外的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。

<output data-lang="output">
<gourd-button>默认尺寸</gourd-button>
<gourd-button size="medium">中等按钮</gourd-button>
<gourd-button size="small">小型按钮</gourd-button>
<gourd-button size="mini">超小按钮</gourd-button>
</output>

> ## 按钮形状

- 通过 `square` 设置方形按钮，通过 `round` 设置圆角按钮，`circle`设置圆形按钮。

```
<gourd-button square>方形按钮</gourd-button>
<gourd-button type="info" circle round plain>首页</gourd-button>
<gourd-button type="success" icon="el-icon-search" circle></gourd-button>
```

<output data-lang="output">
<gourd-button square>方形按钮</gourd-button>
<gourd-button type="info" circle round plain>首页</gourd-button>
<gourd-button type="success" icon="el-icon-search" circle></gourd-button>
</output>

> ## 块级按钮

- 按钮在默认情况下为行内块级元素，通过 `block` 属性可以将按钮的元素类型设置为块级元素。

```
<gourd-button type="success" size="medium" round block>登录</gourd-button>
```

<output data-lang="output">
<gourd-button type="success" size="medium" round block>登录</gourd-button>
</output>

> ## props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | :---: |
| `type` | 	类型，可选值为 `primary` `info` `warning` `danger` | `string` | `default` |
| `size` | `可选值为` `medium` / `small` / `mini`	 | `string` | -- |
| `plain` | 是否朴素按钮	| `boolean`	 | `false` |
| `round` | 是否圆角按钮	| `boolean`	 | `false` |
| `circle` | 是否圆形按钮	| `boolean`	 | `false` |
| `disabled` | 是否禁用状态	 | `boolean`	 | `false` |
| `icon` | 图标类名	 | `string`	 | -- |

> ## Events

| 事件名 | 说明 | 回调参数|
| --- | --- | --- |
| `click` | 点击按钮，且按钮状态不为禁用时触发 | `event: Event` |

</div>

<script>
new Vue({
	data(){
		return {
			msg:'test'
		}
	}
}).$mount('#gourd')
</script>

