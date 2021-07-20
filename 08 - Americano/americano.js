function solucao(numeros) {
    const soma = numeros.reduce((acc, numero) => acc + numero);
    let posicao;

    if (soma % numeros.length === 0) {
        posicao = numeros.length;
    } else if (soma < numeros.length) {
        posicao = (soma % numeros.length) - 1;
    } else {
        posicao = soma % numeros.length;
    }

    console.log(posicao);

}