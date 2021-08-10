<template>
  <section class="groud-image-group" :style="group">

    <div class="groud-image-group--container" :style="container">
      <slot></slot>
      <div class="groud-image-group--more" :class="{'groud-image-group--fixed':moreFixed}" :style="more">
        <i class="iconfont icon-ellipsis" :style="{'fontSize':size}"></i>
      </div>
    </div>

  </section>
</template>

<script>
// 平均值
function average() {
	for (var i = 0, sum = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
	return sum / arguments.length;
}

export default {
	name: 'GroudImageGroup',
	props: {
		moreFixed: {
			type: Boolean
		},
		overflow: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			lists: []
		};
	},
	created() {
		this.updateLists();
	},
	methods: {
		updateLists() {
			this.lists = this.$slots.default || [];
		}
	},
	computed: {
		more() {
			var width = this.width + 'px',
				height = this.height + 'px';
			return {
				width: width,
				height: height,
				lineHeight: height
			};
		},
		width() {
			var widths = [];

			this.lists.forEach(item => {
				var width = item.componentOptions.propsData.width;
				widths.push(parseInt(width || 100));
			});

			return Math.ceil(average.apply(null, widths));
		},
		height() {
			var heights = [];

			this.lists.forEach(item => {
				var height = item.componentOptions.propsData.height;
				heights.push(parseInt(height || 100));
			});

			return Math.ceil(average.apply(null, heights));
		},
		group() {
			if (this.moreFixed) {
				return {
					paddingRight: this.width + 'px'
				};
			}
			return {};
		},
		container() {
			var container = {};

			if (this.overflow) {
				container.overflowX = this.overflow;
			}

			return container;
		},
		size() {
			var size = this.width;

			if (isNaN(size)) {
				return '32px';
			}

			if (size >= 100) {
				size = '32px';
			} else if (size >= 50) {
				size = '26px';
			} else {
				size = '24px';
			}

			return size;
		}
	}
};
</script>

<style>
</style>
