<template>
  <div class="gourd-tabs" ref="tabs">
    <div class="gourd-tabs--wrap" :style="wrapStyle" ref="wrap">
      <tabs-nav :tab-items="items" :tab-content="tabContent" :color="color" ref="nav"></tabs-nav>
    </div>

    <!-- 占位元素 -->
    <div class="gourd-tabs--occupy" v-show="occupy" :style="occupyStyle"></div>

    <div class="gourd-tabs--content" :style="content">
      <slot></slot>
    </div>

  </div>
</template>

<script>
import TabsNav from './tabs-nav';

import tools from './index';

var { TabNav, TabContent } = tools;

export default {
	name: 'GourdTabs',
	components: {
		TabsNav
	},
	model: {
		prop: 'value',
		event: 'async'
	},
	props: {
		color: {
			type: String,
			default: '#31d075'
		},
		// 吸顶
		ceiling: Boolean,
		// 吸顶距离
		distance: {
			type: Number,
			default: 0
		},
		value: [Number, String]
	},
	data() {
		return {
			titleTexts: [],
			tabNav: {},
			tabContent: {},
			children: [],
			top: 0,
			offsetTop: 0,
			occupy: false,
			startTop: 0,
			index: 0
		};
	},
	methods: {
		updateTitle(text) {
			this.titleTexts.push(text);
		},
		tabContentEnd(index = 0) {
			this.index = index;
			this.tabNav.moveLine(this.tabNav.tabNavTabs[index]);
		},
		tabNavEnd(index) {
			this.index = index;
			this.tabContent.moveContent(index);
		},
		tabContentMove(event, options) {
			this.$emit('tab-content-move', event, options);
		},
		tabContentStart(event) {
			this.$emit('tab-content-start', event);
		}
	},
	mounted() {
		// console.log(this.$children);
		this.children = this.$children;
		// console.log(this.$children);

		this.$nextTick(() => {
			this.tabNav = new TabNav(this.$el, {
				end: this.tabNavEnd,
				initIndex: this.value
			});
			this.tabContent = new TabContent(this.$el, {
				move: this.tabContentMove,
				end: this.tabContentEnd,
				start: this.tabContentStart,
				initIndex: this.value
			});

			this.offsetTop = this.$refs.wrap.offsetTop;
		});

		if (this.ceiling) {
			window.addEventListener('scroll', () => {
				this.top = window.pageYOffset;
			});
		}
	},
	watch: {
		index: {
			handler() {
				this.$emit('async', this.index);
				this.$emit('change', this.index);
			}
		}
	},
	computed: {
		content() {
			var width = this.items.length * 100;

			return {
				width: width + '%'
			};
		},
		tabTitle() {
			// console.log(this.items);
		},
		items() {
			var items = this.children.filter(function(item) {
				return item.$options.name === 'GourdTab';
			});

			return items;
		},
		disY() {
			return this.offsetTop - this.distance;
		},
		wrapStyle() {
			var wrap = {};

			if (this.top > this.disY && this.top !== 0 && this.ceiling) {
				wrap.position = 'fixed';
				wrap.top = this.distance + 'px';
				wrap.left = '0';
				wrap.right = '0';
				wrap.width = this.$refs.tabs && this.$refs.tabs.offsetWidth + 'px';
				wrap.margin = 'auto';
			}

			return wrap;
		},
		occupyStyle() {
			var occupy = {};

			if (this.top > this.disY && this.top !== 0 && this.ceiling) {
				occupy.height = this.$refs.wrap.offsetHeight + 'px';
				this.occupy = true;
			} else {
				this.occupy = false;
			}
			return occupy;
		}
	}
};
</script>

<style>
</style>