import GourdTab from '../tabs/src/tab.vue';

GourdTab.install = function(Vue){
    Vue.component(GourdTab.name,GourdTab);
}

export default GourdTab;