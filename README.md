# @johnrob1880/conversions

Utility to ease the pain of converting values from one unit to another. Heavily inspired by [ben-ng/convert-units](https://github.com/ben-ng/convert-units).

## Install

Install the conversion library via npm:

```bash
npm install @johnrob1880/conversions --save
```
Install the conversion library via yarn:

```bash
yarn add @johnrob1880/conversions
```

## Example

```js
import convert from '@johnrob1880/conversions'
// import conversion systems as needed
import length from '@johnrob1880/conversions/definitions/length'
import volume from '@johnrob1880/conversions/definitions/volume'


let converter = convert().use(volume, length/*, .... */)

// length
console.log(converter.value(1).from('m').to('cm')) // outputs 100

// volume
console.log(converter.value(1).from('gal').to('l', 4 /* optional precision */)) // outputs 3.7854
```

## Available definitions

```js
// g-force, m/s2
import acceleration from '@johnrob1880/conversions/definitions/acceleration'

// rad, deg, grad, arcmin, arcsec
import angle from '@johnrob1880/conversions/definitions/angle'

// VA, mVA, kVA, MVA, GVA
import apparentPower from '@johnrob1880/conversions/definitions/apparentPower'

// metric   ---> mm2, cm2, m2, ha, km2
// imperial ---> in2, yd2, ft2, ac, mi2
import area from '@johnrob1880/conversions/definitions/area'

// c, mC, μC, nC, pC
import charge from '@johnrob1880/conversions/definitions/charge'

// A, mA, kA
import current from '@johnrob1880/conversions/definitions/current'

// bits  ---> b, Kb, Mb, Gb, Tb,
// bytes ---> B, KB, MB, GB, TB, 
import digital from '@johnrob1880/conversions/definitions/digital'

// ea, dz
import each from '@johnrob1880/conversions/definitions/each'

// Wh, mWh, kWh, MWh, GWh, J, kJ
import energy from '@johnrob1880/conversions/definitions/energy'

// N, kN, lbf
import force from '@johnrob1880/conversions/definitions/force'

// mHz, Hz, kHz, MHz, GHz, THz, rpm, deg/s, rad/s
import frequency from '@johnrob1880/conversions/definitions/frequency'

// metric   ---> lx
// imperial ---> ft-cd
import illuminance from '@johnrob1880/conversions/definitions/illuminance'

// metric   ---> mm, cm, m, km
// imperial ---> in, yd, ft-us, ft, fathom, mi, nMi
import length from '@johnrob1880/conversions/definitions/length'

// metric   ---> mcg, mg, g, kg, mt
// imperial ---> oz, lb, t
import mass from '@johnrob1880/conversions/definitions/mass'

// metric   ---> min/km, s/m
// imperial ---> min/mi, s/ft
import pace from '@johnrob1880/conversions/definitions/pace'

// ppm, ppb, ppt, ppq
import partsPer from '@johnrob1880/conversions/definitions/partsPer'

// W, mW, kW, MW, GW
import power from '@johnrob1880/conversions/definitions/power'

// metric   ---> Pa, kPa, MPa, hPa, bar, torr
// imperial ---> psi, ksi
import pressure from '@johnrob1880/conversions/definitions/pressure'

// VARh, mVARh, kVARh, MVARh, GVARh
import reactiveEnergy from '@johnrob1880/conversions/definitions/reactiveEnergy'

// VAR, mVAR, kVAR, MVAR, GVAR
import reactivePower from '@johnrob1880/conversions/definitions/reactivePower'

// metric   ---> m/s, km/h
// imperial ---> m/h, knot, ft/s
import speed from '@johnrob1880/conversions/definitions/speed'

// metric   ---> C, K
// imperial ---> F, R
import temperature from '@johnrob1880/conversions/definitions/temperature'

// ns, mu, ms, s, min, h, d, week, month, year
import time from '@johnrob1880/conversions/definitions/time'

// V, mV, kV
import voltage from '@johnrob1880/conversions/definitions/voltage'

// metric   ---> mm3, cm3, ml, cl, dl, l, kl, m3, km3
// imperial ---> tsp, Tbs, in3, fl-oz, cup, pnt, qt, gal, ft3, yd3
// swedish ---> krm, tsk, msk, kkp, glas, kanna
import volume from '@johnrob1880/conversions/definitions/volume'

// metric   ---> mm3/s, cm3/s, ml/s, cl/s, dl/s, l/s, l/min, l/h, kl/s
//               kl/min, kl/h, m3/s, m3/min, m3/h, km3/s
// imperial ---> tsp/s, Tbs/s, in3/s, in3/min, in3/h, fl-oz/s, fl-oz/min
//               fl-oz/h, cup/s, pnt/s, pnt/min, pnt/h, qt/s
//               gal/s, gal/min, gal/h, ft3/s, ft3/min, ft3/h
//               yd3/s, yd3/min, yd3/h
import volumeFlowRate from '@johnrob1880/conversions/definitions/volumeFlowRate'
```


## License

[MIT](LICENSE).
