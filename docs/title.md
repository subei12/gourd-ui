<div id="gourd">

> ## 基本使用

- 通过 `see` `info` 设置查看量和信息量。

```
<gourd-title title="久病床前无孝子，久穷家中无贤妻。" author="孤独的小丑" see="100" info="230">
</gourd-title>
```

<output data-lang="output">

<gourd-title title="久病床前无孝子，久穷家中无贤妻。" author="孤独的小丑" see="100" info="230">
</gourd-title>

</output>

> ## 发布时间

- 添加 `time` 为帖子设置发布时间。 

```
<gourd-title title="久病床前无孝子，久穷家中无贤妻。" author="孤独的小丑" see="100" info="230" time="10分钟前">
</gourd-title>
```

<output data-lang="output">

<gourd-title title="少小离家老大回，乡音无改鬓毛衰。" author="孤独的小丑" see="100" info="230" time="10分钟前">
</gourd-title>

</output>

> ## 自定义前缀

- 通过 `title-prefix` 插槽可以设置标题前缀。

```
<gourd-title title="我是一名热爱IT互联网技术人员。">
  <gourd-tag slot="title-prefix" type="danger">公告</gourd-tag>
</gourd-title>
<gourd-title title="女人心，海底针。" author="孤独的小丑" see="100" info="230">
  <gourd-tag slot="title-prefix" type="warning">置顶</gourd-tag>
</gourd-title>
<gourd-title title="无限接近死亡，才能领悟到生命的真谛。" author="孤独的小丑" see="100" info="230" time="10分钟前">
  <template slot="title-prefix">
  <gourd-tag type="success">新</gourd-tag>
  <gourd-tag type="danger">热</gourd-tag>
  </template>
</gourd-title>
```

<output data-lang="output">

<gourd-title title="我是一名热爱IT互联网技术人员。">
  <gourd-tag slot="title-prefix" type="danger">公告</gourd-tag>
</gourd-title>
<gourd-title title="女人心，海底针。" author="孤独的小丑" see="100" info="230">
  <gourd-tag slot="title-prefix" type="warning">置顶</gourd-tag>
</gourd-title>
<gourd-title title="无限接近死亡，才能领悟到生命的真谛。" author="孤独的小丑" see="100" info="230" time="10分钟前">
  <template slot="title-prefix">
  <gourd-tag type="success">新</gourd-tag>
  <gourd-tag type="danger">热</gourd-tag>
  </template>
</gourd-title>

</output>


> ## 标题描述

- 添加标题描述可以通过 `describe` 属性和 `describe` 插槽任意一种进行设置。

```
<gourd-title title="你就打算一辈子呆在一个没有前途的小县城里面吗？" author="孤独的小丑" see="100" info="230" time="10分钟前">
  <template slot="title-prefix">
  <gourd-tag type="success">新</gourd-tag>
  <gourd-tag type="danger">热</gourd-tag>
  </template>
  <span slot="describe">
	 到目前为止，我仍然认为我们接受高等教育是为了帮助家乡脱离贫穷，而不是脱离贫穷的家乡。
  </span>
</gourd-title>
```

<output data-lang="output">

<gourd-title title="你就打算一辈子呆在一个没有前途的小县城里面吗？" author="孤独的小丑" see="100" info="230" time="10分钟前">
  <template slot="title-prefix">
  <gourd-tag type="success">新</gourd-tag>
  <gourd-tag type="danger">热</gourd-tag>
  </template>
  <span slot="describe">
	 到目前为止，我仍然认为我们接受高等教育是为了帮助家乡脱离贫穷，而不是脱离贫穷的家乡。
  </span>
</gourd-title>

</output>

> ## 标题封面

- `covers` 是一个数组，里面存放着图片的地址，默认会展示 `covers` 数组的前三张图片。

```
<gourd-title title="你就打算一辈子呆在一个没有前途的小县城里面吗？" :covers="covers" author="孤独的小丑" see="100" info="230" time="10分钟前">
  <template slot="title-prefix">
  <gourd-tag type="success">新</gourd-tag>
  <gourd-tag type="danger">热</gourd-tag>
  </template>
  <span slot="describe">
	 到目前为止，我仍然认为我们接受高等教育是为了帮助家乡脱离贫穷，而不是脱离贫穷的家乡。
  </span>
</gourd-title>
```

```
data(){
	return {
		covers:[
			'https://img1.baidu.com/it/u=1250622511,3366934774&fm=26&fmt=auto&gp=0.jpg',
			'https://img1.baidu.com/it/u=93208989,471774445&fm=26&fmt=auto&gp=0.jpg',
			'https://img2.baidu.com/it/u=1786516055,2860344427&fm=26&fmt=auto&gp=0.jpg'
		]
	}
}
```

<output data-lang="output">

<gourd-title title="你就打算一辈子呆在一个没有前途的小县城里面吗？" :covers="covers" author="孤独的小丑" see="100" info="230" time="10分钟前">
  <template slot="title-prefix">
  <gourd-tag type="success">新</gourd-tag>
  <gourd-tag type="danger">热</gourd-tag>
  </template>
  <span slot="describe">
	 到目前为止，我仍然认为我们接受高等教育是为了帮助家乡脱离贫穷，而不是脱离贫穷的家乡。
  </span>
</gourd-title>

</output>

> ## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | :---: |
| `title` | 标题内容 | `string` | -- |
| `describe` | 描述文字 | `string` | -- |
| `covers` | 封面数组 | `array` | -- |
| `author` | 作者 | `string` | -- |
| `time` | 发布时间 | `string` `number` | -- |
| `see` | 查看量 | `string` `number` | `0` |
| `info` | 信息量 | `string` `number` | `0` |
| `bottom-line `| 是否添加底部边框线 | `boolean` | `true` |

> ## Slots

| 名称 | 说明 |
| -- | -- |
| `describe` | 标题描述内容 |
| `title-prefix` | 自定义标题前缀 |

</div>