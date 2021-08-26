<template>
  <div class="gourd-cell" @click="handleClick" :class="[
    size ?  'gourd-cell--'+ size : '',
    {
        'gourd-cell--clickable':link
    }]">
    <i :class="icon" v-if="icon"></i>

    <div class="gourd-cell--prefix" v-if="$slots.prefix">
      <slot name="prefix"></slot>
    </div>

    <div class="gourd-cell--title" v-text="title" v-if="title"></div>
    <div class="gourd-cell--suffix" v-if="$slots.suffix">
      <slot name="suffix"></slot>
    </div>

    <i class="el-icon-arrow-right" v-if="link && arrow"></i>
  </div>
</template>

<script>
export default {
	name: 'GourdCell',
	props: {
		title: {
			type: String,
			default: ''
		},
		icon: {
			type: String,
			default: ''
		},
		size: {
			type: String,
			default: ''
		},
		link: Boolean,
		arrow: {
			type: Boolean,
			default: true
		},
		to: {
			type: [String, Object],
			default: ''
		}
	},
	methods: {
		handleClick(event) {
			setTimeout(() => {
				if (this.to) {
					this.$router.push(this.to);
				}

			});

			this.$emit('click', event);
		}
	}
};
</script>
