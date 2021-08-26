
<div id="tabbar" class="gourd-wrap">

> ## 基本用法

- `v-model` 默认绑定选中标签的索引值，通过修改 `v-model` 即可切换选中的标签。

```
<gourd-tabbar :fixed="false" v-model="active">
<gourd-tabbar-item icon="el-icon-s-home">首页</gourd-tabbar-item>
<gourd-tabbar-item icon="el-icon-s-goods">购物</gourd-tabbar-item>
<gourd-tabbar-item icon="el-icon-s-cooperation">工具</gourd-tabbar-item>
<gourd-tabbar-item icon="el-icon-s-custom">我的</gourd-tabbar-item>
</gourd-tabbar>
```
```
data(){
	return {
		active:''
	}
}
```

<output data-lang="output">
<gourd-tabbar :fixed="false" v-model="active">
<gourd-tabbar-item icon="el-icon-s-home">首页</gourd-tabbar-item>
<gourd-tabbar-item icon="el-icon-s-goods">商品</gourd-tabbar-item>
<gourd-tabbar-item icon="el-icon-s-cooperation">工具</gourd-tabbar-item>
<gourd-tabbar-item icon="el-icon-s-custom">我的</gourd-tabbar-item>
</gourd-tabbar>
</output>


> ## 通过名称匹配

- 在标签指定 `name` 属性的情况下，`v-model` 的值为当前标签的 `name`。

```
<gourd-tabbar :fixed="false" v-model="activeName">
<gourd-tabbar-item name="home" icon="el-icon-s-home">首页</gourd-tabbar-item>
<gourd-tabbar-item name="goods" icon="el-icon-s-goods">商品</gourd-tabbar-item>
<gourd-tabbar-item name="tools" icon="el-icon-s-cooperation">工具</gourd-tabbar-item>
<gourd-tabbar-item name="my" icon="el-icon-s-custom">我的</gourd-tabbar-item>
</gourd-tabbar>
```

```
data(){
	return {
		activeName:''
	}
}
```

<output data-lang="output">
<gourd-tabbar :fixed="false" v-model="activeName">
<gourd-tabbar-item name="home" icon="el-icon-s-home">首页</gourd-tabbar-item>
<gourd-tabbar-item name="goods" icon="el-icon-s-goods">商品</gourd-tabbar-item>
<gourd-tabbar-item name="tools" icon="el-icon-s-cooperation">工具</gourd-tabbar-item>
<gourd-tabbar-item name="my" icon="el-icon-s-custom">我的</gourd-tabbar-item>
</gourd-tabbar>
</output>


> ## 自定义图标

- 通过 `icon` 插槽自定义图标，可以通过 `slot-scope` 判断标签是否选中。

```
<gourd-tabbar :fixed="false" v-model="activeIcon">
<gourd-tabbar-item name="home" icon="el-icon-s-home">
<img slot-scope="{active}" :src="active ? icon.on : icon.off" slot="icon" />
<span>自定义</span>
</gourd-tabbar-item>
<gourd-tabbar-item name="goods" icon="el-icon-s-goods">商品</gourd-tabbar-item>
<gourd-tabbar-item name="tools" icon="el-icon-s-cooperation">工具</gourd-tabbar-item>
<gourd-tabbar-item name="my" icon="el-icon-s-custom">我的</gourd-tabbar-item>
</gourd-tabbar>
```

```
data(){
	return {
		active:0,
		activeName:'home',
		activeIcon:'home',
		icon:{
			off:'/public/tabbar/ic_main_game.png',
			on:'/public/tabbar/ic_main_game_on.png'
		}
	}
}
```

<output data-lang="output">
<gourd-tabbar :fixed="false" v-model="activeIcon">
<gourd-tabbar-item name="home" icon="el-icon-s-home">
<img slot-scope="{active}" :src="active ? icon.on : icon.off" slot="icon" />
<span>自定义</span>
</gourd-tabbar-item>
<gourd-tabbar-item name="goods" icon="el-icon-s-goods">商品</gourd-tabbar-item>
<gourd-tabbar-item name="tools" icon="el-icon-s-cooperation">工具</gourd-tabbar-item>
<gourd-tabbar-item name="my" icon="el-icon-s-custom">我的</gourd-tabbar-item>
</gourd-tabbar>
</output>


> ## 自定义颜色

- 通过 `active-color` 属性可以设置 `gourd-tabbar-item` 活跃时的颜色。

```
<gourd-tabbar :fixed="false" v-model="activeColor" active-color="purple">
<gourd-tabbar-item name="home" icon="el-icon-s-home">首页</gourd-tabbar-item>
<gourd-tabbar-item name="goods" icon="el-icon-s-goods">商品</gourd-tabbar-item>
<gourd-tabbar-item name="tools" icon="el-icon-s-cooperation">工具</gourd-tabbar-item>
<gourd-tabbar-item name="my" icon="el-icon-s-custom">我的</gourd-tabbar-item>
</gourd-tabbar>
```

```
data(){
	return {
		activeColor:'my'
	}
}
```

<output data-lang="output">
<gourd-tabbar :fixed="false" v-model="activeColor" active-color="purple">
<gourd-tabbar-item name="home" icon="el-icon-s-home">首页</gourd-tabbar-item>
<gourd-tabbar-item name="goods" icon="el-icon-s-goods">商品</gourd-tabbar-item>
<gourd-tabbar-item name="tools" icon="el-icon-s-cooperation">工具</gourd-tabbar-item>
<gourd-tabbar-item name="my" icon="el-icon-s-custom">我的</gourd-tabbar-item>
</gourd-tabbar>
</output>
 

> ## 路由模式

- 标签栏支持路由模式，用于搭配 `vue-router` 使用。路由模式下会匹配页面路径和标签的 `to` 属性，并自动选中对应的标签。

```
<gourd-tabbar :fixed="false" v-model="activeRoute" route>
<gourd-tabbar-item to="/home" name="home" icon="el-icon-s-home">首页</gourd-tabbar-item>
<gourd-tabbar-item to="goods" name="goods" icon="el-icon-s-goods">商品</gourd-tabbar-item>
</gourd-tabbar>
```

> ## Tabbar Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | :---: |
| `v-model	` | 当前选中标签的名称或索引值 | 	`number` `string` | 0 |
| `fixed`	| 是否固定在底部 | `boolean` | `true` |
| `active-color` | 选中标签的颜色 | `string` | `#22cd6b` |
| `route` | 是否开启路由模式 | 	`boolean` | `false` |


> ## TabbarItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | :---: |
| `name` | 标签名称，作为匹配的标识符 | `number` `string` | 当前标签的索引值 |
| `icon` | 图标名称 | `string` | -- |
| `to` | 点击后跳转的目标路由对象，同 `vue-router` 的 `to` 属性 | 	`string` `object` | -- |

> ## TabbarItem Slots

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| `icon` | 	自定义图标 | `active: 是否为选中标签` |


</div>



<script>
	new Vue({
		el:'#tabbar',
		data(){
			return {
				active:0,
				activeName:'home',
				activeIcon:'home',
				activeColor:'my',
				activeRoute:'',
				icon:{
					off:'/public/tabbar/ic_main_game.png',
					on:'/public/tabbar/ic_main_game_on.png'
				}
			}
		}
	})
</script>