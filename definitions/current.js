(function (root, factory) {
    if (typeof module === 'object') {
        module.exports = factory();
    } else {
        if (!root['conversions']) {
            root['conversions'] = {};
        }
        root['conversions']['current'] = factory();
    }
}(this, function () {
    var current;

    current = {
        A: {
            name: {
                singular: 'Ampere',
                plural: 'Amperes'
            },
            to_anchor: 1
        },
        mA: {
            name: {
                singular: 'Milliampere',
                plural: 'Milliamperes'
            },
            to_anchor: .001
        },
        kA: {
            name: {
                singular: 'Kiloampere',
                plural: 'Kiloamperes'
            },
            to_anchor: 1000
        }
    };

    return {
        system: 'current',
        metric: current,
        _anchors: {
            metric: {
                unit: 'A',
                ratio: 1
            }
        }
    };
}));