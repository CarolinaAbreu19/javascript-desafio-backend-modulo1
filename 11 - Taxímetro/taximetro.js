function solucao(min, km) {
    let precoMin, precoKm;

    if (km > 10) {
        const kmAdicional = km - 10;
        precoKm = kmAdicional * 0.5 + 7;
    } else {
        precoKm = km * 0.7;
    }

    if (min > 20) {
        const minAdicional = min - 20;
        precoMin = minAdicional * 0.3 + 10;
    } else {
        precoMin = min * 0.5;
    }

    let precoViagem = (precoKm + precoMin) * 100;
    console.log(precoViagem);
}