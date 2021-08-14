import GourdPostCard from './src/main.vue';

GourdPostCard.install = function (Vue) {
    Vue.component(GourdPostCard.name, GourdPostCard);
}

export default GourdPostCard;