<template>
  <li class="gourd-swipe-item" :style="style" @click="handledClick">
    <slot></slot>
    <div class="gourd-swipe-item--overlay" v-if="text">
      <span :style="textStyle">{{text}}</span>
    </div>
  </li>
</template>

<script>
export default {
	name: 'GourdSwipeItem',
	data() {
		return {
			translate: 0
		};
	},
	props: {
		text: {
			type: String,
			default: ''
		}
	},
	created() {
		this.$parent && this.$parent.updateItems();
		// this.width = this.$parent.viewWidth;
	},
	mounted() {
		this.$nextTick(() => {
			this.$parent.viewChange();
		});
	},
	destroyed() {
		this.$parent && this.$parent.updateItems();
	},
	methods: {
		handledClick(event) {
			this.$emit('click', event);
		}
	},
	computed: {
		textStyle() {
			const sumSize = this.$parent.viewWidth;
			const indicatorsWidth = this.$parent.indicatorsWidth;
			const size = sumSize - (indicatorsWidth + 10) - 10;

			return {
				width: size + 'px'
			};
		},
		style() {
			return {
				width: this.$parent.viewWidth + 'px',
				transform: `translateX(${this.translate}px)`
			};
		}
	}
};
</script>

