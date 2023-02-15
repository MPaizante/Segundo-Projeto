function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Erro')
    } else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <10){
                img.setAttribute('src','../imagens/bebe.jpg')
            } else if(idade <21){
                img.setAttribute('src','../imagens/bebe.jpg')
            } else if(idade <50){
                img.setAttribute('src','../imagens/bebe.jpg')
            } else{

            }
        }   
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade <10){
            img.setAttribute('src','../imagens/bebe.jpg')

            } else if(idade <21){
                img.setAttribute('src','../imagens/bebe.jpg')
            } else if(idade <50){
            img.setAttribute('src','../imagens/bebe.jpg')
            } else{
            img.setAttribute('src','../imagens/bebe.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    
    }
}