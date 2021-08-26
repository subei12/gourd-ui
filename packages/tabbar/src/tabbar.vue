<template>
  <div class="gourd-tabbar" :class="{'gourd-tabbar--fixed':fixed}">
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
		},
		fixed: {
			type: Boolean,
			default: true
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