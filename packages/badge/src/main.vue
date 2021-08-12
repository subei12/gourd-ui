<template>
  <div class="gourd-badge" :class="{'gourd-badge--small':small,'gourd-badge--square':square}" v-text="max ? valueMax : value"></div>
</template>

<script>
export default {
	name: 'GourdBadge',
	props: {
		value: {
			type: [String, Number],
			default: 0
		},
		max: {
			type: Number,
			default: 0
		},
		small: Boolean,
		square: Boolean
	},

	computed: {
		valueMax() {
			return this.value >= this.max ? `${this.max}+` : this.value;
		}
	}
};
</script>