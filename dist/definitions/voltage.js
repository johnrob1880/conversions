(function (root, factory) {
    if (typeof module === 'object') {
        module.exports = factory();
    } else {
        if (!root['conversions']) {
            root['conversions'] = {};
        }
        root['conversions']['voltage'] = factory();
    }
}(this, function () {
    var voltage;

    voltage = {
        V: {
            name: {
                singular: 'Volt',
                plural: 'Volts'
            },
            to_anchor: 1
        },
        mV: {
            name: {
                singular: 'Millivolt',
                plural: 'Millivolts'
            },
            to_anchor: .001
        },
        kV: {
            name: {
                singular: 'Kilovolt',
                plural: 'Kilovolts'
            },
            to_anchor: 1000
        }
    };

    return {
        system: 'voltage',
        metric: voltage,
        _anchors: {
            metric: {
                unit: 'V',
                ratio: 1
            }
        }
    };
}));