<template>

  <div class="gourd-cell-group">
    <h2 class="gourd-cell-group--title" v-if="title">
      <span v-text="title"></span>
    </h2>
    <div :class="[
    'gourd-cell-group--' + align
    ]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
	name: 'GourdCellGroup',
	props: {
		title: {
			type: String,
			default: ''
		},
		line: {
			type: String,
			default: ''
		},
		align: {
			validator(val) {
				return ['static','grid'].indexOf(val) >= 0;
			},
			default: 'static'
		}
	}
};
</script>