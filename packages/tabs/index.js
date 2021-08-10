import GourdTabs from './src/tabs.vue';

GourdTabs.install = function (Vue) {
    Vue.component(GourdTabs.name, GourdTabs);
}

export default GourdTabs;