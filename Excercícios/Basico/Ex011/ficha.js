

// Recebe dados do usuário:
let nome = prompt('Qual seu nome: ')
let anoAtual = new Date().getFullYear()
let idade = anoAtual - Number(prompt('Qual o ano do seu nascimento: ')) 
let cidMora = prompt('Em qual cidade mora atualmente: ')

// Informa via alerta para o usuário:
alert(`Seu nome é ${nome}, você tem ${idade} de idade e mora na cidade de ${cidMora}`)

// No CSS Podemos usar o line-heigth para ajustar a altura da linha