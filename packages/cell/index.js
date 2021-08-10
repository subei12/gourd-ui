import GourdCell from './src/cell.vue';

GourdCell.install = function(Vue){
    Vue.component(GourdCell.name,GourdCell);
}

export default GourdCell;