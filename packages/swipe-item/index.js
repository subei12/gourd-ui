import GourdSwipeItem from '../swipe/src/swipe-item.vue';

GourdSwipeItem.install = function(Vue){
	Vue.component(GourdSwipeItem.name,GourdSwipeItem);
}

export default GourdSwipeItem;