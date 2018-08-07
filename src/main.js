const keys = Object.keys;
import { each } from './helpers';

class Converter {
	constructor(numerator, denominator) {
		if (denominator)
			this.val = numerator / denominator
		else
			this.val = numerator
		this.measures = {}
	}
	value(numerator, denominator) {
		if (denominator)
			this.val = numerator / denominator
		else
			this.val = numerator

		this.destination = null;
		this.origin = null;

		return this;
	}
	/**
	 * Lets the converter know the source unit abbreviation
	 */
	from(from) {
		if (this.destination)
			throw new Error('.from must be called before .to')
		this.origin = this.getUnit(from)
		if (!this.origin) {
			this.throwUnsupportedUnitError(from)
		}
		return this
	}
	/**
	 * Converts the unit and returns the value
	 */
	to(to, precision = null) {
		if (!this.origin)
			throw new Error('.to must be called after .from')
		this.destination = this.getUnit(to)
		var result, transform
		if (!this.destination) {
			this.throwUnsupportedUnitError(to)
		}
		// Don't change the value if origin and destination are the same
		if (this.origin.abbr === this.destination.abbr) {
			return this.val
		}
		// You can't go from liquid to mass, for example
		if (this.destination.measure != this.origin.measure) {
			throw new Error('Cannot convert incompatible measures of ' +
				this.destination.measure + ' and ' + this.origin.measure)
		}
		/**
		 * Convert from the source value to its anchor inside the system
		 */
		result = this.val * this.origin.unit.to_anchor
		/**
		 * For some changes it's a simple shift (C to K)
		 * So we'll add it when convering into the unit (later)
		 * and subtract it when converting from the unit
		 */
		if (this.origin.unit.anchor_shift) {
			result -= this.origin.unit.anchor_shift
		}
		/**
		 * Convert from one system to another through the anchor ratio. Some conversions
		 * aren't ratio based or require more than a simple shift. We can provide a custom
		 * transform here to provide the direct result
		 */
		if (this.origin.system != this.destination.system) {
			transform = this.measures[this.origin.measure]._anchors[this.origin.system].transform
			if (typeof transform === 'function') {
				result = transform(result)
			} else {
				result *= this.measures[this.origin.measure]._anchors[this.origin.system].ratio
			}
		}
		/**
		 * This shift has to be done after the system conversion business
		 */
		if (this.destination.unit.anchor_shift) {
			result += this.destination.unit.anchor_shift
		}
		/**
		 * Convert to another unit inside the destination system
		 */
		
		let tempResult = result / this.destination.unit.to_anchor

		if (typeof precision === 'undefined' || precision == null) {
			return tempResult
		}

		return parseFloat(parseFloat(tempResult).toFixed(parseInt(precision)))
	}
	/**
	 * Finds the unit
	 */
	getUnit(abbr) {
		var found
		each(this.measures, (systems, measure) => {
			each(systems, (units, system) => {
				if (system == '_anchors' || system == "system")
					return false
				each(units, (unit, testAbbr) => {
					if (testAbbr == abbr) {
						found = {
							abbr: abbr,
							measure: measure,
							system: system,
							unit: unit
						}
						return false
					}
				})
				if (found)
					return false
			})
			if (found)
				return false
		})
		return found
	}
	/**
	 * An alias for getUnit
	 */
	describe(abbr) {
		var resp = this.getUnit(abbr)
		var desc = null
		try {
			desc = describe(resp)
		} catch (err) {
			this.throwUnsupportedUnitError(abbr)
		}
		return desc
	}
	throwUnsupportedUnitError(what) {
		var validUnits = []

		each(this.measures, (systems, measure) => {
			each(systems, (units, system) => {
				if (system == '_anchors' || system == 'system')
					return false
				validUnits = validUnits.concat(keys(units))
			})
		})
		throw new Error('Unsupported unit ' + what + ', use one of: ' + validUnits.join(', '))
	}
	list(measure) {
		var list = [];

		each(this.measures, (systems, testMeasure) => {
			if (measure && measure !== testMeasure)
				return;

			each(systems, (units, system) => {
				if (system == '_anchors' || system == 'system')
					return false;

				each(units, (unit, abbr) => {
					list = list.concat(describe({
						abbr: abbr,
						measure: testMeasure,
						system: system,
						unit: unit
					}));
				});
			});
		});

		return list;
	}
	possibilities(measure) {
		var possibilities = [];
		if (!this.origin && !measure) {
			each(keys(this.measures), (measure) => {
				each(this.measures[measure], (units, system) => {
					if (system == '_anchors' || system == 'system')
						return false;

					possibilities = possibilities.concat(keys(units));
				});
			});
		} else {
			measure = measure || this.origin.measure;
			each(this.measures[measure], (units, system) => {
				if (system == '_anchors' || system == 'system')
					return false;

				possibilities = possibilities.concat(keys(units));
			});
		}

		return possibilities;
	}
	listMeasures() {
		return keys(this.measures)
	}
	use() {
		let args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
		each(args, (arg) => {
			if (arg && arg.system) {
				this.measures[arg.system] = arg;
			}
		})
		return this
	}
}

var describe = function (resp) {
	return {
		abbr: resp.abbr,
		measure: resp.measure,
		system: resp.system,
		singular: resp.unit.name.singular,
		plural: resp.unit.name.plural
	}
}


export default function convert(value) {

	return new Converter(value);

}