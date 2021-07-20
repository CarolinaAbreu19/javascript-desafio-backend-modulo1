function solucao(texto) {
    const splitText = texto.trim().split(" ").filter(palavra => palavra !== '');
    console.log(splitText.length);
}