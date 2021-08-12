import GourdList from './src/main.vue';

GourdList.install = function(Vue){
    Vue.component(GourdList.name,GourdList);
}

export default GourdList;