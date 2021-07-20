function solucao(carta) {
    let manilha;

    switch (carta) {
        case 'Q':
            manilha = 'J';
            break;
        case 'J':
            manilha = 'K';
            break;
        case 'K':
            manilha = 'A';
            break;
        case 'A':
            manilha = '2';
            break;
        case '2':
            manilha = '3';
            break;
        case '3':
            manilha = 'Q';
            break;
        default:
            break;
    }

    console.log(manilha);
}