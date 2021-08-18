<template>
  <div class="gourd-title" @click="click" :class="{'line-bottom':BottomLine}">
    <div class="gourd-title--head">
      <div class="gourd-title--prefix" v-if="$slots['title-prefix']">
        <slot name="title-prefix"></slot>
      </div>
      <span v-text="title"></span>
    </div>
    <p class="gourd-title--describe" v-if="describe" v-text="describe"></p>

    <div class="gourd-title--cover" v-if="covers.length!==0">
      <gourd-image v-for="(item,index) in displayCovers" :key="index" fit="cover" :src="item"></gourd-image>
      <div class="gourd-title--cover--sum">
        <gourd-tag style="opacity:.6;">{{covers.length}}图</gourd-tag>
      </div>
    </div>

    <div class="gourd-title--footer" v-if="author||time">
      <div class="gourd-title--footer--left">
        <span class="gourd-title--author" v-text="author" v-if="author"></span>
        <span class="gourd-title--time" v-text="time" v-if="time"></span>
      </div>
      <div class="gourd-title--footer--right">
        <i class="gourd-title--icon gourd-title--see"></i>
        <span class="gourd-title--value" v-text="see"></span>
        <i class="gourd-title--icon gourd-title--info"></i>
        <span class="gourd-title--value" v-text="info"></span>

      </div>
    </div>

  </div>
</template>

<script>
export default {
	name: 'GourdTitle',
	props: {
		title: {
			type: String,
			default: ''
		},
		describe: {
			type: String,
			default: ''
		},
		covers: {
			type: Array,
			default: function() {
				return [];
			}
		},
		author: {
			type: String,
			default: ''
		},
		time: {
			type: [String, Number],
			default: ''
		},
		BottomLine: {
			type: Boolean,
			default: true
		},
		see: {
			type: [String, Number],
			default: 0
		},
		info: {
			type: [String, Number],
			default: 0
		},
		type: {
			type: String,
			default: 'notice'
		}
	},
	methods: {
		click(e) {
			this.$emit('click', e);
		}
	},
	computed: {
		displayCovers() {
			var displays = [];

			for (var i = 0; i < 3; i++) {
				if (!this.covers[i]) break;
				displays[i] = this.covers[i];
			}

			return displays;
		}
	}
};
</script>

<style>
</style>