import GourdImageGroup from '../image/src/image-group.vue';

GourdImageGroup.install = function(Vue){
	Vue.component(GourdImageGroup.name,GourdImageGroup);
}

export default GourdImageGroup;