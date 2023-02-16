function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')


    if (num.valeu.length == 0){
        window.alert('Digite um numero!')
    }
    else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <=10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.valeu = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
   
}