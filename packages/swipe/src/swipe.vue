<template>
  <div class="gourd-swipe">
    <ul class="gourd-swipe--container" @touchstart="touchSlide" @touchend="touchend" @touchmove.prevent="touchmove" :style="{width:containerWidth,transform:transform,transitionDuration:duration}" @transitionend="transitionend">
      <slot></slot>
    </ul>
    <ol class="gourd-swipe--indicators">
      <li :key="index" v-for="(item,index) in items" :class="index===activeIndex?'gourd-swipe--indicators--active':''"></li>
    </ol>
  </div>
</template>

<script>
// 防抖
function antiShake(callback, delay) {
	return function() {
		if (callback.__setTimeoutKey) {
			clearTimeout(callback.__setTimeoutKey);
			callback.__setTimeoutKey = null;
		}

		const arg = arguments;

		callback.__setTimeoutKey = setTimeout(() => {
			callback.apply(this, arg);
			delete callback.__setTimeoutKey;
		}, delay);
	};
}

export default {
	name: 'GourdSwipe',
	data() {
		return {
			viewWidth: 0,
			items: [],
			activeIndex: 0,
			duration: '0.3s',
			fals: true,
			translate: 0,
			indicatorsWidth: 0,
			touch: {
				pageX: 0,
				slideDistance: 0,
				oldDistance: 0,
				fals: true
			},
			offsetMargin: 10,
			timerKey: null
		};
	},
	props: {
		autoplay: {
			type: Boolean,
			default: true
		},
		interval: {
			type: Number,
			default: 3000
		}
	},
	mounted() {
		this.setActiveItem(0);

		this.$nextTick(() => {
			this.viewChange();
		});

		window.addEventListener('resize', () => {
			this.viewChange();
		});
	},
	activated() {
		this.timerStart(this.interval);
	},
	deactivated() {
		this.timerEnd();
	},
	methods: {
		updateItems() {
			this.items = this.$children.filter(child => child.$options.name === 'GourdSwipeItem');
			this.timerStart(this.interval);
		},
		viewChange() {
			this.viewWidth = this.$el.offsetWidth;
			this.indicatorsWidth = this.$el.getElementsByClassName('gourd-swipe--indicators')[0].offsetWidth;
		},
		clidPosition(index) {
			const first = this.$children[0];

			const last = this.$children[this.$children.length - 1];

			first.translate = last.translate = 0;

			if (index === this.items.length - 1 && this.items.length >= 2) {
				first.translate = this.viewWidth * this.items.length + this.items.length * this.offsetMargin;
			} else if (0 === index && this.items.length >= 2) {
				last.translate = -this.viewWidth * this.items.length + -(this.items.length * this.offsetMargin);
			}
		},
		setActiveItem(index) {
			this.translate = -index * this.viewWidth + -((index + 1) * this.offsetMargin);

			this.activeIndex = index;

			this.duration = '0.3s';

			if (index >= this.items.length) {
				this.activeIndex = 0;
			} else if (index < 0) {
				this.activeIndex = this.items.length - 1;
			}
		},
		timerStart(time = 3000) {
			// console.log(this.items.length);
			this.timerEnd();

			if (this.autoplay && this.items.length >= 2) {
				this.timerKey = setInterval(() => {
					this.next();
				}, time);
			}
		},
		timerEnd() {
			if (this.timerKey) {
				clearInterval(this.timerKey);
				this.timerKey = null;
			}
		},
		next() {
			// 防流阀
			if (this.fals) {
				this.fals = false;
				this.setActiveItem(this.activeIndex + 1);
			}
		},
		prev() {
			// 防流阀
			if (this.fals) {
				this.fals = false;
				this.setActiveItem(this.activeIndex - 1);
			}
		},
		touchSlide(event) {
			this.touch.oldDistance = this.translate;

			this.touch.pageX = event.targetTouches[0].pageX;
		},
		touchmove(event) {
			// 防流阀
			if (this.touch.fals) {
				this.timerEnd();
				this.duration = '0s';
				this.touch.slideDistance = event.targetTouches[0].pageX - this.touch.pageX;
				this.translate = this.touch.oldDistance + this.touch.slideDistance;
			}
		},
		touchend() {
			if (this.touch.slideDistance !== 0) {
				this.touch.fals = false;
				this.timerEnd();
				this.timerStart(this.interval);
			}
			this.duration = '0.3s';
			if (this.touch.slideDistance > 150 && this.touch.slideDistance !== 0) {
				this.prev();
			} else if (this.touch.slideDistance < -150 && this.touch.slideDistance !== 0) {
				this.next();
			} else if (Math.abs(this.touch.slideDistance) > 0) {
				this.translate = this.touch.oldDistance;
			}

			this.touch.slideDistance = this.touch.pageX = this.touch.oldDistance = 0;
		},
		transitionend() {
			if (this.activeIndex === 0) {
				this.setActiveItem(0);
				// this.translate = 0;
				this.duration = '0s';
			} else if (this.activeIndex === this.items.length - 1) {
				this.setActiveItem(this.items.length - 1);
				// this.translate = -this.activeIndex * this.viewWidth + -((this.activeIndex + 1) * this.offsetMargin);
				this.duration = '0s';
			}

			this.clidPosition(this.activeIndex);

			setTimeout(() => {
				this.fals = this.touch.fals = true;
			}, 300);
		}
	},
	computed: {
		containerWidth() {
			return this.viewWidth * this.items.length + this.items.length * this.offsetMargin + 'px';
		},
		transform() {
			return `translateX(${this.translate}px)`;
		}
	}
};
</script>
