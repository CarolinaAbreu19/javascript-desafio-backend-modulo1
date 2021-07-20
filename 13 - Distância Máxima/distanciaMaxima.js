const input = "5\n3.56 17\n-5.1 36.3\n0.0002 -2\n5 5\n-9.01 -17.7"

const linhas = input.trim().split("\n");
const coordenadas = [];

for (let i = 1; i < linhas.length; i++) {
    const coordenada = linhas[i].split(" ");
    coordenadas.push({
        x: parseFloat(coordenada[0]),
        y: parseFloat(coordenada[1])
    })
}

let distancia = 0;
let maiorDistancia = 0;

for(let i = 0; i < coordenadas.length-1; i++) {
    for(let j = 1; j < coordenadas.length; j++) {
        distancia = (Math.sqrt((coordenadas[i].x-coordenadas[j].x )**2 + (coordenadas[i].y-coordenadas[j].y)**2));
        if(distancia > maiorDistancia) {
            maiorDistancia = distancia;
        }
    }
}

/* const maiorDistancia = distancias.reduce((maior, numero) => numero > maior ? numero : maior); */
console.log(maiorDistancia);