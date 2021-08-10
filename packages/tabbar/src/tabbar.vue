<template>
  <div class="gourd-tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
	name: 'GourdTabbar',
	props: {
		modelValue: {
			type: [String, Number],
			default: 0
		},
		route: Boolean,
		activeColor: {
			type: String,
			default: ''
		}
	},
	model: {
		prop: 'modelValue',
		event: 'update'
	},
	methods: {
		updateModelVal(val) {
			this.$emit('update', val);
		}
	}
};
</script>