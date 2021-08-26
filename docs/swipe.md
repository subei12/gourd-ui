<div id="gourd">

!> 注意：轮播图左右滑动切换请打开控制台使用手机端进行模拟。

> ## 基本用法

- 每个 `SwipeItem` 代表一张轮播卡片，可以通过 `interval` 属性设置自动轮播的间隔。

```
<gourd-swipe>
	<gourd-swipe-item >
		<div class="swipe-demo">1</div>
	</gourd-swipe-item >
	<gourd-swipe-item >
		<div class="swipe-demo">2</div>
	</gourd-swipe-item >
	<gourd-swipe-item >
		<div class="swipe-demo">3</div>
	</gourd-swipe-item >
	<gourd-swipe-item >
		<div class="swipe-demo">4</div>
	</gourd-swipe-item >
</gourd-swipe>
```

```
.swipe-demo{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	color: #fff;
	font-weight: bold;
	font-size: 16px;
	background-color: #aa7ded;
}
```

<output data-lang="output">
<gourd-swipe>
		<gourd-swipe-item >
			<div class="swipe-demo">1</div>
		</gourd-swipe-item >
		<gourd-swipe-item >
			<div class="swipe-demo">2</div>
		</gourd-swipe-item >
		<gourd-swipe-item >
			<div class="swipe-demo">3</div>
		</gourd-swipe-item >
		<gourd-swipe-item >
			<div class="swipe-demo">4</div>
		</gourd-swipe-item >
</gourd-swipe>
</output>


> ## 轮播描述

- 给 `gourd-swipe-item` 设置一个 `text` 属性可以向轮播底部添加一段文字描述。

```
<gourd-swipe>
  <gourd-swipe-item text="王侯将相，宁有种呼？">
     <img src="https://images.669pic.com/ele_banner2/6fc8fc23d3be2894076a7e1560cb1046.jpg" alt="">
  </gourd-swipe-item >
   <gourd-swipe-item text="他时若遂凌云志，敢笑黄巢不丈夫?">
     <img src="https://images.669pic.com/ele_banner2/479fbb3989f073ba13ebf14a00c0bf99.jpg" alt="">
  </gourd-swipe-item>
  <gourd-swipe-item text="黄河常有澄清日，岂可人无得运时？">
     <img src="https://images.669pic.com/ele_banner2/5c54a9c2f36bb14f6989479b3dd3484e.jpg" alt="">
  </gourd-swipe-item>
  <gourd-swipe-item text="身无彩凤双飞翼，心有灵犀一点通。">
     <img src="https://images.669pic.com/ele_banner2/ed6e9f4bad609cd97178fe2e6631cf76.jpg" alt="">
  </gourd-swipe-item>
</gourd-swipe>
```

```
.gourd-swipe{
	height: 200px;
 }
		
.gourd-swipe img{
	object-fit:cover;
 }
```

<output data-lang="output">

<gourd-swipe>
      <gourd-swipe-item text="王侯将相，宁有种呼？">
        <img src="https://images.669pic.com/ele_banner2/6fc8fc23d3be2894076a7e1560cb1046.jpg" alt="">
      </gourd-swipe-item >
      <gourd-swipe-item text="他时若遂凌云志，敢笑黄巢不丈夫?">
        <img src="https://images.669pic.com/ele_banner2/479fbb3989f073ba13ebf14a00c0bf99.jpg" alt="">
      </gourd-swipe-item>
      <gourd-swipe-item text="黄河常有澄清日，岂可人无得运时？">
        <img src="https://images.669pic.com/ele_banner2/5c54a9c2f36bb14f6989479b3dd3484e.jpg" alt="">
      </gourd-swipe-item>
      <gourd-swipe-item text="身无彩凤双飞翼，心有灵犀一点通。">
        <img src="https://images.669pic.com/ele_banner2/ed6e9f4bad609cd97178fe2e6631cf76.jpg" alt="">
      </gourd-swipe-item>
</gourd-swipe>

</output>


> ## Swipe Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | :---: |
| `autoplay` | 是否开启循环播放 | `boolean` | `true` |
| `interval` | 自动切换的时间间隔，单位为毫秒 | `number` | `3000` |

> ## SwipeItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 幻灯片底部文字 | `string` | --- |

> ## SwipeItem Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | :---: |
| `click` | 点击时触发	 | `event: Event` |

> ## Swipe 方法

!> 通过 `ref` 可以获取到 `Swipe` 实例并调用实例方法


| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | :---: |
| `prev` | 切换到上一轮播 | -- | -- |
| `next` | 切换到下一轮播 | -- | -- |


</div>