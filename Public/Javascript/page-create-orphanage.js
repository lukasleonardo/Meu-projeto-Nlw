
//create map
const map = L.map('mapid').setView([-22.9206724,-42.8272063], 15)
//create and add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)
//create icon
const icon = L.icon({
    iconUrl:"/images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor:[29,68],
})

//create and add marker
let marker;


map.on('click',(event)=>{ 
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value=lat
    document.querySelector('[name=lng]').value=lng
    // limpa anterior
    marker && map.removeLayer(marker) 


    //add icon layer 
    marker = L.marker([lat,lng], {icon}).addTo(map)

} )




// upload de photos

function addPhotoField(){
    //pegar container de photos #images
    const container = document.querySelector('#images')
    //pegar container para duplicar #new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload') 
    // realizar o clone da ultima imagem adicionada.
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    
    //preenchimento obrigatorio.

    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return;
    }
    
    input.value == ""
    //limpar a cedula;
    newFieldContainer.children[0].value=""

    //adicionar o clone ao container de imagens
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload') 
    if(fieldsContainer.length <= 1){
        span.parentNode.children[0].value=""
        return
    }

    span.parentNode.remove()
}


//selecionar sim ou não

function toggleSelect(event){
    //retirar classse active do  botão clicado
   document.querySelectorAll('.button-select button')
   .forEach(button => button.classList.remove('active'))
    //pegar o botão clicado
    const button = event.currentTarget
    button.classList.add('active')
    //atualizar input com valor selecionado
    const input= document.querySelector('[name="open-on-weekends"]')
    // verificar se sim ou não
    input.value = button.dataset.value
}