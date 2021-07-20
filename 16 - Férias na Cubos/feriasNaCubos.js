const input = "5 31 5 3";

const grupos = input.trim().split(" ").map(numero => parseInt(numero));
let quantidadeTaxis = grupos[3];
grupos[3] = 0;

if (grupos[0] - grupos[2] >= 0) {
    grupos[0] -= grupos[2];
} else {
    grupos[0] = 0
}

quantidadeTaxis += grupos[2];
grupos[2] = 0;

if(grupos[1] % 2 == 0) {
    quantidadeTaxis += grupos[1]/2;
    grupos[1] = 0;
} else {
    if(grupos[0] >= 2) {
        grupos[0] -= 2;
    } else if(grupos[0] === 1) {
        grupos[0]--;
    }
    grupos[1]--;
    quantidadeTaxis += (grupos[1]/2) + 1 ;
    grupos[1] = 0;
}

if(grupos[0] % 4 === 0) {
    quantidadeTaxis += grupos[0]/4;
} else {
    grupos[0] -= grupos[0] % 4;
    quantidadeTaxis += (grupos[0]/4) + 1;
    grupos[0] = 0;
}

console.log(quantidadeTaxis);
console.log(grupos);