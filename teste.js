const prompt = require("prompt-sync")()


let valor = Number(prompt("digite um numero :"))

if (valor < 0){
    console.log("o valor é negativo ! ");

} else if ( valor > 0 ){
    console.log ("o valor é positivo! ")
}