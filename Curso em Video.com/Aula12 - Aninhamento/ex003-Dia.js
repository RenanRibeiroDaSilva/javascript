let agora = new Date()
let diasem = agora.getDay()

/* Dia da Semana
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta 
    5 = Sexta
    7 = Sabado
*/

// Usando Switch para mostrar o dia da semana:
switch(diasem) {
    case 0:
        dia = 'Domingo'
        break
    case 1:
        dia = 'Segunda'
        break
    case 2:
        dia = 'Terça'
        break
    case 3:
        dia = 'Quarta'
        break
    case 4:
        dia = 'Quinta'
        break
    case 5:
        dia = 'Sexta'
        break
    case 6:
        dia = 'Sábado'
        break
    default:
        dia = 'Valor Inválido'
}

console.log(`Hoje é ${dia}`)