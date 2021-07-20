function solucao(precos) {
    const soma = precos.reduce((acc, preco) => acc + preco);

    if (precos.length < 3) {
        console.log(soma);
    } else {
        const maisBarato = precos.reduce((min, preco) => preco < min ? preco : min);
        const desconto = soma - maisBarato * 0.5;
        console.log(desconto);
    }
}