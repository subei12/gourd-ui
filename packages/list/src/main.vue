<template>
  <div class="gourd-list" ref="list" @scroll="listScroll" :style="listStyle">
    <div class="gourd-list--content" ref="content">
      <slot>
        <div class="gourd-list--default">
          <gourd-list-loading size="24"></gourd-list-loading>
        </div>
      </slot>
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
		event: 'change',
		prop: 'value'
	},
	props: {
		value: Boolean,
		height: {
			type: [String, Number],
			default: ''
		},
		scroll: Boolean
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

			var clientHeight = Math.floor(this.$refs.list.clientHeight) + 2;

			// console.log(scrollTop, scrollHeight, clientHeight);

			if (scrollTop >= scrollHeight - clientHeight && this.first && !this.value) {
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
		},
		listStyle() {
			var height = parseInt(this.height);

			return {
				height: height + 'px',
				overflow: this.scroll ? 'visible' : ''
			};
		}
	}
};
</script>
