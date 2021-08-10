<template>
  <button class="gourd-button" :disabled="disabled" :class="[
    type ? 'gourd-button--' + type : '',
    plain ? 'gourd-button--plain' : '',
    disabled ? 'gourd-button--disabled' : '',
    size ? 'gourd-button--' + size : '',
    {
      'is-circle':circle,
      'is-round':round,
      'is-square':square,
      'is-block':block
    }
  ]" @click="handleClick">

    <i :class="icon" v-if="icon"></i>

    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
	name: 'GourdButton',
	props: {
		type: {
			type: String,
			default: 'default'
		},
		icon: {
			type: String,
			default: ''
		},
		size: {
			type: String,
			default: ''
		},
		circle: Boolean,
		round: Boolean,
		square: Boolean,
		block: Boolean,
		plain: Boolean,
		disabled: Boolean
	},
	methods: {
		handleClick(evnt) {
			this.$emit('click', evnt);
		}
	}
};
</script>
