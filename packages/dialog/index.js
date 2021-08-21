import GourdDialog from './src/main.vue';

GourdDialog.install = function(Vue){
    Vue.component(GourdDialog.name,GourdDialog);
}

export default GourdDialog;