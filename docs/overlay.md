<div id="gourd">

> ## Demo

<output data-lang="output">
<iframe class="iframe" frameborder="0" src="/overlay.html" height="600"></iframe>
</output>

> ## 基本使用

```
<gourd-button type="primary" @click="show = true">显示遮罩层</gourd-button>
<gourd-overlay v-model="show" @click="show = false"></gourd-overlay>
```

```js
{
	data(){
		return {
			show:false
		}
	}
}
```

> ## 嵌入内容

- 通过默认插槽可以在遮罩层上嵌入任意内容，通过 `color` 可以自定义遮罩层背景颜色。

```
<gourd-button type="primary" @click="showOverlay = true">嵌入内容</gourd-button>
<gourd-overlay color="rgba(255, 255, 255, 0.5)" v-model="showOverlay" @click="showOverlay = false">
	<div class="demo-overlay--wrap">
		<gourd-loading size="26"></gourd-loading>
	</div>
/gourd-overlay>
```

```js
{
	data(){
		return {
			showOverlay:false
		}
	}
}
```

> ## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | ---| :---: |
| `v-model` | 是否显示遮罩层 | `boolean` | `false` |
| `region` | 是否区域显示遮罩层（默认是固定定位） | `boolean` | `false` |
| `color` | 自定义遮罩层背景颜色 | `string` | `rgba(0, 0, 0, 0.5)` |

> ## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `click`	| 点击时触发	| `event: Event` |

</div>

<script>
	new Vue({
		el:'#gourd',
		data(){
			return {
				show:false
			}
		}
	})
</script>