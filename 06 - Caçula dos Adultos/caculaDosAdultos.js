function solucao(lista) {
    const idadesValidas = lista.find(idade => idade >= 18);

    if (!idadesValidas) {
        console.log("CRESCA E APARECA");
    } else {
        const maiores = lista.filter(idade => idade >= 18);
        const maisJovem = maiores.reduce((menorAtual, idade) => idade < menorAtual ? idade : menorAtual);
        console.log(maisJovem);
    }

}