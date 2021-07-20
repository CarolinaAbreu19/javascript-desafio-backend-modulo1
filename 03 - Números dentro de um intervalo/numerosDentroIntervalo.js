function solucao(numero, limiteInferior, limiteSuperior) {
    const isInteiro = numero % 1 == 0 ? true : false;
    const isIntervaloValido = limiteInferior <= limiteSuperior ? true : false;
    const isNumeroValido = (numero >= limiteInferior && numero <= limiteSuperior) ? true : false;

    if (isInteiro && isIntervaloValido && isNumeroValido) {
        console.log("PERTENCE");
    } else {
        console.log("NAO PERTENCE");
    }
}