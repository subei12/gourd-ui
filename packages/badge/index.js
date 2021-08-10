import GourdBadge from './src/main.vue';

GourdBadge.install = function(Vue){
    Vue.component(GourdBadge.name,GourdBadge);
}

export default GourdBadge;