var meterList = [
    {'img_src': "img/gas-icon.svg"},
    {'img_src': "img/electricity-icon.svg"},
    {'img_src': "img/electricity-icon.svg"}
]
var toestelList = [
    {'img_src': "img/droogkast.svg"},
    {'img_src': "img/kookplaat.svg"},
    {'img_src': "img/oven.svg"},
    {'img_src': "img/vaatwas.svg"},
    {'img_src': "img/wasmachine.svg"},
    {'img_src': "img/waterkoker.svg"}
]

function vulmeterList(){
    let ul = document.getElementById('meterlist');
    let li = document.getElementById('meter')
    for (let meter of meterList){
        li = document.createElement('li')
        li.appendChild(document.createTextNode(meter.img_src))
        ul.appendChild(li)
    }
    
}
function vulToestelLijst(){
    let ul = document.getElementById('toestellist');
    let li = document.getElementById('toestel')
    for (let toestel of toestelList){
        li = document.createElement('li')
        var img = document.createElement('img')
        img.src = toestel.img_src
        img.style.height = '14px'
        li.appendChild(img)
        li.appendChild(document.createTextNode(toestel.img_src))
        ul.appendChild(li)
    }
    
}

vulmeterList()
vulToestelLijst()