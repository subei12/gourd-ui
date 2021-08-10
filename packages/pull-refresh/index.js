import GourdPullRefresh from './src/main.vue';

GourdPullRefresh.install = function(Vue){
    Vue.component(GourdPullRefresh.name,GourdPullRefresh);
}

export default GourdPullRefresh;