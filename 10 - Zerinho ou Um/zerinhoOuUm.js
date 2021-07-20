function solucao(jogadores) {
    const jogaramZero = jogadores.filter(jogador => jogador.jogada === 0);
    const jogaramUm = jogadores.filter(jogador => jogador.jogada === 1);

    if (jogaramZero.length === 1) {
        console.log(jogaramZero[0].nome);
    } else if (jogaramUm.length === 1) {
        console.log(jogaramUm[0].nome);
    } else {
        console.log("NINGUEM");
    }

}