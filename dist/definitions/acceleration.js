(function (root, factory) {
    if (typeof module === 'object') {
        module.exports = factory();
    } else {
        if (!root['conversions']) {
            root['conversions'] = {};
        }
        root['conversions']['acceleration'] = factory();
    }
}(this, function () {
    var metric, imperial;

    metric = {
        'g-force': {
            name: {
                singular: 'g-force',
                plural: 'g-forces'
            },
            to_anchor: 9.80665
        },
        'm/s2': {
            name: {
                singular: 'Metre per second squared',
                plural: 'Metres per second squared'
            },
            to_anchor: 1
        }
    };

    return {
        system: 'acceleration',
        metric: metric,
        imperial: {},
        _anchors: {
            metric: {
                unit: 'g-force',
                ratio: 1
            }
        }
    };

}));