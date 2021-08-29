<div id="gourd">

> ## 基本使用

- 通过 `uname` 设置名称 `floor` 设置楼层 `avatar` 头像地址 `time` 时间。

```
<gourd-post-card uname="孤独的小丑" floor="楼主" time="15:51" avatar="/public/image/5.jpg">
</gourd-post-card>
```

<output data-lang="output">
<gourd-post-card uname="孤独的小丑" floor="楼主" time="15:51" avatar="/public/image/5.jpg"></gourd-post-card>
</output>


> ## 插入标签

- 通过 `tag` 插槽可以插入明信片标签。

```
<gourd-post-card uname="孤独的小丑" floor="楼主" time="15:51" avatar="/public/image/5.jpg">
<template slot="tag">
  <gourd-tag type="primary" small><i class="iconfont icon-nan"></i>18</gourd-tag>
  <gourd-tag type="success" small>孤独</gourd-tag>
</template>
</gourd-post-card>
```

<output data-lang="output">
<gourd-post-card uname="孤独的小丑" floor="楼主" time="15:51" avatar="/public/image/5.jpg">
<template slot="tag">
  <gourd-tag type="primary" small><i class="iconfont icon-nan"></i>18</gourd-tag>
  <gourd-tag type="success" small>孤独</gourd-tag>
</template>
</gourd-post-card>
</output>

> ## 明信片称呼

- 有时候 `floor` 有着不同的含义，可以通过 `call` 指定称呼

```
<gourd-post-card uname="孤独的小丑" call="楼主" floor="1楼" time="15:51" avatar="/public/image/5.jpg">
<template slot="tag">
  <gourd-tag type="primary" small><i class="iconfont icon-nan"></i>18</gourd-tag>
  <gourd-tag type="success" small>孤独</gourd-tag>
</template>
</gourd-post-card>
```

<output data-lang="output">
<gourd-post-card uname="孤独的小丑" call="楼主" floor="1楼" time="15:51" avatar="/public/image/5.jpg">
<template slot="tag">
  <gourd-tag type="primary" small><i class="iconfont icon-nan"></i>18</gourd-tag>
  <gourd-tag type="success" small>孤独</gourd-tag>
</template>
</gourd-post-card>
</output>

> ## 文本描述

- 带有含有文本描述的可以通过 `默认插槽` 或者 `text` 属性绑定都可以 `默认插槽` 优先于`text`。

```
<gourd-post-card text="我是一段文本描述" uname="孤独的小丑" call="楼主" floor="1楼" time="15:51" avatar="/public/image/5.jpg">
<template slot="tag">
  <gourd-tag type="primary" small><i class="iconfont icon-nan"></i>18</gourd-tag>
  <gourd-tag type="success" small>孤独</gourd-tag>
</template>
</gourd-post-card>

<gourd-post-card text="我是一段文本描述" uname="孤独的小丑" call="楼主" floor="2楼" time="15:51" avatar="/public/image/5.jpg">
<template slot="tag">
  <gourd-tag type="primary" small><i class="iconfont icon-nan"></i>18</gourd-tag>
  <gourd-tag type="success" small>孤独</gourd-tag>
</template>
  <span>默认插槽优先于 text</span>
</gourd-post-card>
```

<output data-lang="output">
<gourd-post-card text="我是一段文本描述" uname="孤独的小丑" call="楼主" floor="1楼" time="15:51" avatar="/public/image/5.jpg">
<template slot="tag">
  <gourd-tag type="primary" small><i class="iconfont icon-nan"></i>18</gourd-tag>
  <gourd-tag type="success" small>孤独</gourd-tag>
</template>
</gourd-post-card>

<gourd-post-card text="我是一段文本描述" uname="孤独的小丑" call="楼主" floor="2楼" time="15:51" avatar="/public/image/5.jpg">
<template slot="tag">
  <gourd-tag type="primary" small><i class="iconfont icon-nan"></i>18</gourd-tag>
  <gourd-tag type="success" small>孤独</gourd-tag>
</template>
  <span>默认插槽优先于 text</span>
</gourd-post-card>
</output>

## 勋章图标

- 可以提供一个 `medal` 数组里面存放着勋章图片地址。

```
<gourd-post-card uname="孤独的小丑" call="楼主" floor="1楼" :medal="medalList | medal" time="15:51" avatar="/public/image/5.jpg">
<template slot="tag">
  <gourd-tag type="primary" small><i class="iconfont icon-nan"></i>18</gourd-tag>
  <gourd-tag type="success" small>孤独</gourd-tag>
</template>
  <span>喜欢一匹野马，可是我的家没有草原！</span>
</gourd-post-card>
```

```js
data(){
	return {
		medalList: [
		{
			name: '两周年勋章',
			url: 'http://cdn.u1.huluxia.com/g2/M02/26/3F/wKgBa1kVKuuAOkcfAAAwuzYCNBE803.png'
		},
		{
			name: '实用软件版块热度突破10亿专属纪念勋章',
			url: 'http://cdn.u1.huluxia.com/g2/M02/26/40/wKgBa1kVKzOAeTjLAAB7HkmL3Eo101.png'
		},
		{
			name: '三周年纪念勋章',
			url: 'http://cdn.u1.huluxia.com/g2/M01/30/D3/wKgBa1mmffKAXBMxAAAcO3ahkEc925.png'
		},
		{
			name: '一周年纪念勋章',
			url: 'http://cdn.u1.huluxia.com/g2/M03/26/3E/wKgBa1kVKmaAaSlRAAA7nSERplk044.png'
		},
		{
			name: '蓝V官方认证',
			url: 'http://cdn.u1.huluxia.com/g3/M00/68/A3/wKgBOVsaczSAUx9yAAAYvDrkGVQ563.png'
		},
		{
			name: '视频',
			url: 'http://cdn.u1.huluxia.com/g3/M02/47/D8/wKgBOVyCU_2AAT98AAAHdCoBoQY024.png'
		}
	]
},
filters:{
	medal(val){
		return val.map(item => item.url);
	}
}
```

