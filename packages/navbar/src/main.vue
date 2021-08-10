<template>
  <nav :class="{'gourd-nav-bar':true,'gourd-nav-bar--fixed':fixed}">
    <div class="gourd-nav-bar--left" @click="leftClick">
      <i :class="leftIcon" v-if="leftIcon"></i>
      <slot name="left"></slot>
    </div>
    <div class="gourd-nav-bar--title">
      <span v-text="title"></span>
    </div>
    <div class="gourd-nav-bar--right" @click="rightClick">
      <i :class="rightIcon" v-if="rightIcon"></i>
      <slot name="right"></slot>
    </div>
  </nav>
</template>

<script>
export default {
	name: 'GourdNavBar',
	props: {
		leftIcon: {
			type: String,
			default: ''
		},
		rightIcon: {
			type: String,
			default: ''
		},
		title: {
			type: String,
			default: ''
		},
		fixed: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		leftClick(e) {
			if (this.$listeners['click-left']) {
				this.$emit('click-left', e);
			}
		},
		rightClick(e) {
			if (this.$listeners['click-right']) {
				this.$emit('click-right', e);
			}
		}
	}
};
</script>