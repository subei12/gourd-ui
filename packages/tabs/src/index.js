function transform(target, prop, distance) {

    if (!target.transformProps) {
        target.transformProps = {};
    }

    var store = target.transformProps;

    if (arguments.length === 2) {
        if (store[prop]) {
            return store[prop];
        } else {
            return 0;
        }
    }

    if (!distance) {
        distance = 0;
    }


    store[prop] = distance;

    var props = [];

    var trans = {
        x: 0,
        y: 0
    }


    for (var k in store) {

        var propVal = store[k];

        switch (k) {
            case 'translate':
            case 'translateX':
                trans.x = propVal;
                break;
            case 'translateY':
                // props.push(k + '(' + propVal + 'px)');
                trans.y = propVal;
                break;
            case 'scale':
            case 'scaleX':
            case 'scaleY':
                props.push(k + '(' + propVal + ')');
                break;
            case 'rotate':
                props.push(k + '(' + propVal + 'deg)');
                break;
        }

    }

    props.push('translate3d(' + trans.x + 'px,' + trans.y + 'px,0px)');

    target.style.transform = props.join(' ');

}

// transform(tar, 'translateY', 100);
// transform(tar, 'scaleX', 2);
// transform(tar, 'rotate', 50);

// transform(test, 'translateX', 200)

// 获取
// console.log(transform(tar, 'scaleX'));



class TabNav {
    constructor(el, options = {}) {
        this.tabWarp = el.querySelector('.gourd-tabs--wrap');
        this.tabNav = this.tabWarp.querySelector('.gourd-tabs--nav');
        this.tabNavTabs = this.tabWarp.getElementsByClassName('gourd-tabs--tab');
        this.tabNavLine = this.tabWarp.querySelector('.gourd-tabs--nav--line');
        this.isMove = false;
        this.init(options);
    }

    init(options) {

        this.options = {
            end: function () { }
        };

        if (typeof options.end === 'function') {
            this.options.end = options.end;
        }

        var navOne = this.tabNavTabs[options.initIndex] || this.tabNavTabs[0];
        this.moveLine(navOne);
        this.tabWarp.style.height = this.tabNav.offsetHeight + 'px';
        this.tabNav.addEventListener('touchstart', this.start.bind(this));
        this.tabNav.addEventListener('touchmove', this.move.bind(this));
        this.tabNav.addEventListener('touchend', this.end.bind(this));
        this.tabNav.addEventListener('touchend', e => { this.isMove = false });

    }
    start(event) {
        this.start_x = event.changedTouches[0].clientX;

        this.orgin_left = transform(this.tabNav, 'translateX');

    }

    move(event) {

        if (this.tabNav.offsetWidth < this.tabWarp.offsetWidth) return;

        this.isMove = true;

        this.end_x = event.changedTouches[0].clientX;

        var moveX = this.end_x - this.start_x + this.orgin_left;

        var minLeftMove = this.tabWarp.offsetWidth - this.tabNav.offsetWidth;


        if (moveX > 0) {
            moveX = 0;
        } else if (moveX < minLeftMove) {
            moveX = minLeftMove;
        }

        transform(this.tabNav, 'translateX', moveX);

        event.preventDefault();
    }

    end(event) {

        var target = event.target;

        if (this.isMove || this.tabNav === target) return;

        var source = event.path.find(item => item.classList.contains('gourd-tabs--tab'));

        var index = Array.from(this.tabNavTabs).indexOf(source);

        this.moveLine(target);

        this.options.end(index);
    }
    moveLine(target) {

        if (target.classList.contains('gourd-tabs--tab')) {
            target = target.querySelector('span') || target;
        }

        var client = this.tabWarp.clientWidth / 2;

        var tabNavMoveX = target.offsetLeft - client;

        var minLeftMove = Math.abs(this.tabWarp.offsetWidth - this.tabNav.offsetWidth);

        if (this.tabNav.offsetWidth > this.tabWarp.offsetWidth) {

            if (tabNavMoveX < 0) {
                tabNavMoveX = 0;
            } else if (tabNavMoveX > minLeftMove) {
                tabNavMoveX = minLeftMove;
            }

            transform(this.tabNav, 'translateX', -tabNavMoveX);
        }

        this.tabNavLine.style.width = target.offsetWidth + 'px';

        // transform(this.tabNavLine, 'translateX', target.offsetLeft);

        this.tabNavLine.style.transform = 'translate3d(' + target.offsetLeft + 'px,0px,0px)';


        // this.tabNavLine.style.left = target.offsetLeft + 'px';
    }
}


