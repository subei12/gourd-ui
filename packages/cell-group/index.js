import GourdCellGroup from '../cell/src/cell-group.vue';

GourdCellGroup.install = function(Vue){
    Vue.component(GourdCellGroup.name,GourdCellGroup);
}

export default GourdCellGroup;