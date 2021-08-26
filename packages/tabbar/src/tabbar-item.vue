<template>
  <div class="gourd-tabbar-item" :style="activeColor" @click="click" :class="[
    {
        'gourd-tabbar-item--active':showActive
    }
  ]">
    <div v-if="icon" class="gourd-tabbar-item--icon">
      <slot name="icon" :active="showActive"></slot>
      <i :class="icon" v-if="!$scopedSlots.icon"></i>
    </div>
    <div class="gourd-tabbar-item--text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
	name: 'GourdTabbarItem',
	props: {
		icon: {
			type: String,
			default: ''
		},
		name: {
			type: [String, Number],
			default: ''
		},
		to: {
			type: [String, Object],
			default: ''
		}
	},
	data() {
		return {
			index: ''
		};
	},
	methods: {
		click() {
			
			this.$parent.updateModelVal(this.index);

			if (this.$parent.route && this.to && this.$route.path !== this.to) {
				this.$router.push(this.to);
			}

			if(this.$listeners.click){
				this.$emit('click',this.index);
			}
			
		}
	},
	created() {
		this.index = this.name || this.$parent.$children.length - 1;
	},
	computed: {
		modeValChange() {
			return this.$parent.modelValue ? this.$parent.modelValue : 0;
		},
		activeColor() {
			if (this.$parent.activeColor && this.modeValChange == this.index) {
				return {
					color: this.$parent.activeColor
				};
			} else {
				return '';
			}
		},
		showActive() {
			return this.modeValChange == this.index;
		}
	}
};
</script>