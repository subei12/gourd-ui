<div id="gourd">

> ## 基本使用

- 默认渲染一条水平分割线。

```
<span>为了更美好的明天而奋斗</span>
<gourd-divider></gourd-divider>
<span>爱上一匹野马，可是我的家没有草原。</span>
<gourd-divider></gourd-divider>
```

<output data-lang="output">
<span>为了更美好的明天而奋斗</span>
<gourd-divider></gourd-divider>
<span>爱上一匹野马，可是我的家没有草原。</span>
<gourd-divider></gourd-divider>
</output>

> ## 展示文字

- 通过插槽在可以分割线中间插入内容。

```
<gourd-divider>我是有底线的</gourd-divider>
```

<output data-lang="output">
<gourd-divider>我是有底线的</gourd-divider>
</output>

> ## 内容位置

- 通过 `position` 指定内容所在位置。

```
<span>王侯将相，宁有种呼？</span>
<gourd-divider position="left">陈胜</gourd-divider>
<span>黄河常有澄清日，岂可人无得运时。</span>
<gourd-divider position="right">哲学</gourd-divider>
<span>麻雀虽小，五脏俱全。</span>
<gourd-divider position="right">钱钟书</gourd-divider>
```

<output data-lang="output">
<span>王侯将相，宁有种呼？</span>
<gourd-divider position="left">陈胜</gourd-divider>
<span>黄河常有澄清日，岂可人无得运时。</span>
<gourd-divider position="right">哲学</gourd-divider>
<span>麻雀虽小，五脏俱全。</span>
<gourd-divider position="right">钱钟书</gourd-divider>
</output>

> ## 自定义样式

- 可以直接通过 `style` 属性设置分割线的样式。

```
<gourd-divider :style="{color:'#00a9ff',borderColor:'#00a9ff'}">
爱一个人需要理由吗？
</gourd-divider>
```

<output data-lang="output">
<gourd-divider :style="{color:'#00a9ff',borderColor:'#00a9ff'}">爱一个人需要理由吗？</gourd-divider>
</output>

> ## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `hairline` | 是否使用 `0.5px` 线 | `boolean` | `true` |
| `position` | 内容位置，可选值为`left` `right` | `string` | `center` |


</div>