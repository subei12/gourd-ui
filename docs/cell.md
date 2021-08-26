<div id="gourd">

> ## 基本用法

- `Cell` 可以单独使用，也可以与 `CellGroup` 搭配使用，`CellGroup` 可以为 `Cell` 提供底部边框线。
- 提供 `link` 属性可以为 `Cell` 添加一个点击高亮效果。

```
<gourd-cell-group>
<gourd-cell title="我的信息" icon="el-icon-s-custom" link></gourd-cell>
<gourd-cell title="我的收藏" icon="el-icon-star-on" link></gourd-cell>
<gourd-cell title="我的钱包" icon="el-icon-s-finance" link></gourd-cell>
</gourd-cell-group>
```

<output data-lang="output">
<gourd-cell-group>
<gourd-cell title="我的信息" icon="el-icon-s-custom" link></gourd-cell>
<gourd-cell title="我的收藏" icon="el-icon-star-on" link></gourd-cell>
<gourd-cell title="我的钱包" icon="el-icon-s-finance" link></gourd-cell>
</gourd-cell-group>
</output>

> ## Cell尺寸

- 可以通过 `size="medium"` 设置为中等尺寸, `adapt` 是自适应尺寸。

```
<gourd-cell-group>
<gourd-cell title="我的信息" size="medium" icon="el-icon-s-custom" link></gourd-cell>
<gourd-cell title="我的收藏" size="medium" icon="el-icon-star-on" link></gourd-cell>
<gourd-cell title="我的钱包" size="adapt" icon="el-icon-s-finance" link></gourd-cell>
</gourd-cell-group>
```

<output data-lang="output">
<gourd-cell-group>
<gourd-cell title="我的信息" size="medium" icon="el-icon-s-custom" link></gourd-cell>
<gourd-cell title="我的收藏" size="medium" icon="el-icon-star-on" link></gourd-cell>
<gourd-cell title="我的钱包" size="adapt" icon="el-icon-s-finance" link></gourd-cell>
</gourd-cell-group>
</output>

> ## 自定义前缀图标

- 通过 `prefix` 插槽可以插入前缀内容。

```
<gourd-cell-group>
<gourd-cell title="我的帖子" size="medium" link>
<img src="/public/cell/profile_topic.png" slot="prefix" alt="">
</gourd-cell>
<gourd-cell title="我的回复" size="medium" link>
<img src="/public/cell/profile_comment.png" slot="prefix" alt="">
</gourd-cell>
<gourd-cell title="浏览历史" size="medium" link>
<img src="/public/cell/profile_history.png" slot="prefix" alt="">
</gourd-cell>
</gourd-cell-group>
```

<output data-lang="output">
<gourd-cell-group>
<gourd-cell title="我的帖子" size="medium" link>
<img src="/public/cell/profile_topic.png" slot="prefix" alt="">
</gourd-cell>
<gourd-cell title="我的回复" size="medium" link>
<img src="/public/cell/profile_comment.png" slot="prefix" alt="">
</gourd-cell>
<gourd-cell title="浏览历史" size="medium" link>
<img src="/public/cell/profile_history.png" slot="prefix" alt="">
</gourd-cell>
</gourd-cell-group>
</output>

> ## 自定义后缀内容

- 通过 `suffix` 插槽可以插入后缀内容。

```
<gourd-cell-group>
<gourd-cell title="我的帖子" size="medium" link>
<img src="/public/cell/profile_topic.png" slot="prefix" alt="">
<gourd-badge value="10" :max="5" slot="suffix"></gourd-badge>
</gourd-cell>
<gourd-cell title="我的回复" size="medium" link>
<img src="/public/cell/profile_comment.png" slot="prefix" alt="">
<span slot="suffix">10</span>
</gourd-cell>
</gourd-cell-group>
```

<output data-lang="output">
<gourd-cell-group>
<gourd-cell title="我的帖子" size="medium" link>
<img src="/public/cell/profile_topic.png" slot="prefix" alt="">
<gourd-badge value="10" :max="5" slot="suffix"></gourd-badge>
</gourd-cell>
<gourd-cell title="我的回复" size="medium" link>
<img src="/public/cell/profile_comment.png" slot="prefix" alt="">
<span slot="suffix">10</span>
</gourd-cell>
</gourd-cell-group>
</output>

> ## 关闭箭头

- 设置 `arrow` 为 `false` 即可关闭右侧箭头，默认是开启的。

```
<gourd-cell title="我的帖子" :arrow="false" size="medium" link>
<img src="/public/cell/profile_topic.png" slot="prefix" alt="">
<gourd-badge value="10" :max="5" slot="suffix"></gourd-badge>
</gourd-cell>
```

<output data-lang="output">
<gourd-cell title="我的帖子" :arrow="false" size="medium" link>
<img src="/public/cell/profile_topic.png" slot="prefix" alt="">
<gourd-badge value="10" :max="5" slot="suffix"></gourd-badge>
</gourd-cell>
</output>

> ## 分组标题

- 通过 `CellGroup` 的 `title` 属性可以指定分组标题。

