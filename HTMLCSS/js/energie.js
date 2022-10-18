var meterList = [
    {'img_src': "img/gas-icon.svg",'text': "Gas Meter"},
    {'img_src': "img/electricity-icon.svg",'text': "Elektriciteit"},
    {'img_src': "img/solar-icon.svg",'text': "Zonnepanelen "}
]
var toestelList = [
    {'img_src': "img/droogkast.svg",'text': "Droogkast"},
    {'img_src': "img/kookplaat.svg",'text': "Kookplaat"},
    {'img_src': "img/oven.svg",'text': "Oven"},
    {'img_src': "img/vaatwas.svg",'text':'Vaatwas'},
    {'img_src': "img/wasmachine.svg",'text':'Wasmachine'},
    {'img_src': "img/waterkoker.svg",'text':'Waterkoker'}
]

function vulmeterList(){
    let ul = document.getElementById('meterlist');
    let li = document.getElementById('meter')
    for (let meter of meterList){
        li = document.createElement('li')
        li.setAttribute('class','list-group-item')
        li.appendChild(document.createTextNode(meter.text))
        ul.appendChild(li)
    }
    
}
function vulToestelLijst(){
    let ul = document.getElementById('toestellist');
    let li = document.getElementById('toestel')
    for (let toestel of toestelList){
        li = document.createElement('li')
        li.setAttribute('class','list-group-item')
        var img = document.createElement('img')
        img.src = toestel.img_src
        img.style.height = '14px'
        li.appendChild(img)
        li.appendChild(document.createTextNode(toestel.text))
        ul.appendChild(li)
    }
    
}

vulmeterList()
vulToestelLijst()