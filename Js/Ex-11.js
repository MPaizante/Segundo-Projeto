let agora = new Date()
let hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora <12){
    console.log('Bom dia')
}
else if (hora <=18 ){
    console.log('Agora é de tarde')
}else {
    console.log('Agora é de noite')
}