<template>
    <div class="gourd-badge" v-text="max ? valueMax : value"></div>
</template>

<script>
export default {
    name:'GourdBadge',
    props:{
        value:{
            type:[String,Number],
            default:0
        },
        max:{
            type:Number,
            default:0
        }
    },

    computed:{
        valueMax(){
            return this.value >= this.max ? `${this.max}+`:this.value;
        }
    }
}
</script>