import GourdImage from './src/image.vue';

GourdImage.install = function(Vue){
	Vue.component(GourdImage.name,GourdImage);
}

export default GourdImage;