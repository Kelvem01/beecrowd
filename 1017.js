var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let tempoGasto = parseInt(lines.shift())
let velocidadeMedia = parseInt(lines.shift())
let kml = 12

let distanciaPercorrida = tempoGasto * velocidadeMedia;

let litro = distanciaPercorrida / kml

console.log(`${litro.toFixed(3)}`)
