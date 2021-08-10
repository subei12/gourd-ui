<template>
  <div class="gourd-tabs--content--container" :style="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
	name: 'GourdTab',
	props: {
		title: {
			type: String,
			required: true
		},
		height: Number
	},
	computed: {
		container() {
			var width = 100 / this.$parent.items.length;

			var container = {
				width: width + '%'
			};

			if (this.height) {
				container.height = this.height + 'px';
			}

			return container;
		}
	}
};
</script>

<style>
</style>