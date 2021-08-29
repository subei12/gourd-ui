<div id="gourd">

> ## Demo

<output>
<div class="tabs-wrap">
<gourd-tabs v-model="active">

<gourd-tab title="基本使用">
  <gourd-list v-model="loading" @load="load" :finished="finished" finished-text="没有更多了" height="300">
  <gourd-title v-for="index in post" :key="index" title="你就打算一辈子呆在一个没有前途的小县城里面吗？" author="孤独的小丑" see="100" info="230" time="10分钟前">
    <template slot="title-prefix">
    <gourd-tag type="success">新</gourd-tag>
    <gourd-tag type="danger">热</gourd-tag>
    </template>
    <span slot="describe">
       到目前为止，我仍然认为我们接受高等教育是为了帮助家乡脱离贫穷，而不是脱离贫穷的家乡。
    </span>
  </gourd-title>
  </gourd-list>
</gourd-tab>

<gourd-tab title="下拉刷新">
 <gourd-pull-refresh v-model="refreshLoading" @refresh="refresh" success-text="刷新成功">
 <gourd-list v-model="refreshListLoading" @load="refreshLoad" :finished="refreshFinished" finished-text="没有更多了" height="300">
 <gourd-title v-for="index in refreshPost" title="久病床前无孝子，久穷家中无贤妻。" author="孤独的小丑" see="100" info="230">
 </gourd-title>
 </gourd-list>
 </gourd-pull-refresh>
</gourd-tab>

 </gourd-tabs>
</div>
</output>

!> 注意：部分组件不兼容PC端，请打开控制台使用模拟手机查看效果。

> ## 基本用法

- `List` 组件通过 `loading` 和 `finished` 两个变量控制加载状态，当组件滚动到底部时，会触发 `load` 事件并将 `loading` 设置成 `true`。此时可以发起异步操作并更新数据，数据更新完毕后，将 `loading` 设置成 `false` 即可。若数据已全部加载完毕，则直接将 `finished` 设置成 `true` 即可。

```
  <gourd-list v-model="loading" @load="load" :finished="finished" finished-text="没有更多了" height="300">
  <gourd-title v-for="index in post" :key="index" title="你就打算一辈子呆在一个没有前途的小县城里面吗？" author="孤独的小丑" see="100" info="230" time="10分钟前">
    <template slot="title-prefix">
    <gourd-tag type="success">新</gourd-tag>
    <gourd-tag type="danger">热</gourd-tag>
    </template>
    <span slot="describe">
       到目前为止，我仍然认为我们接受高等教育是为了帮助家乡脱离贫穷，而不是脱离贫穷的家乡。
    </span>
  </gourd-title>
  </gourd-list>
```
```js
{
	data(){
		return {
			loading:false,
			post:[1,2,3,4,5,6],
			finished:false
		}
	},
	methods:{
		load(){
			// 发送异步请求
			setTimeout(()=>{
				this.post.length += 5;
				// 加载结束
				this.loading = false;
				
				// 数据全部加载完成
				if(this.post.length >= 15){
					this.finished = true;
				}
			},1500);
		}
	}
}
```

!> 注意：使用 `List` 组件需要设置高度，默认是 `height:100%;`

> ## 下拉刷新

- `List` 组件可以与 [PullRefresh](pull-refresh.md) 组件结合使用，实现下拉刷新的效果。

```
 <gourd-pull-refresh v-model="refreshLoading" @refresh="refresh" success-text="刷新成功">
 <gourd-list v-model="refreshListLoading" @load="refreshLoad" :finished="refreshFinished" finished-text="没有更多了" height="300">
 <gourd-title v-for="index in refreshPost" title="久病床前无孝子，久穷家中无贤妻。" author="孤独的小丑" see="100" info="230">
 </gourd-title>
 </gourd-list>
 </gourd-pull-refresh>
```

```js
{
	data(){
		return {
			refreshLoading:false,
			refreshListLoading:false,
			refreshPost:10,
			refreshFinished:false
		}
	},
	methods:{
		refreshLoad(){
			// 发送异步请求
			setTimeout(()=>{
				this.refreshPost += 5;
				// 加载结束
				this.refreshListLoading = false;
				// 数据全部加载完成
				if(this.refreshPost >= 20){
					this.refreshFinished = true;
				}
			},1500);
		},
		refresh(){
			setTimeout(()=>{
				this.refreshFinished = false;
				this.refreshPost = 10;
				this.refreshLoading = false;
			},1000);
		}
	}
}
```

> ## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | :---: |
| `v-model` | 是否处于加载状态，加载过程中不触发 `load` 事件 | `boolean` | `false` |
| `finished` | 是否已加载完成，加载完成后不再触发 `load` 事件	 | `boolean` | `false` |
| `height` | 列表高度，必须指定高度 | `string` `number` | `100%` |
| `loading-text` | 加载过程中的提示文案 | `string` | `查看更多` |
| `finished-text` | 加载完成后的提示文案 | `string` | -- |
| `disable-scroll` | 是否禁止列表滚动 | `boolean` | `false` |

> ## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | :---: |
| `load` | 列表滚动到底部触发加载事件 | -- |

> ## 方法

| 方法名 | 说明 | 参数 |
| --- | --- | :---: |
| `scroll` | 滚动列表到指定位置 | `scroll(x,y)` |

</div>

<script>
	new Vue({
		el:'#gourd',
		data(){
			return {
				loading:false,
				post:[1,2,3,4,5,6],
				finished:false,
				active:0,
				refreshLoading:false,
				refreshListLoading:false,
				refreshPost:10,
				refreshFinished:false
			}
		},
		methods:{
			load(){
				// 发送异步请求
				setTimeout(()=>{
					this.post.length += 5;
					// 加载结束
					this.loading = false;
					
					// 数据全部加载完成
					if(this.post.length >= 15){
						this.finished = true;
					}
				},1500);
			},
			refreshLoad(){
				
				// 发送异步请求
				setTimeout(()=>{
					this.refreshPost += 5;
					// 加载结束
					this.refreshListLoading = false;
					// 数据全部加载完成
					if(this.refreshPost >= 20){
						this.refreshFinished = true;
					}
				},1500);
			},
			refresh(){
				setTimeout(()=>{
					this.refreshFinished = false;
					this.refreshPost = 10;
					this.refreshLoading = false;
				},1000);
			}
		}
	})
</script>