function carregar(){
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    //let hora = data.getHours()
    let hora = 6

    msg.innerHTML = `Agora são ${hora} horas.`

    // If para mostrar a imagem correta com base na hora do dia
    if (hora >= 6 && hora < 12){
        // Bom dia!!
        img.src = 'img/manha.png'
        document.body.style.backgroundImage = 'linear-gradient(45deg, white, lightblue, yellow)'
    } else if (hora >= 12 && hora < 18){
        // Boa tarde!!
        img.src = 'img/tarde.png'
        document.body.style.backgroundImage = 'linear-gradient(45deg, yellow, orange, red)'
    } else if (hora >= 18 && hora <= 23){
        // Boa noite!!
        img.src = 'img/noite.png'
        document.body.style.backgroundImage = 'linear-gradient(45deg, blue, darkblue, black)'        
    } else {
        // Boa Madrugada!!
        img.src = 'img/madrugada.png'
        document.body.style.backgroundImage = 'linear-gradient(45deg, darkblue, black, black)'
    }
}