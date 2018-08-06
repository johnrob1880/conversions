(function (root, factory) {
  if (typeof module === 'object') {
    module.exports = factory();
  } else {
    if (!root['conversions']) {
      root['conversions'] = {};
    }
    root['conversions']['digital'] = factory();
  }
}(this, function () {
  var bits, bytes;

  bits = {
    b: {
      name: {
        singular: 'Bit',
        plural: 'Bits'
      },
      to_anchor: 1
    },
    Kb: {
      name: {
        singular: 'Kilobit',
        plural: 'Kilobits'
      },
      to_anchor: 1024
    },
    Mb: {
      name: {
        singular: 'Megabit',
        plural: 'Megabits'
      },
      to_anchor: 1048576
    },
    Gb: {
      name: {
        singular: 'Gigabit',
        plural: 'Gigabits'
      },
      to_anchor: 1073741824
    },
    Tb: {
      name: {
        singular: 'Terabit',
        plural: 'Terabits'
      },
      to_anchor: 1099511627776
    }
  };

  bytes = {
    B: {
      name: {
        singular: 'Byte',
        plural: 'Bytes'
      },
      to_anchor: 1
    },
    KB: {
      name: {
        singular: 'Kilobyte',
        plural: 'Kilobytes'
      },
      to_anchor: 1024
    },
    MB: {
      name: {
        singular: 'Megabyte',
        plural: 'Megabytes'
      },
      to_anchor: 1048576
    },
    GB: {
      name: {
        singular: 'Gigabyte',
        plural: 'Gigabytes'
      },
      to_anchor: 1073741824
    },
    TB: {
      name: {
        singular: 'Terabyte',
        plural: 'Terabytes'
      },
      to_anchor: 1099511627776
    }
  };

  return {
    system: 'digital',
    bits: bits,
    bytes: bytes,
    _anchors: {
      bits: {
        unit: 'b',
        ratio: 1 / 8
      },
      bytes: {
        unit: 'B',
        ratio: 8
      }
    }
  };
}));