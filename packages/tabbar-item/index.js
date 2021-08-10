import GourdTabbarItem from '../tabbar/src/tabbar-item.vue';

GourdTabbarItem.install = function(Vue){
	Vue.component(GourdTabbarItem.name,GourdTabbarItem);
}

export default GourdTabbarItem;