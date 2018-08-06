(function (root, factory) {
    if (typeof module === 'object') {
        module.exports = factory();
    } else {
        if (!root['conversions']) {
            root['conversions'] = {};
        }
        root['conversions']['partsPer'] = factory();
    }
}(this, function () {
    var metric, imperial;

    metric = {
        ppm: {
            name: {
                singular: 'Part-per Million',
                plural: 'Parts-per Million'
            },
            to_anchor: 1
        },
        ppb: {
            name: {
                singular: 'Part-per Billion',
                plural: 'Parts-per Billion'
            },
            to_anchor: .001
        },
        ppt: {
            name: {
                singular: 'Part-per Trillion',
                plural: 'Parts-per Trillion'
            },
            to_anchor: .000001
        },
        ppq: {
            name: {
                singular: 'Part-per Quadrillion',
                plural: 'Parts-per Quadrillion'
            },
            to_anchor: .000000001
        }
    };

    return {
        system: 'partsPer',
        metric: metric,
        imperial: {},
        _anchors: {
            metric: {
                unit: 'ppm',
                ratio: .000001
            }
        }
    };
}));