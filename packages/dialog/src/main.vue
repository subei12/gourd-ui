<template>
  <gourd-dialog-overlay v-model="show" @click="handlerOverlayClick">
    <div class="gourd-dialog" @click.stop>
      <header v-if="title || $slots.title" class="gourd-dialog--header" :class="{'gourd-dialog--header__center':titleCenter}">
        <slot name="title" v-if="$slots.title"></slot>
        <span v-else>{{title}}</span>
      </header>
      <section class="gourd-dialog--body">
        <slot></slot>
      </section>
      <footer class="gourd-dialog--footer" v-if="$slots.footer">
        <slot name="footer"></slot>
      </footer>
    </div>
  </gourd-dialog-overlay>
</template>

<script>
import Overlay from '../../overlay/index';

export default {
	name: 'GourdDialog',

	components: {
		GourdDialogOverlay: Overlay
	},

	model: {
		event: 'change',
		prop: 'show'
	},
	props: {
		titleCenter: {
			type: Boolean,
			default: true
		},
		title: {
			type: String,
			default: ''
		},
		closeOnClickOverlay: Boolean,
		show: Boolean
	},

	methods: {
		handlerOverlayClick(event) {
			if (this.closeOnClickOverlay) {
				this.$emit('change', false);
			}

			if (this.$listeners['overlay-click']) {
				this.$emit('overlay-click', event);
			}
		}
	}
};
</script>

<style>
</style>