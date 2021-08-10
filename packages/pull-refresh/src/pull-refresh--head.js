import { Loading } from 'vant';

export default {
    name: 'PullRefreshHead',
    props: ['type'],
    render(h) {

        var children = '';
        
        // 下拉和释放
        if (this.type === 1 || this.type === 2) {
            let text = this.type == 1 ? this.$parent.PullingText : this.$parent.LoosingText;

            if (this.type === 1 && this.$parent.$slots.pulling) {
                children = this.$parent.$slots.pulling;
            } else if (this.type === 2 && this.$parent.$slots.loosing) {
                children = this.$parent.$slots.loosing;
            } else {
                children = h('div', [
                    h('span', {
                        class: ['gourd-pull-refresh--arrow'],
                        domProps: {
                            innerHTML: '&darr;'
                        },
                        style: this.arrow
                    }),
                    text
                ]);
            }

        } else if (this.type === 3) {

            if (this.$parent.$slots.loading) {
                children = this.$parent.$slots.loading;
            } else {
                children = h('div', [
                    h(Loading, {
                        props: {
                            size: '16px',
                            type: 'spinner'
                        },
                        style: {
                            display: 'inline-block'
                        }
                    }),
                    this.$parent.LoadingText
                ]);
            }

        } else if (this.type === 4) {
            if (this.$parent.$slots.success) {
                children = this.$parent.$slots.success;
            } else {
                children = h('span', this.$parent.SuccessText);
            }
        }

        return h('div', { class: ['gourd-pull-refresh--head'] }, [children]);
    },
    computed: {
        arrow() {
            if (this.type === 2) {
                return {
                    transform: 'rotate(-180deg)'
                }
            }
        }
    }
}