class TabContent {
    constructor(el, options = {}) {
        this.tabContent = el.querySelector('.gourd-tabs--content');
        this.tabContentContainers = this.tabContent.getElementsByClassName('gourd-tabs--content--container');
        // this.TabNav = new TabNav('.gourd-tabs--wrap');
        this.tabContent.addEventListener('touchstart', this.start.bind(this));
        this.tabContent.addEventListener('touchmove', this.move.bind(this));
        this.tabContent.addEventListener('touchend', this.end.bind(this));
        this.init(options);
    }
    init(options) {
        var fun = function () { }
        this.options = {
            end: fun,
            move: fun,
            start: fun
        };

        if (typeof options.end === 'function') {
            this.options.end = options.end;
        }

        if (typeof options.move === 'function') {
            this.options.move = options.move;
        }

        if (typeof options.start === 'function') {
            this.options.start = options.start;
        }

        // 初始位置

        this.index = this.tabContentContainers[options.initIndex] ? options.initIndex : 0;

        this.moveContent(this.index);

        this.isHori = true;
        this.isFirst = true;
    }
    start(event) {

        this.tabContent.style.transition = 'none';

        this.start_x = event.changedTouches[0].clientX;

        this.start_Y = event.changedTouches[0].clientY;

        this.orgin_left = transform(this.tabContent, 'translateX');

        this.options.start(event);
    }
    move(event) {

        this.end_x = event.changedTouches[0].clientX;
        this.end_Y = event.changedTouches[0].clientY;

        // 当水平滚动的时候垂直不能滚动，垂直滚动水平不能滚动。
        this.X = Math.abs(this.end_x - this.start_x);
        this.Y = Math.abs(this.end_Y - this.start_Y);

        if (this.isFirst) {

            this.isFirst = false;

            if (this.X > this.Y) {
                this.isHori = true;
            }

            if (this.X < this.Y) {
                this.isHori = false;
            }
        }

        // 事件参数
        this.options.move(this.index);


        if (!this.isHori) return;

        var moveX = this.end_x - this.start_x + this.orgin_left;
        var minLeftMove = this.tabContent.parentNode.offsetWidth - this.tabContent.offsetWidth;

        if (moveX > 0) {
            moveX = 0;
        } else if (moveX < minLeftMove) {
            moveX = minLeftMove;
        }

        transform(this.tabContent, 'translateX', moveX);

        event.preventDefault();
    }

    end(event) {

        this.isFirst = true;
        if (!this.isHori) return;
        // this.tabContent.style.transition = 'all 0.5s';

        this.end_x = event.changedTouches[0].clientX;

        var moveX = Math.abs(this.end_x - this.start_x);

        if (moveX > 100) {

            if (this.end_x > this.start_x) {
                this.index--;
            }

            if (this.end_x < this.start_x) {
                this.index++;
            }
        }
        
        this.moveContent(this.index);

        this.options.end(this.index);
        // this.TabNav.moveLine(this.TabNav.tabNavTabs[this.index]);
    }
    moveContent(index) {

        this.index = index;

        this.tabContent.style.transition = 'all 0.5s';

        if (this.index < 0) {
            this.index = 0;
        } else if (this.index > this.tabContentContainers.length - 1) {
            this.index = this.tabContentContainers.length - 1;
        }
        // console.log(this.index);

        var x = this.tabContentContainers[this.index].offsetLeft;

        transform(this.tabContent, 'translateX', -x);
    }
}

// var s = new TabNav('.gourd-tabs--wrap');
// console.log(s);

// var tabC = new TabContent('.gourd-tabs--content');

export default {
    TabNav,
    TabContent
};


