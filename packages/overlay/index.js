import GourdOverlay from './src/main.vue';

GourdOverlay.install = function(Vue){
    Vue.component(GourdOverlay.name,GourdOverlay);
}

export default GourdOverlay;