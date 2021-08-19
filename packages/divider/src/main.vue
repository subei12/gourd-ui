<template>
  <div class="gourd-divider" :class="dividerClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
	name: 'GourdDivider',
	props: {
		position: {
			type: String,
			default: 'center'
		},
		hairline: {
			type: Boolean,
			default: true
		}
	},
	computed: {
		dividerClass() {
      var position = null;
      
			if (this.position && this.$slots.default) {
				position = 'gourd-divider--' + this.position;
      }
      
			return [{ 'gourd-divider--hairline': this.hairline }, position];
		}
	}
};
</script>
