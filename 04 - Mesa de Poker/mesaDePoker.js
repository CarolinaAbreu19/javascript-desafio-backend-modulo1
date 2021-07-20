function solucao(min, max, valores) {
    const valoresPermitidos = valores.filter(numero => (numero >= min && numero <= max));

    console.log(valoresPermitidos);

}