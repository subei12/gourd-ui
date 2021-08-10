import GourdTag from './src/main.vue';

GourdTag.install = function(Vue){
    Vue.component(GourdTag.name,GourdTag);
}

export default GourdTag;