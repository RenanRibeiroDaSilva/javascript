let agora = new Date()
let hora = agora.getHours()

// Informando a hora do dia:
console.log(`Agora são ${hora} hora(s)!`)

// Desejando um bom... coforme hora do dia
if (hora > 6 && hora < 12) {
    console.log('Tenha um bom dia!')
} else if (hora <= 18) {
    console.log('Tenha uma boa tarde!')
} else {
    console.log('Tenha uma boa noite!')
}
    