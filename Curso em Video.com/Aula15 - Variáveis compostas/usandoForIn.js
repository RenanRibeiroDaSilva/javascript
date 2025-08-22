let num = [1, 2, 3, 4, 5, 8, 87234, 10, 98, 87, 987]

// Mais otimizado, porém só no JS
for(pos in num){
    console.log(`O valor na posição ${pos} é ${num[pos]}.`)
}