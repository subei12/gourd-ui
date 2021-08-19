<template>
  <div class="gourd-list" ref="list" @scroll="listScroll" @touchstart="start" @touchmove="move" @touchend="end" :style="listStyle">
    <div class="gourd-list--content" ref="content">
      <slot>
        <div class="gourd-list--default">
          <gourd-list-loading size="24"></gourd-list-loading>
        </div>
      </slot>
      <div class="gourd-list--loading" :style="loading">
        <template v-if="finished">
          <span>{{FinishedText}}</span>
        </template>
        <template v-else>
          <gourd-list-loading size="16" smooth></gourd-list-loading>
          <span>{{LoadingText}}</span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from '../../loading/index';

export default {
	name: 'GourdList',
	components: {
		'gourd-list-loading': Loading
	},
	model: {
		event: 'change',
		prop: 'value'
	},
	props: {
		value: Boolean,
		height: {
			type: [String, Number],
			default: ''
		},
		// 是否全部加载完成
		finished: Boolean,
		DisableScroll: Boolean,
		LoadingText: {
			type: String,
			default: '查看更多'
		},
		FinishedText: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			first: true,
			scrollTop: 0,
			scrollLeft: 0,
			timer: '',
			moveStart_Y: 0,
			firstMove: true,
			scrolling: false
		};
	},
	activated() {
		this.$refs.list.scroll(this.scrollLeft, this.scrollTop);
	},
	methods: {
		scroll(left = 0, top = 0) {
			this.$refs.list.scroll(left, top);
		},
		start(e) {
			this.moveStart_Y = e.changedTouches[0].clientY;
			// 兼容下拉刷新组件
			if (this.$parent.$options.name === 'GourdPullRefresh') {
				this.$parent.disableds = true;
			}
		},
		move(e) {
			if (this.firstMove) {
				this.firstMove = false;
				this.moveStart_Y = e.changedTouches[0].clientY - this.moveStart_Y;

				// 兼容下拉刷新组件
				if (this.$parent.$options.name === 'GourdPullRefresh') {
					if (this.moveStart_Y > 0 && this.$refs.list.scrollTop === 0) {
						this.$parent.disableds = false;
						// e.preventDefault();
						this.scrolling = true;
					}
				}
			}
		},
		end(e) {
			this.firstMove = true;
			this.scrolling = false;
		},
		listScroll(e) {
			// 防抖
			if (this.timer) {
				clearTimeout(this.timer);
			}

			this.timer = setTimeout(() => {
				this.scrollTop = e.target.scrollTop;
				this.scrollLeft = e.target.scrollLeft;
			}, 15);

			var scrollTop = Math.floor(this.$refs.list.scrollTop);

			var scrollHeight = Math.floor(this.$refs.list.scrollHeight);

			var clientHeight = Math.floor(this.$refs.list.clientHeight) + 2;

			// console.log(scrollTop, scrollHeight, clientHeight);

			if (scrollTop >= scrollHeight - clientHeight && !this.finished && this.first && !this.value) {
				this.$emit('change', true);

				this.$nextTick(() => {
					this.$emit('load');
				});
				this.first = false;
			}
		}
	},
	watch: {
		value(val) {
			if (!val) {
				this.first = true;
			}
		}
	},
	computed: {
		loading() {
			// var show = 'hidden';

			if (this.finished && this.FinishedText === '') {
				return {
					display: 'none'
				};
			}

			return {
				visibility: this.value || this.finished ? 'visible' : 'hidden'
			};
		},
		listStyle() {
			var height = isNaN(this.height) ? this.height : parseInt(this.height) + 'px';

			return {
				height: height,
				overflow: this.DisableScroll || this.scrolling ? 'hidden' : ''
			};
		}
	}
};
</script>
