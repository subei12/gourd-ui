<div id="gourd">

> ## Demo

<output data-lang="output">

<div class="tabs-wrap">
<gourd-tabs @tab-content-start="start" @tab-content-move="move" @tab-content-end="end">

<gourd-tab height="600" title="基本用法">
<div class="tabs-content">
<gourd-pull-refresh v-model="loading" @refresh="refresh" :disabled="disabled">
<span>刷新次数{{count}}</span>
</gourd-pull-refresh>
</div>
</gourd-tab>

<gourd-tab height="600" title="成功提示">
<div class="tabs-content">
<gourd-pull-refresh v-model="loadingSuccess" @refresh="refreshSuccess" success-text="刷新成功" :disabled="disabled">
<span>刷新次数{{count}}</span>
</gourd-pull-refresh>
</div>
</gourd-tab>

<gourd-tab height="600" title="自定义提示">
<div class="tabs-content">
<gourd-pull-refresh v-model="loadingCustom" @refresh="refreshCustom" :disabled="disabled">
<!-- 下拉过程中顶部内容 -->
<div slot="pulling">请下拉刷新</div>
<!-- 释放过程中顶部内容 -->
<div slot="loosing">释放即可刷新</div>
<!-- 加载过程中顶部内容 -->
<div slot="loading">正在加载中</div>
<!-- 刷新成功提示内容 -->
<div slot="success">加载完成</div>
<span>刷新次数{{count}}</span>
</gourd-pull-refresh>
</div>
</gourd-tab>

</gourd-tabs>
</div>

</output>

!> 注意：部分组件不兼容PC端，请打开控制台使用模拟手机查看效果。

> ## 基本用法

- 下拉刷新时会触发 `refresh` 事件，在事件的回调函数中可以进行同步或异步操作，操作完成后将 `v-model` 设置为 `false`，表示加载完成。

```
<gourd-pull-refresh v-model="loading" @refresh="refresh">
<span>刷新次数{{count}}</span>
</gourd-pull-refresh>
```

```js
data(){
	return {
	loading:false,
	count:0
  }
},
methods:{
	refresh(){
	setTimeout(()=>{
		his.loading = false;
		this.count++;
		},2000);
	}
}
```

> ## 成功提示

- 通过 `success-text` 可以设置刷新成功后的顶部提示文案。

```vue
<gourd-pull-refresh v-model="loading" @refresh="refresh" success-text="刷新成功">
<span>刷新次数{{count}}</span>
</gourd-pull-refresh>
```

> ## 自定义提示

- 通过插槽可以自定义下拉刷新过程中的提示内容。

```
<gourd-pull-refresh v-model="loadingCustom" @refresh="refreshCustom" :disabled="disabled">
<!-- 下拉过程中顶部内容 -->
<div slot="pulling">请下拉刷新</div>
<!-- 释放过程中顶部内容 -->
<div slot="loosing">释放即可刷新</div>
<!-- 加载过程中顶部内容 -->
<div slot="loading">正在加载中</div>
<!-- 刷新成功提示内容 -->
<div slot="success">加载完成</div>
<span>刷新次数{{count}}</span>
</gourd-pull-refresh>
```

```js
data(){
	return {
		loadingCustom:false,
		count:0
	}
},
methods:{
	refreshCustom(){
		setTimeout(()=>{
			this.loadingCustom = false;
			this.count++;
		},1500);
	}
}
```

> ## 下拉刷新与滚动条冲突

- 当我们使用下拉刷新可能存在与滚动条冲突的情况，我可以通过js进行控制，这里给个示例 `仅供参考`。

```js
{
	data(){
		retrun {
			disabled:false,
			firstMove:true,
			moveStart_Y:0,
			scrolling:false
		}
	},
	methods:{
		start(event){
			// 记录手指按下开始位置
			this.moveStart_Y = event.changedTouches[0].clientY;
			// 按下时立即禁用下拉刷新
			this.disabled = true;
		},
		move(index,event){
			
			// 判断是否第一次滑动（防止在来回滑动）
			if(this.firstMove){
					this.firstMove = false;
					// 滑动的方向 （结束位置 - 开始位置）大于 0 是往下拉，小于 0 是往上拉。
					this.moveStart_Y = event.changedTouches[0].clientY - this.moveStart_Y;
					// 如果是下拉刷新并且滚动条滚动距离为0则解除下拉刷新的禁用
					if(this.moveStart_Y > 0 && window.pageYOffset === 0){
						this.disabled = false;
						this.scrolling = true;
					}
			}
			
			//如果此时是下拉刷新，则没必要使滚动条滚动了
			if(this.scrolling){
				event.preventDefault()
			}
		},
		end(event){
			//当手指离开时，恢复变量原始状态。
			this.scrolling = false;
			this.firstMove = true;
		}
	}
}
```

> ## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | -- | :---: |
| `v-model` | 是否处于加载中状态 | `boolean` | -- |
| `pulling-text` | 下拉过程提示文案	 | `string` | `下拉刷新` |
| `loosing-text` | 释放过程提示文案	 | `string` | `释放更新` |
| `loading-text` | 加载过程提示文案	 | `string` | `加载中` |
| `success-text` | 刷新成功提示文案		 | `string` | -- |
| `success-duration` | 刷新成功提示展示时长(`ms`) | `number` | `500` |
| `animation-duration` | 动画时长 | `number` `string` | `300` |
| `disabled` | 是否禁用下拉刷新（即使禁用了，依然可以通过代码进行操作）	 | `boolean` | `false` |
| `pull-distance` | 触发下拉刷新的距离 | `number` | `50` |

> ## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `refresh` | 下拉刷新时触发 | -- |

> ## slots

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 自定义内容 | -- |
| `pulling` | 下拉过程中顶部内容 | -- |
| `loosing` | 释放过程中顶部内容 | -- |
| `loading` | 加载过程中顶部内容 | -- |
| `success` | 刷新成功提示内容 | -- |



</div>

<script>
	new Vue({
		el:'#gourd',
		data(){
			return {
				loading:false,
				loadingSuccess:false,
				loadingCustom:false,
				count:0,
				disabled:false,
				firstMove:true,
				moveStart_Y:0,
				scrolling:false
			}
		},
		methods:{
			refresh(){
				setTimeout(()=>{
					this.loading = false;
					this.count++;
				},2000);
			},
			refreshSuccess(){
				setTimeout(()=>{
					this.loadingSuccess = false;
					this.count++;
				},1500);
			},
			refreshCustom(){
				setTimeout(()=>{
					this.loadingCustom = false;
					this.count++;
				},1500);
			},
			start(event){
				//console.log(event)
				this.moveStart_Y = event.changedTouches[0].clientY;
				this.disabled = true;
			},
			move(index,event){
				if(this.firstMove){
						this.firstMove = false;
						this.moveStart_Y = event.changedTouches[0].clientY - this.moveStart_Y;
						if(this.moveStart_Y > 0 && window.pageYOffset === 0){
							this.disabled = false;
							this.scrolling = true;
						}
				}
				
				if(this.scrolling){
					event.preventDefault()
				}
			},
			end(event){
				this.scrolling = false;
				this.firstMove = true;
			}
		},
		mounted(){
			
		}
	})
</script>