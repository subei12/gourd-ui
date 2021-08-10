<template>
  <div class="gourd-pull-refresh">
    <div class="gourd-pull-refresh--wrap" :style="wrapStyle" @touchstart="start" @touchmove="move" @touchend="end" ref="wrap">

      <pull-refresh-head :type="type"></pull-refresh-head>

      <slot></slot>
    </div>
  </div>
</template>

<script>
import transform from '../../../src/tools/transform';

import PullRefreshHead from './pull-refresh--head';

import Vue from 'vue';

export default {
	name: 'GourdPullRefresh',
	model: {
		event: 'change'
	},
	components: {
		PullRefreshHead
	},
	props: {
		PullingText: {
			type: String,
			default: '下拉刷新'
		},
		LoosingText: {
			type: String,
			default: '释放更新'
		},
		PullDistance: {
			type: Number,
			default: 50
		},
		HeadHeight: {
			type: Number,
			default: 50
		},
		LoadingText: {
			type: String,
			default: '加载中'
		},
		SuccessText: {
			type: String,
			default: ''
		},
		value: Boolean,
		disabled: Boolean,
		AnimationDuration: {
			type: [String, Number],
			default: 300
		},
		SuccessDuration: {
			type: Number,
			default: 500
		}
	},

	data() {
		return {
			start_Y: 0,
			flag: true,
			text: '',
			isLoading: false,
			timer: '',
			type: 1
		};
	},
	mounted() {
		this.text = this.PullingText;
	},
	methods: {
		start(event) {
			if (this.isLoading || this.disabled) return;
			this.flag = false;
			this.start_Y = event.changedTouches[0].clientY;
		},
		move(event) {
			if (this.isLoading || this.disabled) return;

			var end_Y = event.changedTouches[0].clientY;

			var moveDis = (end_Y - this.start_Y) / 2;

			if (moveDis > 0) {
				if (moveDis > this.PullDistance) {
					this.type = 2;
				} else {
					this.type = 1;
				}

				transform(this.$refs.wrap, 'translateY', moveDis);
			}

			// event.preventDefault();
		},
		end(event) {
			this.flag = true;

			if (this.isLoading || this.disabled) return;

			var end_Y = event.changedTouches[0].clientY;

			var moveDis = (end_Y - this.start_Y) / 2;

			if (moveDis > this.PullDistance) {
				this.type = 3;
				this.isLoading = true;
				this.$emit('change', this.isLoading);

				// this.$emit('refresh');

				transform(this.$refs.wrap, 'translateY', this.HeadHeight);
			} else {
				transform(this.$refs.wrap, 'translateY', 0);
			}
		},
		duration() {
			if (this.timer) {
				clearTimeout(this.timer);
			}
			this.timer = setTimeout(() => {
				transform(this.$refs.wrap, 'translateY', 0);
			}, this.SuccessDuration);
		}
	},
	watch: {
		isLoading(val) {
			if (val) {
				this.type = 3;
				this.$nextTick(() => {
					this.$emit('refresh');
				});

				transform(this.$refs.wrap, 'translateY', this.HeadHeight);
			} else {
				if (this.SuccessText) {
					this.type = 4;
					this.duration();
				} else {
					if (this.disabled) {
						this.type = -1;
					} else {
						this.type = 1;
					}
					transform(this.$refs.wrap, 'translateY', 0);
				}
			}
		},
		value(val) {
			this.isLoading = val;
		}
	},
	computed: {
		wrapStyle() {
			var duration = isNaN(this.AnimationDuration) ? this.AnimationDuration : this.AnimationDuration + 'ms';
			if (this.flag) {
				return {
					transitionDuration: duration
				};
			}
		}
	}
};
</script>