

// Recebe valores do usuário:
let valorUnitario = Number(prompt(`Qual o valor unitário do item: `))
let qtd = Number(prompt('Quanto unidades pegou: '))

// Tratamento de dados:
let valTotal = valorUnitario * qtd

// Mostra resultado
console.log(`O valor total dos itens e de: ${valTotal.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}`)
