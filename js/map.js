import {offersBox} from './similar-offers.js'

const L = window.L;
const pinAddress = document.querySelector('input[name = address]');
const offersList = offersBox.querySelectorAll('.popup');

const map = L.map('map-canvas')
  .setView({
    lat: 35.6895,
    lng: 139.69171,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [50, 50],
  iconAnchor: [25, 50],
});

const mainPinMarker = L.marker (
  {
    lat: 35.6895,
    lng: 139.69171,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
).addTo(map);

mainPinMarker.on('move', function(evt) {
  pinAddress.value = evt.target.getLatLng().lat.toFixed(5) + ', ' + evt.target.getLatLng().lng.toFixed(5);
})

offersList.forEach(function(offer) {
  const coordinates = offer.querySelector('.popup__text--address').textContent.split(' ');
  const icon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  })
  const marker = L.marker (
    {
      lat: coordinates[0],
      lng: coordinates[1],
    },
    {
      icon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(
      offer,
      {
        keepInView: true,
      },
    );
})

export {map};


