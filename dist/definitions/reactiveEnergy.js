(function (root, factory) {
    if (typeof module === 'object') {
        module.exports = factory();
    } else {
        if (!root['conversions']) {
            root['conversions'] = {};
        }
        root['conversions']['reactiveEnergy'] = factory();
    }
}(this, function () {
    var reactiveEnergy;

    reactiveEnergy = {
        VARh: {
            name: {
                singular: 'Volt-Ampere Reactive Hour',
                plural: 'Volt-Amperes Reactive Hour'
            },
            to_anchor: 1
        },
        mVARh: {
            name: {
                singular: 'Millivolt-Ampere Reactive Hour',
                plural: 'Millivolt-Amperes Reactive Hour'
            },
            to_anchor: .001
        },
        kVARh: {
            name: {
                singular: 'Kilovolt-Ampere Reactive Hour',
                plural: 'Kilovolt-Amperes Reactive Hour'
            },
            to_anchor: 1000
        },
        MVARh: {
            name: {
                singular: 'Megavolt-Ampere Reactive Hour',
                plural: 'Megavolt-Amperes Reactive Hour'
            },
            to_anchor: 1000000
        },
        GVARh: {
            name: {
                singular: 'Gigavolt-Ampere Reactive Hour',
                plural: 'Gigavolt-Amperes Reactive Hour'
            },
            to_anchor: 1000000000
        }
    };

    return {
        system: "reactiveEnergy",
        metric: reactiveEnergy,
        _anchors: {
            metric: {
                unit: 'VARh',
                ratio: 1
            }
        }
    };
}));