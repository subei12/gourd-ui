import GourdButton from './src/button.vue';

GourdButton.install = function(Vue){
    Vue.component(GourdButton.name,GourdButton);
}

export default GourdButton;