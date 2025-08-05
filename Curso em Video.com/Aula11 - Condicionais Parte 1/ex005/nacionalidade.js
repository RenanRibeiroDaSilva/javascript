function nacionalidade(){

    let nasc = window.document.querySelector('input#txtnasc')
    let pais = txtnasc.value
    let res = window.document.querySelector('p#res')

    res.innerHTML = `Você nasceu em ${pais}.`

    // Condicional composto
    if (pais != 'Brasil'){
        res.innerHTML += `<p>Você é <strong>Estrangeiro</strong>!</p>`
    } else {
        res.innerHTML += `<p>Vocé é <strong>Brasileiro</strong>!</p>`
    }
}