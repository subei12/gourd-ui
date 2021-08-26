<template>
  <div class="gourd-image" :style="Width" @click="handledClick">
    <div class="gourd-image--error" v-if="isError" :class="{'gourd-image--round':round}" :style="Height">
      <i class="iconfont icon-photo-fail" :style="{'fontSize':size}"></i>
    </div>

    <div class="gourd-image--img" v-else :class="{'gourd-image--round':round}" :style="Height">
      <img :src="src" :alt="alt" @error="err" @load="load" :style="{'objectFit':fit}">
    </div>

    <div class="gourd-image--text" v-if="text" :style="Width">
      <span>{{text}}</span>
    </div>

  </div>
</template>

<script>
export default {
	name: 'GourdImage',
	props: {
		src: {
			type: String,
			default: ''
		},
		alt: {
			type: String,
			default: '图片加载失败'
		},
		text: {
			type: [String, Number],
			default: ''
		},
		width: {
			type: [String, Number],
			default: ''
		},
		height: {
			type: [String, Number],
			default: ''
		},
		fit: {
			type: String,
			default: ''
		},
		round: {
			type: Boolean
		}
	},
	data() {
		return {
			isError: false
		};
	},
	methods: {
		err() {
			this.isError = true;
			this.$emit('error');
		},
		load() {
			this.$emit('load');
		},
		handledClick(event) {
			this.$emit('click', event);
		}
	},
	computed: {
		Height() {
			return {
				height: isNaN(this.height) ? this.height : this.height + 'px'
			};
		},
		Width() {
			return {
				width: isNaN(this.width) ? this.width : this.width + 'px'
			};
		},
		size() {
			var size = parseInt(this.width);

			if (isNaN(size)) {
				return '32px';
			}

			if (size >= 100) {
				size = '32px';
			} else if (size >= 50) {
				size = '16px';
			} else {
				size = '12px';
			}

			return size;
		}
	}
};
</script>

<style>
</style>