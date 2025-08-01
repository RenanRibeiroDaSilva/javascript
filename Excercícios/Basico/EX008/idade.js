

// Abtém dados do usuário:
let anoNasc = Number(prompt('Qual seu ano de nascimeto: '))
let anoAtua = Number(new Date().getFullYear())

// Calculos
let idade = anoAtua - anoNasc

// Mostra resultado no console
console.log(`Você tem ${idade} anos!`)
