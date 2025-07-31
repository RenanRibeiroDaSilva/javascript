
// Recebe dados
let celular = prompt('Qual modelo do celular? ')
let valor = Number(prompt('Qual o valor deste celular? ').replace(',', '.'))

// Informa ao usuário
console.log(`O aparelho Celular ${celular} custa ${valor.toLocaleString('pt-BR',{style:`currency`, currency: `BRL`})}`)