/*
string ""
Number 01
object{}
Array[]
Boolean true/false
*/ 
//create map
const map = L.map('mapid').setView([-22.9206724,-42.8272063], 15)
//create and add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)
//create icon
const icon = L.icon({
    iconUrl:"/images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor:[29,68],
    popupAnchor:[170,2]
})


function addMarker({id,name,lat,lng}){
//create popup overlay
const popup = L.popup({
    closeButtom: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent(`${name} <a href="/orphanage?id=${id}"><img src="/images/arrow-white.svg"> </a>  `)

//create and add marker
L
.marker([lat,lng],{icon})
.addTo(map)
.bindPopup(popup)

}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach(orphanageElement => {
    const orphanage = {
        id:span.dataset.id,
        name:span.dataset.name,
        lat: span.dataset.lat, 
        lng:span.dataset.lng 
    }


    addMarker(orphanage)
})

