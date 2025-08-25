function parimpa(n){
    if (n%2 == 0){
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}


let res = parimpa(12458)
console.log(res)

// Também posso colocar o function dentro do console.log(parimpa(4)) o resultado seria o mesmo. 