import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';
import mkdirp from 'mkdirp';
import fs from 'fs';
import path from 'path';

const copyPlugin = function (options) {
	return {
		ongenerate() {
			const targetDir = path.dirname(options.target);
			
			if (!fs.existsSync(targetDir)) {
				mkdirp.sync(targetDir);
			}

			fs.writeFileSync(options.target, fs.readFileSync(options.src));
		}
	}
}

export default [
	// browser-friendly UMD build
	{
		input: 'src/main.js',
		output: {
			name: 'convert',
			file: pkg.browser,
			format: 'umd'
		},
		plugins: [
			resolve(), // so Rollup can find `ms`
			commonjs(), // so Rollup can convert `ms` to an ES module
			copyPlugin({target: './dist/definitions/acceleration.js', src: './definitions/acceleration.js'}),
			copyPlugin({target: './dist/definitions/angle.js', src: './definitions/angle.js'}),
			copyPlugin({target: './dist/definitions/apparentPower.js', src: './definitions/apparentPower.js'}),
			copyPlugin({target: './dist/definitions/area.js', src: './definitions/area.js'}),
			copyPlugin({target: './dist/definitions/charge.js', src: './definitions/charge.js'}),
			copyPlugin({target: './dist/definitions/current.js', src: './definitions/current.js'}),
			copyPlugin({target: './dist/definitions/digital.js', src: './definitions/digital.js'}),
			copyPlugin({target: './dist/definitions/each.js', src: './definitions/each.js'}),
			copyPlugin({target: './dist/definitions/energy.js', src: './definitions/energy.js'}),
			copyPlugin({target: './dist/definitions/force.js', src: './definitions/force.js'}),
			copyPlugin({target: './dist/definitions/frequency.js', src: './definitions/frequency.js'}),
			copyPlugin({target: './dist/definitions/illuminance.js', src: './definitions/illuminance.js'}),
			copyPlugin({target: './dist/definitions/length.js', src: './definitions/length.js'}),
			copyPlugin({target: './dist/definitions/mass.js', src: './definitions/mass.js'}),
			copyPlugin({target: './dist/definitions/pace.js', src: './definitions/pace.js'}),
			copyPlugin({target: './dist/definitions/partsPer.js', src: './definitions/partsPer.js'}),
			copyPlugin({target: './dist/definitions/power.js', src: './definitions/power.js'}),
			copyPlugin({target: './dist/definitions/pressure.js', src: './definitions/pressure.js'}),
			copyPlugin({target: './dist/definitions/reactiveEnergy.js', src: './definitions/reactiveEnergy.js'}),
			copyPlugin({target: './dist/definitions/reactivePower.js', src: './definitions/reactivePower.js'}),
			copyPlugin({target: './dist/definitions/speed.js', src: './definitions/speed.js'}),
			copyPlugin({target: './dist/definitions/temperature.js', src: './definitions/temperature.js'}),
			copyPlugin({target: './dist/definitions/time.js', src: './definitions/time.js'}),
			copyPlugin({target: './dist/definitions/voltage.js', src: './definitions/voltage.js'}),
			copyPlugin({target: './dist/definitions/volume.js', src: './definitions/volume.js'}),
			copyPlugin({target: './dist/definitions/volumeFlowRate.js', src: './definitions/volumeFlowRate.js'})
		]
	},

	// CommonJS (for Node) and ES module (for bundlers) build.
	// (We could have three entries in the configuration array
	// instead of two, but it's quicker to generate multiple
	// builds from a single configuration where possible, using
	// an array for the `output` option, where we can specify 
	// `file` and `format` for each target)
	{
		input: 'src/main.js',
		//external: ['lodash.keys', 'lodash.foreach'],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		]
	}
];
