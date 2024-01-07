function laCajaDePandora(numero){
    if (numero % 2 === 0) {
        // Convertimos el número a binario
        return numero.toString(2);
      } else {
        // Convertimos el número a hexadecimal
        return numero.toString(16);
      }
}

function ezequiel(){
    return ({
        nombre: 'ezequiel',
        edad: 33,
        nacionalidad: 'argentina'
    })
}