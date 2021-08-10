<template>
  <div class="gourd-loading" :class="{'gourd-loading--vertical':vertical}" :style="{color:color}">
    <span class="gourd-loading--spinner" :style="spinner" :class="[smooth ? 'gourd-loading--smooth' : 'gourd-loading--steps']">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </span>
    <span class="gourd-loading-text" v-if="$slots.default" :style="text">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
	name: 'GourdLoading',
	props: {
		size: {
			type: [Number, String],
			default: ''
		},
		color: {
			type: String,
			default: ''
		},
		textColor: {
			type: String,
			default: ''
		},
		smooth: Boolean,
		vertical: Boolean
	},
	computed: {
		spinner() {
			var size = parseInt(this.size);

			return {
				width: size + 'px',
				height: size + 'px'
			};
		},
		text() {
			var color = this.textColor;
			if (!color) {
				color = this.color;
			}
			return {
				color: color
			};
		}
	}
};
</script>
