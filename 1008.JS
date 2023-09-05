var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var numeroF =parseInt(lines.shift())
var hora =parseInt(lines.shift())
var valor_hora =parseFloat(lines.shift())

var salario = hora * valor_hora

console.log("NUMBER = "+ numeroF)
console.log("SALARY = U$ "+ salario.toFixed(2))
