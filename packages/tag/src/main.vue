<template>
  <span class="gourd-tag" :class="['gourd-tag--'+type,{'gourd-tag--round':round,'gourd-tag--small':small}]" :style="tagStyle">
    <slot></slot>
  </span>
</template>

<script>
export default {
	name: 'GourdTag',
	props: {
		type: {
			type: String,
			default: 'default'
		},
		color: {
			type: String,
			default: ''
		},
		textColor: {
			type: String,
			default: ''
		},
		round: Boolean,
		small: Boolean
	},
	computed: {
		tagStyle() {
			return {
				background: this.color,
				color: this.textColor
			};
		}
	}
};
</script>