<output data-lang="output">
<gourd-post-card uname="孤独的小丑" call="楼主" floor="1楼" :medal="medalList | medal" time="15:51" avatar="/public/image/5.jpg">
<template slot="tag">
  <gourd-tag type="primary" small><i class="iconfont icon-nan"></i>18</gourd-tag>
  <gourd-tag type="success" small>孤独</gourd-tag>
</template>
  <span>喜欢一匹野马，可是我的家没有草原！</span>
</gourd-post-card>
</output>

> ## 善用默认插槽

- 我们可以利用默认插槽将明信片内容达到更丰富。

```
<gourd-post-card uname="孤独的小丑" call="楼主" floor="1楼" :medal="medalList | medal" time="15:51" avatar="/public/image/5.jpg">
<template slot="tag">
  <gourd-tag type="primary" small><i class="iconfont icon-nan"></i>18</gourd-tag>
  <gourd-tag type="success" small>孤独</gourd-tag>
</template>
<div class="demo-post-card">
<blockquote class="demo-post-card--ref">
  <em>回复</em>
  <span>孤独</span>
 <div class="demo-post-card--row">你总不能一辈子呆在一个破县城里面吧！</div>
</blockquote>
 <div class="demo-post-card--row">
   到目前为止，我仍然以为我接受高等教育是为了帮助家乡脱离贫穷，而不是脱离贫穷的家乡。
  </div>
</div>
</gourd-post-card>
```

```css
.demo-post-card {
	flex: 1;
}
		
.gourd-post-card .demo-post-card--ref {
	padding: 10px;
	color: #a9a9a9;
	background-color: #f0f0f0;
	border-radius: 2px;
}
		
.demo-post-card--ref em {
	font-style: normal;
	margin-right: 4px;
}
		
.demo-post-card--ref .demo-post-card--row {
	margin-top: 10px;
	color: #646464;
}
		
.demo-post-card--row {
	margin-top: 6px;
}
```

<output data-lang="output">
<gourd-post-card uname="孤独的小丑" call="楼主" floor="1楼" :medal="medalList | medal" time="15:51" avatar="/public/image/5.jpg">
<template slot="tag">
  <gourd-tag type="primary" small><i class="iconfont icon-nan"></i>18</gourd-tag>
  <gourd-tag type="success" small>孤独</gourd-tag>
</template>
<div class="demo-post-card">
<blockquote class="demo-post-card--ref">
  <em>回复</em>
  <span>孤独</span>
 <div class="demo-post-card--row">你总不能一辈子呆在一个破县城里面吧！</div>
</blockquote>
 <div class="demo-post-card--row">
   到目前为止，我仍然以为我接受高等教育是为了帮助家乡脱离贫穷，而不是脱离贫穷的家乡。
  </div>
</div>
</gourd-post-card>
</output>

> ## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | :---: |
| `text` | 明信片描述 | `string` | -- |
| `call` | 称呼 | `string` | -- |
| `avatar` | 头像地址 | `string` | -- |
| `uname` | 名称 | `string` | -- |
| `floor` | 楼层 | `string` `number` | -- |
| `time` | 时间 | `string` `number` `date` | -- |
| `medal` | 勋章图片列表 | `array` | -- |
| `uname-color` | 名称颜色 | `string` | -- |

> ## Events

| 事件名 | 说明 | 回调参数 | 
| --- | --- | --- | 
| `click` | 点击时触发	 | `event: Event` | 

> ## Slots

| 名称 | 说明 |
| --- | --- |
| `default` | 明信片内容 |
| `tag` | 明信片标签 |

</div>

<script>
	new Vue({
		el:'#gourd',
		data(){
			return {
				medalList: [
				{
					name: '两周年勋章',
					url: 'http://cdn.u1.huluxia.com/g2/M02/26/3F/wKgBa1kVKuuAOkcfAAAwuzYCNBE803.png'
				},
				{
					name: '实用软件版块热度突破10亿专属纪念勋章',
					url: 'http://cdn.u1.huluxia.com/g2/M02/26/40/wKgBa1kVKzOAeTjLAAB7HkmL3Eo101.png'
				},
				{
					name: '三周年纪念勋章',
					url: 'http://cdn.u1.huluxia.com/g2/M01/30/D3/wKgBa1mmffKAXBMxAAAcO3ahkEc925.png'
				},
				{
					name: '一周年纪念勋章',
					url: 'http://cdn.u1.huluxia.com/g2/M03/26/3E/wKgBa1kVKmaAaSlRAAA7nSERplk044.png'
				},
				{
					name: '蓝V官方认证',
					url: 'http://cdn.u1.huluxia.com/g3/M00/68/A3/wKgBOVsaczSAUx9yAAAYvDrkGVQ563.png'
				},
				{
					name: '视频',
					url: 'http://cdn.u1.huluxia.com/g3/M02/47/D8/wKgBOVyCU_2AAT98AAAHdCoBoQY024.png'
					}
				]
			}
		},
		filters:{
			medal(val){
				return val.map(item => item.url);
			}
		}
	})
</script>