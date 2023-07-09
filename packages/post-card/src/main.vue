<template>
  <div class="gourd-post-card line-bottom" @click="handledClick">
    <div class="gourd-post-card--left" v-if="avatar || call">
      <gourd-image v-if="avatar" width="36" round height="36" :src="avatar"></gourd-image>
      <span class="gourd-post-card--call" v-if="call">{{call}}</span>
    </div>
    <div class="gourd-post-card--right">
      <div class="gourd-post-card--top">
        <span class="gourd-post-card--name" :style="{color:unameColor}" v-if="uname">{{uname}}</span>

        <gourd-image width="16" round height="16" v-for="(item,index) in medal" :key="index" :src="item"></gourd-image>

        <span class="gourd-post-card--floor" v-if="floor">{{floor}}</span>
      </div>
      <div class="gourd-post-card--row" v-if="$slots.tag">
        <slot name="tag"></slot>
      </div>
      <div class="gourd-post-card--row" v-if="time">
        <span class="gourd-post-card--time">{{time}}</span>
      </div>
      <div class="gourd-post-card--row" v-if="$slots.default || text">
        <template v-if="$slots.default">
          <slot></slot>
        </template>
        <template v-else>{{text}}</template>
      </div>
    </div>
    <div class="gourd-post-card--bottom" >
      <slot name="post"></slot>
    </div>
  </div>
</template>

<script>
import GourdImage from '../../image/index';

export default {
	name: 'GourdPostCard',
	components: {
		GourdImage
	},
	props: {
		text: {
			type: String,
			default: ''
		},
		call: {
			type: String,
			default: ''
		},
		avatar: {
			type: String,
			default: ''
		},
		uname: {
			type: String,
			default: ''
		},
		floor: {
			type: [String, Number],
			default: ''
		},
		time: {
			type: [Date, String, Number],
			default: ''
		},
		medal: {
			type: Array,
			default: function() {
				return [];
			}
		},
		unameColor: {
			type: String,
			default: ''
		}
	},
	methods: {
		handledClick(event) {
			this.$emit('click', event);
		}
	}
};
</script>
