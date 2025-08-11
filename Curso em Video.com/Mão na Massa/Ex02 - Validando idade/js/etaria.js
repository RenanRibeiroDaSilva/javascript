function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''

        // Configurando uma tag img no hmtl pelo js.
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            // Condição Etária
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'img/menino-crianca.png')
            } else if (idade < 21){
                // Adolescente
                img.setAttribute('src', 'img/menino-adolescente.png')
            } else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'img/homem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'img/senhor.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            // Condição Etária
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'img/menina-crianca.png')
            } else if (idade >= 10 && idade < 21){
                // Adolescente
                img.setAttribute('src', 'img/menina-adolescente.png')
            } else if (idade >= 21 && idade < 50){
                // Adulto
                img.setAttribute('src', 'img/mulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'img/senhora.png')
            }
        }

        res.style.textAlign = 'Center'
        res.innerHTML = `Você é um(a) ${genero} com ${idade} anos de idade!`
        res.appendChild(img)
    }
}