(function (root, factory) {
    if (typeof module === 'object') {
        module.exports = factory();
    } else {
        if (!root['conversions']) {
            root['conversions'] = {};
        }
        root['conversions']['force'] = factory();
    }
}(this, function () {
    var metric, imperial;

    metric = {
        N: {
            name: {
                singular: 'Newton',
                plural: 'Newtons'
            },
            to_anchor: 1
        },
        kN: {
            name: {
                singular: 'Kilonewton',
                plural: 'Kilonewtons'
            },
            to_anchor: 1000
        },
        lbf: {
            name: {
                singular: 'Pound-force',
                plural: 'Pound-forces'
            },
            to_anchor: 4.44822
        }
    };

    return {
        system: 'force',
        metric: metric,
        imperial: {},
        _anchors: {
            metric: {
                unit: 'N',
                ratio: 1
            }
        }
    };

}));