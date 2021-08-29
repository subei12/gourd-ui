# Gourd  :id=home

## 介绍

>  一个基于[葫芦侠移动端](http://www.huluxia.com/)UI设计的`Vue`轻量级的组件库，其中组件属性，代码风格等参考了`Element`和`Vant`。

## 概述

这是一个简单易用 `Vue` 轻量级的 `移动端` 组件库，组件功能虽然简单，但它是我在组件封装中的一个成长过程。

## 快速开始

引入项目 `dist` 目录下的 `gourd.js` 和样式 `gourd.css`

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="./gourd-ui/dist/gourd.css" />
<!-- js -->
<script src="./gourd-ui/dist/gourd.js"></script>
```

```js
// 模块化安装
import Vue from 'vue';

import Gourd from 'gourd-ui/dist/gourd.js';

// 加载样式
import 'gourd-ui/dist/gourd.css';

// 安装插件
Vue.use(Gourd);

```

## 开始使用

```
<gourd-button>默认按钮</gourd-button>
<gourd-button type="primary">主要按钮</gourd-button>
```

<div id="demo-main">
<output>
<gourd-button>默认按钮</gourd-button>
<gourd-button type="primary">主要按钮</gourd-button>
</output>
</div>

<script>
	new Vue({
		el:'#demo-main'
	})
</script>