```
<gourd-cell-group title="我的选项">
<gourd-cell title="我的帖子" size="medium" link>
<img src="/public/cell/profile_topic.png" slot="prefix" alt="">
</gourd-cell>
<gourd-cell title="我的回复" size="medium" link>
<img src="/public/cell/profile_comment.png" slot="prefix" alt="">
</gourd-cell>
<gourd-cell title="浏览历史" size="medium" link>
<img src="/public/cell/profile_history.png" slot="prefix" alt="">
</gourd-cell>
</gourd-cell-group>
```

<output data-lang="output">
<gourd-cell-group title="我的选项">
<gourd-cell title="我的帖子" size="medium" link>
<img src="/public/cell/profile_topic.png" slot="prefix" alt="">
</gourd-cell>
<gourd-cell title="我的回复" size="medium" link>
<img src="/public/cell/profile_comment.png" slot="prefix" alt="">
</gourd-cell>
<gourd-cell title="浏览历史" size="medium" link>
<img src="/public/cell/profile_history.png" slot="prefix" alt="">
</gourd-cell>
</gourd-cell-group>
</output>

> ## 网格排序

- 给 `CellGroup` 添加 `align="grid"` 即可设置网格排序。

```
cell:[{
	icon:'http://cdn.u1.huluxia.com/g3/M01/A4/BC/wKgBOVyqxNaAMKgoAAAZBkscJg4334.png',
	title:'实用软件'
	},{
	icon:'http://cdn.u1.huluxia.com/g3/M01/A4/BC/wKgBOVyqxOCAQl4vAAAVd2folbs278.png',
	title:'手机美化'
	},{
	icon:'http://cdn.u1.huluxia.com/g3/M03/A4/BD/wKgBOVyqxOyAO665AAAaGP0yFGU475.png',
	title:'玩机广场'
	},{
	icon:'http://cdn.u1.huluxia.com/g3/M03/A4/BD/wKgBOVyqxPyARgzTAAARqjpVbP8598.png',
	title:'玩机教程'
	},{
	icon:'http://cdn.u1.huluxia.com/g3/M00/A4/BE/wKgBOVyqxWmAaKw_AAAV4fAFHyE776.png',
	title:'原创技术'
	},{
	icon:'http://cdn.u1.huluxia.com//g3/M02/A2/75/wKgBOVw-44uAVC1vAAANVzIYpgw602.png',
	title:'技术分享'
	}]

<gourd-cell-group title="我的板块" align="grid">
<gourd-cell v-for="(item,index) in cell" :key="index" :title="item.title" link>
<img :src="item.icon" slot="prefix" alt="">
</gourd-cell>
</gourd-cell-group>
```

<output data-lang="output">
<div id="cell-grid">
<gourd-cell-group title="我的板块" align="grid">
<gourd-cell v-for="(item,index) in cell" :key="index" :title="item.title" link>
<img :src="item.icon" slot="prefix" alt="">
</gourd-cell>
</gourd-cell-group>
</div>
</output>


> ## CellGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | :---: |
| `title` | 分组标题 | `string` | -- |
| `align` | 单元格排序方式，可选值为 `grid` `static` | `string` | `static` |

> ## Cell Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | :---: |
| `title` | 单元格标题 | `string` | -- |
| `size` | 单元格尺寸，可选值为 `medium` `adapt` | `string` | -- |
| `icon` | 左侧 `icon` 图标名称 | `string` | -- |
| `to` | 点击后跳转的目标路由对象，同 `vue-router` 的 `to` 属性 | `string` `object` | -- |
| `link` | 单元格是否点击高亮 | `boolean` | `false` |
| `arrow` | 是否添加单元格右侧箭头，开启 `link` 会自动添加右侧箭头 | `boolean` | -- |

> ## Cell Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `click` | 点击单元格时触发 | `event: Event` |

> ## CellGroup Slots

| 事件名 | 说明 |
| --- | --- |
| `default` | 默认插槽 |

> ## Cell Slots

| 事件名 | 说明 |
| --- | --- |
| `prefix` | 自定义前缀内容 |
| `suffix` | 自定义后缀内容 |

</div>

<script>
	new Vue({
		el:'#cell-grid',
		data(){
			return {
				cell:[{
					icon:'http://cdn.u1.huluxia.com/g3/M01/A4/BC/wKgBOVyqxNaAMKgoAAAZBkscJg4334.png',
					title:'实用软件'
				},{
					icon:'http://cdn.u1.huluxia.com/g3/M01/A4/BC/wKgBOVyqxOCAQl4vAAAVd2folbs278.png',
					title:'手机美化'
				},{
					icon:'http://cdn.u1.huluxia.com/g3/M03/A4/BD/wKgBOVyqxOyAO665AAAaGP0yFGU475.png',
					title:'玩机广场'
				},
				{
					icon:'http://cdn.u1.huluxia.com/g3/M03/A4/BD/wKgBOVyqxPyARgzTAAARqjpVbP8598.png',
					title:'玩机教程'
				},
				{
					icon:'http://cdn.u1.huluxia.com/g3/M00/A4/BE/wKgBOVyqxWmAaKw_AAAV4fAFHyE776.png',
					title:'原创技术'
				},
				{
					icon:'http://cdn.u1.huluxia.com//g3/M02/A2/75/wKgBOVw-44uAVC1vAAANVzIYpgw602.png',
					title:'技术分享'
				}]
			}
		}
	})
</script>