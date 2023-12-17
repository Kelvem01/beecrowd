var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function determinarQuadrante(x,y){
    if(x ==0 && y == 0){
        return'Origem'
    }else if(x == 0){
        return 'Eixo Y'
    }else if(y == 0){
        return 'Eixo X'
    }else if(x > 0 && y > 0 ){
        return'Q1'
    }else if (x < 0 && y > 0){
        return'Q2'
    }else if (x < 0 && y <0){
        return'Q3'
    }else{
        return'Q4'
    }

}

const [x,y] = lines[0].split(' ').map(Number)
const quadrante = determinarQuadrante (x,y)
console.log(quadrante)