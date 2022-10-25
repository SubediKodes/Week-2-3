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
    for (let meter of meterList){
        li = document.createElement('li')
        li.setAttribute('class','list-group-item') 
        var img = document.createElement('img')
            img.src = meter.img_src
            img.style.height = '24px'
        li.appendChild(img)
        li.appendChild(document.createTextNode(meter.text))
        var sp = document.createElement('span')
            sp.setAttribute('class', 'badge p-2 rounded-circle bg-success');
            sp.textContent = "\u00A0";
        li.appendChild(sp)
        var btn = document.createElement('button');
            btn.setAttribute('class','btn btn-outline-danger');
            btn.innerText = 'Verbind'
        li.appendChild(btn)
        ul.appendChild(li)
    }
    
}
function vulToestelLijst(){
    let ul = document.getElementById('toestellist');
    for (let toestel of toestelList){
        li = document.createElement('li')
        li.setAttribute('class','list-group-item')
        var img = document.createElement('img')
            img.src = toestel.img_src
            img.style.height = '14px'
        li.appendChild(img)
        li.appendChild(document.createTextNode(toestel.text))
        li.addEventListener('click',selectToestel)
        ul.appendChild(li)
    }
}

function selectToestel(event){
    let item = event.target;
    item.classList.add("selected");
}

function clickonlist(){
    let item = document.getElementsByName('list-group-item')
    for (let l of item){
        l.addEventListener('mouseover')
    }
}

vulmeterList()
vulToestelLijst()