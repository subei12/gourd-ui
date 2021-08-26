<div id="gourd">

> ## 基本用法

- 通过 `v-model` 绑定当前激活标签对应的索引值，默认情况下启用第一个标签。

<output data-lang="output">
<div class="tabs-wrap">
<gourd-tabs v-model="active">
<gourd-tab title="标签1">
  <div class="tabs-content">标签1</div>
</gourd-tab>
<gourd-tab title="标签2">
  <div class="tabs-content">标签2</div>
</gourd-tab>
<gourd-tab title="标签3">
  <div class="tabs-content">标签3</div>
</gourd-tab>
 </gourd-tabs>
</div>
</output>


</div>