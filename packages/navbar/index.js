import GourdNavBar from './src/main.vue';

GourdNavBar.install = function(Vue){
    Vue.component(GourdNavBar.name,GourdNavBar);
}

export default GourdNavBar;