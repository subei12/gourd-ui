<div id="gourd">

> ## 基本用法

- 基础用法与原生 `img` 标签一致，可以设置 `src`、`width`、`height`、`alt` 等原生属性，通过 `text` 可以设置图片下方文字。

```
<gourd-image text="孤独的小丑" width="100" height="100" src="/public/image/gudu.jpg"></gourd-image>
```

<output data-lang="output">
<gourd-image text="孤独的小丑" width="100" height="100" src="/public/image/gudu.jpg"></gourd-image>
</output>

> ## 填充模式

- 通过 fit 属性可以设置图片填充模式

```
<gourd-image text="contain" fit="contain" width="100" height="100" src="https://images.669pic.com/ele_banner2/8ccacb3e7ab2c4141deb14364c5f3a77.jpg"></gourd-image>
```

<output data-lang="output">
<gourd-image text="contain" fit="contain" width="100" height="100" src="https://images.669pic.com/ele_banner2/8ccacb3e7ab2c4141deb14364c5f3a77.jpg"></gourd-image>
<gourd-image text="cover" fit="cover" width="100" height="100" src="https://images.669pic.com/ele_banner2/8ccacb3e7ab2c4141deb14364c5f3a77.jpg"></gourd-image>
<gourd-image text="fill" fit="fill" width="100" height="100" src="https://images.669pic.com/ele_banner2/8ccacb3e7ab2c4141deb14364c5f3a77.jpg"></gourd-image>
<gourd-image text="none" fit="none" width="100" height="100" src="https://images.669pic.com/ele_banner2/8ccacb3e7ab2c4141deb14364c5f3a77.jpg"></gourd-image>
<gourd-image text="scale-down" fit="scale-down" width="100" height="100" src="https://images.669pic.com/ele_banner2/8ccacb3e7ab2c4141deb14364c5f3a77.jpg"></gourd-image>
</output>


> ## 圆形图片

- 通过 `round` 属性可以设置图片变圆，注意当图片宽高不相等且 `fit` 为 `contain` 或 `scale-down` 时，将无法填充一个完整的圆形。

```
<gourd-image text="contain" round fit="contain" width="100" height="100" src="https://images.669pic.com/ele_banner2/8ccacb3e7ab2c4141deb14364c5f3a77.jpg"></gourd-image>
```

<output data-lang="output">
<gourd-image text="contain" round fit="contain" width="100" height="100" src="https://images.669pic.com/ele_banner2/8ccacb3e7ab2c4141deb14364c5f3a77.jpg"></gourd-image>
<gourd-image text="cover" round fit="cover" width="100" height="100" src="https://images.669pic.com/ele_banner2/8ccacb3e7ab2c4141deb14364c5f3a77.jpg"></gourd-image>
<gourd-image text="fill" round fit="fill" width="100" height="100" src="https://images.669pic.com/ele_banner2/8ccacb3e7ab2c4141deb14364c5f3a77.jpg"></gourd-image>
<gourd-image text="none" round fit="none" width="100" height="100" src="https://images.669pic.com/ele_banner2/8ccacb3e7ab2c4141deb14364c5f3a77.jpg"></gourd-image>
<gourd-image text="scale-down" round fit="scale-down" width="100" height="100" src="https://images.669pic.com/ele_banner2/8ccacb3e7ab2c4141deb14364c5f3a77.jpg"></gourd-image>
</output>

> ## 加载失败提示

```
<gourd-image text="加载失败" round fit="contain" width="100" height="100" src="" />
```

<output data-lang="output">
<gourd-image text="加载失败" round fit="contain" width="100" height="100" src=""></gourd-image>
</output>

> ## 图片分组

- `ImageGroup `可以为 `Image` 设置图片分组。

```
<gourd-image v-for="index in 5" :key="index" width="50" height="50" round :text="(index + 1) * 100" :src="'/public/image/'+index+'.jpg'"></gourd-image>
```

<output data-lang="output">
<groud-image-group>
      <gourd-image v-for="index in 5" :key="index" width="50" height="50" round :text="(index + 1) * 100" :src="'/public/image/'+index+'.jpg'"></gourd-image>
</groud-image-group>
</output>

> ## 关闭右侧更多图标

- 为 `ImageGroup` 添加 `more="false"` 即可关闭更多图标，另外当 `ImageGroup` 内容溢出会自动添加滚动条，可以通过 `overflow` 原生属性值去掉。

<output data-lang="output">
<groud-image-group :more="false">
 <gourd-image fit="cover" width="350" height="200" src="https://images.669pic.com/ele_banner2/8ccacb3e7ab2c4141deb14364c5f3a77.jpg"></gourd-image>
 <gourd-image fit="cover" width="350" height="200" src="https://images.669pic.com/ele_banner2/8ccacb3e7ab2c4141deb14364c5f3a77.jpg"></gourd-image>
 <gourd-image fit="cover" width="350" height="200" src="https://images.669pic.com/ele_banner2/8ccacb3e7ab2c4141deb14364c5f3a77.jpg"></gourd-image>
 <gourd-image fit="cover" width="350" height="200" src="https://images.669pic.com/ele_banner2/8ccacb3e7ab2c4141deb14364c5f3a77.jpg"></gourd-image>
</groud-image-group>
</output>


> ## ImageGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | :---: |
| `moreFixed` | 更多图标是否固定在右侧 | `boolean` | `false` |
| `overflow` | 原生 `overflow` 属性值 | `string` | `auto` |
| `more` | 是否显示右侧更多图标 | `boolean` | `true` |


> ## Image Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | :---: |
| `src` | 图片链接 | `string` | -- |
| `text` | 图片底部文字 | `number` `string` | -- |
| `fit` | 图片填充模式 | `string` | `fill` |
| `alt` | 替代文本 | `string` | -- |
| `width` | 宽度，默认单位为`px` | `number` `string` | -- |
| `height` | 高度，默认单位为`px` | `number` `string` | -- |
| `round` | 是否显示为圆形 | `boolean` | `false` |

> ## Image Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | :---: |
| `click` | 点击图片时触发 | `event: Event` |
| `load` | 图片加载完毕时触发	 | -- |
| `error` | 图片加载失败时触发 | -- |



</div>