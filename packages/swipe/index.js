import GourdSwipe from './src/swipe.vue';

GourdSwipe.install = function(Vue){
	Vue.component(GourdSwipe.name,GourdSwipe);
}

export default GourdSwipe;