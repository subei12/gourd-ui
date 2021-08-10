import GourdTabbar from './src/tabbar.vue';

GourdTabbar.install = function(Vue){
    Vue.component(GourdTabbar.name,GourdTabbar);
}

export default GourdTabbar;