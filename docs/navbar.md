<div id="gourd">

> ## 基本用法

```
<gourd-nav-bar title="标题" left-icon="el-icon-arrow-left" right-icon="el-icon-message-solid">
 <span slot="left">返回</span>
</gourd-nav-bar>
```

<output data-lang="output">
<gourd-nav-bar title="标题" left-icon="el-icon-arrow-left" right-icon="el-icon-message-solid">
 <span slot="left">返回</span>
</gourd-nav-bar>
</output>


> ## 使用插槽

- 通过插槽自定义导航栏两侧的内容。

```
<gourd-nav-bar title="标题">
 <img src="/public/navbar/ic_class_add.png" slot="left" alt="">
 <img src="/public/navbar/ic_message.png" slot="right" alt="">
</gourd-nav-bar>
```

<output data-lang="output">
<gourd-nav-bar title="标题">
 <img src="/public/navbar/ic_class_add.png" slot="left" alt="">
 <img src="/public/navbar/ic_message.png" slot="right" alt="">
</gourd-nav-bar>
</output>

> ## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | :---: |
| `title` | 标题 | `string`	| -- |
| `left-icon` | 左侧`icon`名称 | `string` | -- |
| `right-icon` | 右侧`icon`名称 | `string` | -- |
| `fixed` | 是否固定在顶部	| `boolean` | `false` |

> ## Slots

| 名称 | 说明 |
| -- | -- |
| `left` | 自定义左侧区域内容 |
| `right` | 自定义右侧区域内容 |

> ## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `click-left` | 点击左侧按钮时触发 | `event: Event` |
| `click-right` | 点击右侧按钮时触发 | `event: Event` |

</div>