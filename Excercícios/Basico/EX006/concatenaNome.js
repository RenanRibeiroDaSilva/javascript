

// Recebe valor do usuário:
const firstName = prompt('Qual seu nome? ')
const midName = prompt('Qual seu sobrenome do meio? ')
const lastName = prompt('Qual seu ultimo sobrenome? ')

// Concatena e atribui a uma nova variavel:
const completeName = `${firstName} ${midName} ${lastName}`

// Mostra para o usuário:
console.log(`Seu nome completo é ${completeName}`)