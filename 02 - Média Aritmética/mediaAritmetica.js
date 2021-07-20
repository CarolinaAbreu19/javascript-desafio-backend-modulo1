function solucao(lista) {
    const soma = lista.reduce((acc, numero) => acc + numero);
    const media = soma / lista.length;

    console.log(media);
}