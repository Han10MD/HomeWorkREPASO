function laCajaDePandora(numero) {
    if (typeof numero !== 'number' || !Number.isInteger(numero)) {
        return "Error";
    }
    if (numero % 2 === 0) {
        return numero.toString(2);
    } else {
        return numero.toString(16);
    }
}