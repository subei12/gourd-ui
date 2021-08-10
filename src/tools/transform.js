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


    for (var k in store) {

        var propVal = store[k];

        switch (k) {
            case 'translate':
            case 'translateX':
            case 'translateY':
                props.push(k + '(' + propVal + 'px)');
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

    target.style.transform = props.join(' ');
}

export default transform;