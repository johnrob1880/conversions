const assert = require('assert')
const convert = require('..')
const volume = require('../definitions/volume.js')
const length = require('../definitions/length.js')

let converter = convert().use(volume, length);

function test(value, from, to, precision, expected) {

	assert.equal(converter.value(value).from(from).to(to, precision), expected)
	console.log(`\u001B[32m✓\u001B[39m ${expected}`)
}

test(1, 'l','ml', 0, 1000)
test(1000, 'ml', 'l', 0, 1)
test(1, 'ft', 'in', 0, 12)
test(5280, 'ft', 'mi', 0, 1)

test(1, 'gal', 'l', 4, 3.7854)
test(1, 'm', 'mm', 0, 1000)