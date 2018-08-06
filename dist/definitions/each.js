(function (root, factory) {
    if (typeof module === 'object') {
        module.exports = factory();
    } else {
        if (!root['conversions']) {
            root['conversions'] = {};
        }
        root['conversions']['each'] = factory();
    }
}(this, function () {
    var metric, imperial;

    metric = {
        ea: {
            name: {
                singular: 'Each',
                plural: 'Each'
            },
            to_anchor: 1
        },
        dz: {
            name: {
                singular: 'Dozen',
                plural: 'Dozens'
            },
            to_anchor: 12
        }
    };

    return {
        system: 'each',
        metric: metric,
        imperial: {},
        _anchors: {
            metric: {
                unit: 'ea',
                ratio: 1
            }
        }
    };
}));