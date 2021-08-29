<div id="gourd-tabs" class="gourd-wrap">

!> 注意：请打开控制台使用手机端进行模拟查看效果。

> ## 基本用法

- 通过 `v-model` 绑定当前激活标签对应的索引值，默认情况下启用第一个标签。

```
<gourd-tabs v-model="active">
<gourd-tab title="标签1">
  <div class="tabs-content">标签1</div>
</gourd-tab>
<gourd-tab title="标签2">
  <div class="tabs-content">标签2</div>
</gourd-tab>
<gourd-tab title="标签3">
  <div class="tabs-content">标签3</div>
</gourd-tab>
 </gourd-tabs>
```
```
data(){
	return {
		active:1
	}
}
```

<output data-lang="output">
<div class="tabs-wrap">
<gourd-tabs v-model="active">
<gourd-tab title="标签1">
  <div class="tabs-content">内容1</div>
</gourd-tab>
<gourd-tab title="标签2">
  <div class="tabs-content">内容2</div>
</gourd-tab>
<gourd-tab title="标签3">
  <div class="tabs-content">内容3</div>
</gourd-tab>
 </gourd-tabs>
</div>
</output>

> ## 标签栏滚动

- 标签数量超过 `5` 个时，标签栏可以在水平方向上滚动，切换时会自动将当前标签居中。

```
<gourd-tabs>
<gourd-tab v-for="index in 20" :key="index" :title="'标签' + index">
  <div class="tabs-content">标签{{index}}</div>
</gourd-tab>
 </gourd-tabs>
```

<output data-lang="output">
<div class="tabs-wrap">
<gourd-tabs>
<gourd-tab v-for="index in 20" :key="index" :title="'标签'+index">
  <div class="tabs-content">内容{{index}}</div>
</gourd-tab>
 </gourd-tabs>
</div>
</output>

> ## 监听切换事件

- 可以在 `Tabs` 上绑定 `change` 事件，事件传参为标签对应的 `索引`

```
<gourd-tabs @change="change">
<gourd-tab v-for="index in 20" :key="index" :title="'标签'+index">
  <div class="tabs-content">内容{{index}}</div>
</gourd-tab>
 </gourd-tabs>
```

```
methods:{
	change(index){
		console.log('切换到标签' + (index + 1))
	}
}
```

<output data-lang="output">
<div class="tabs-wrap">
<gourd-tabs @change="change">
<gourd-tab v-for="index in 20" :key="index" :title="'标签'+index">
  <div class="tabs-content">内容{{index}}</div>
</gourd-tab>
 </gourd-tabs>
</div>
</output>


> ## 吸顶模式

- 通过 `ceiling` 属性可以开启吸顶，标签页滚动到顶部时会自动吸顶，可以通过 `distance` 设置吸顶距离，默认为 `0`

```
<gourd-tabs ceiling>
	<gourd-tab v-for="index in 20" :key="index" height="1000" :title="'标签'+index">
		<div class="tabs-content">内容{{index}}</div>
	</gourd-tab>
</gourd-tabs>
```

```
.tabs-content{
	height:100%;
	padding:15px;
	background-color:#f7f8fa;
	box-sizing:border-content;
}
```

<output data-lang="output">
<iframe src="/tabs.html" frameborder="0" height="680" class="iframe"></iframe>
</output>

!> 注意：吸顶模式监听的是系统滚动条，如果滚动条不出现在系统上则此时吸顶模式是无效的。

> ## 自定义标签

- 通过 `title` 插槽可以自定义标签内容。

```
<gourd-tabs>
<gourd-tab v-for="index in 3" :key="index">
  <template slot="title">
	<i class="el-icon-s-claim"></i>
	<span>标签{{index}}</span>
	</template>
  <div class="tabs-content">标签{{index}}</div>
</gourd-tab>
 </gourd-tabs>
```

<output data-lang="output">
<div class="tabs-wrap">
<gourd-tabs>
<gourd-tab v-for="index in 3" :key="index">
  <template slot="title">
	<i class="el-icon-s-claim"></i>
	<span>标签{{index}}</span>
	</template>
  <div class="tabs-content">标签{{index}}</div>
</gourd-tab>
 </gourd-tabs>
</div>
</output>

> ## Tabs Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | :---: |
| `v-model` | 绑定当前选中标签的索引 | `number` | `0` |
| `color` | 标签主题色 | `string` | `#31d075` |
| `ceiling` | 是否开启吸顶模式 | `boolean` | `false` |
| `distance` | 吸顶距离 | `number` | `0` |

> ## Tab Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | :---: |
| `title` | 标题 | `string` | -- |
| `height` | 内容区高度 | `number` | `内容撑开` |

> ## Tabs Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `change` | 当前激活的标签改变时触发 | `标签索引` |
| `tab-content-start` | 当前显示的 `tab` 手指触摸时 | `event: Event` |
| `tab-content-move` |  当前显示的 `tab` 手指滑动时 | `标签索引` `event: Event` |
| `tab-content-end` | 当前显示的 `tab` 手指离开时 | `event: Event` |

> ## Tab Slots

| 名称 | 说明 |
| --- | --- |
| `default` | 标签页内容 |
| `title` | 自定义标题 |


</div>

<script>

new Vue({
	el:'#gourd-tabs',
	data(){
		return {
			active:1
		}
	},
	methods:{
		change(index){
			console.log('切换到标签' + (index + 1))
		}
	}
})

</script>