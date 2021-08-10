import GourdTitle from './src/title.vue';

GourdTitle.install = function(Vue){
    Vue.component(GourdTitle.name,GourdTitle);
}

export default GourdTitle;