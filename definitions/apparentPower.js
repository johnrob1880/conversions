(function (root, factory) {
    if (typeof module === 'object') {
        module.exports = factory();
    } else {
        if (!root['conversions']) {
            root['conversions'] = {};
        }
        root['conversions']['apparentPower'] = factory();
    }
}(this, function () {
    var apparentPower;

    apparentPower = {
        VA: {
            name: {
                singular: 'Volt-Ampere',
                plural: 'Volt-Amperes'
            },
            to_anchor: 1
        },
        mVA: {
            name: {
                singular: 'Millivolt-Ampere',
                plural: 'Millivolt-Amperes'
            },
            to_anchor: .001
        },
        kVA: {
            name: {
                singular: 'Kilovolt-Ampere',
                plural: 'Kilovolt-Amperes'
            },
            to_anchor: 1000
        },
        MVA: {
            name: {
                singular: 'Megavolt-Ampere',
                plural: 'Megavolt-Amperes'
            },
            to_anchor: 1000000
        },
        GVA: {
            name: {
                singular: 'Gigavolt-Ampere',
                plural: 'Gigavolt-Amperes'
            },
            to_anchor: 1000000000
        }
    };

    return {
        system: 'apparentPower',
        metric: apparentPower,
        _anchors: {
            metric: {
                unit: 'VA',
                ratio: 1
            }
        }
    };
}));