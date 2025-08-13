function contagem(){
    // Captura os valores
    const inicioStr = document.getElementById('inicio').value
    const fimStr = document.getElementById('fim').value    

    // Faz a validação
    if (inicioStr.trim() === '' || fimStr.trim() === '') {
        alert('Preencha ambos os campos!')
        return
    }

    // Torna Int
    const inicio = Number(inicioStr)
    const fim = Number(fimStr)

    let resultado = ''

    for (let i = inicio; i <= fim; i++) {
        resultado += (i === fim) ? i : `${i}, `
    }

    res.innerHTML = `Inicio: ${inicio} <br> Fim: ${fim}`
    res2.textContent = `Saída ${resultado}`
}
