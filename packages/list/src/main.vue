<template>
  <div class="gourd-list" ref="list" @scroll="listScroll">
    <div class="gourd-list--content" ref="content">
      <slot></slot>
      <div class="gourd-list--loading" :style="loading">
        <gourd-list-loading size="16" smooth></gourd-list-loading>
        <span>查看更多</span>
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
		event: 'change'
	},
	props: {
		value: Boolean
	},
	data() {
		return {
			first: true
		};
	},
	methods: {
		listScroll(e) {
			var scrollTop = Math.floor(this.$refs.list.scrollTop);

			var scrollHeight = Math.floor(this.$refs.list.scrollHeight);

			var clientHeight = Math.floor(this.$refs.list.clientHeight);

			if (scrollHeight - clientHeight === scrollTop && this.first && !this.value) {
				this.$emit('change', true);
				this.$nextTick(() => {
					this.$emit('load');
				});
				this.first = false;
			}

			if (this.$parent.$options.name === 'GourdPullRefresh') {
				if (scrollTop === 0) {
					this.$parent.disableds = false;
				} else {
					this.$parent.disableds = true;
				}
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
			return {
				visibility: this.value ? 'visible' : 'hidden'
			};
		}
	}
};
</script>
