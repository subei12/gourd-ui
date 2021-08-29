
export default {
    name: 'TabsNav',
    props: ['TabItems', 'TabContent','color'],
    render(h) {

        var node = this.TabItems.map((item, index) => {

            var title = item.$slots.title || item.title;

            return h('div', {
                class: ['gourd-tabs--tab'],
                key: index,
                attrs: {
                    index: index
                },
                style: {
                    color: this.TabContent.index === index ? this.color : ''
                }
            }, [h('span', title)]);
        });

        node.push(h('div', { class: ['gourd-tabs--nav--line'], key: 'line' }));

        return h('div', { class: ['gourd-tabs--nav'], style: this.navStyle }, node)
    },
    computed: {
        navStyle() {
            var navStyle = {};

            if (this.TabItems.length < 5) {
                navStyle.width = '100%';
            }
            return navStyle;
        }
    }
}