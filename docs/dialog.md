<div id="gourd">

> ## Demo

<output data-lang="output">
<iframe class="iframe" src="/dialog.html" height="600" frameborder="0"></iframe>
</output>

> ## 基本使用

- 需要设置 `v-model` 绑定，它接收 `Boolean`，当为 `true` 时显示 `Dialog`。`Dialog` 分为两个部分：`body` 和 `footer`，`footer` 需要具名为 `footer` 的 `slot`。`title` 属性用于定义标题，它是可选的，默认值为空。

```
<gourd-button @click="show = true">打开dialog</gourd-button>
<gourd-dialog v-model="show">
	<span slot="title">退出登录</span>
	<template slot="footer">
	<gourd-button @click="show = false">取消</gourd-button>
	<gourd-button>确定</gourd-button>
	</template>
	<span>确定退出吗？</span>
</gourd-dialog>
```

> ## 点击遮罩层关闭

- 通过 `close-on-click-overlay` 属性可以设置点击是否遮罩层关闭对话框。

```
<gourd-button @click="clickOverlayClose = true">点击遮罩层关闭</gourd-button>
	<gourd-dialog v-model="clickOverlayClose" :title-center="false" close-on-click-overlay>
	<span slot="title">退出登录</span>
	<template slot="footer">
	<gourd-button @click="clickOverlayClose = false">取消</gourd-button>
	<gourd-button>确定</gourd-button>
	</template>
	<span>确定退出吗？</span>
</gourd-dialog>
```

> ## Props

| 参数| 说明 | 类型 | 默认值 |
| ---| --- | --- | :---: |
| `v-model`| 是否显示 `dialog` | `boolean` | `false` |
| `title-center`| 标题文本是否居中 | `boolean` | `true` |
| `title`| 标题文本 | `string` | -- |
| `close-on-click-overlay`| 是否可以通过点击遮罩层关闭 `dialog` | `boolean` | `false` |


> ## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `overlay-click` | 遮罩层点击事件 | `event: Event` |

> ## Slots

| 名称 | 说明 |
| --- | --- |
| `default` | `dialog` 主体内容 |
| `title` | 自定义标题内容 |
| `footer` | 自定义尾部内容 |


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