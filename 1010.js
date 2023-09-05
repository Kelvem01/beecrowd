var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let totalValores1 = lines.shift().split(" ")
let totalValores2 = lines.shift().split(" ")

let codePeca1 = totalValores1.shift()
let numPeca1 = totalValores1.shift()
let valorUni1 = totalValores1.shift()
let valorTotal1 = numPeca1*valorUni1



let codePeca2 = totalValores2.shift()
let numPeca2 = totalValores2.shift()
let valorUni2 = totalValores2.shift()
let valorTotal2 = numPeca2*valorUni2

let totalPagar = valorTotal1 + valorTotal2

console.log("VALOR A PAGAR: R$ "+ totalPagar.toFixed(2))