import {mockedOffers} from './data.js';

const offerTemplate = document.querySelector('#card').content;
const offersBox = document.createDocumentFragment();
const mapCanvas = document.querySelector('#map-canvas');

mockedOffers.forEach(function (element) {
  const newOfferTemplate = offerTemplate.cloneNode(true);
  const newOffer = newOfferTemplate.querySelector('article');

  const newOfferTitle = newOffer.querySelector('.popup__title');
  newOfferTitle.textContent = element.offer.title;

  const newOfferAddres = newOffer.querySelector('.popup__text--address');
  newOfferAddres.textContent = element.offer.address.x + ' ' + element.offer.address.y;

  const newOfferPrice = newOffer.querySelector('.popup__text--price');
  newOfferPrice.textContent = element.offer.price + '₽/ночь';

  const newOfferType = newOffer.querySelector('.popup__type');
  const offerType = element.offer.type;
  const offerTypes = {
    flat: 'Квартира',
    bungalow: 'Бунгало',
    house: 'Дом',
    palace: 'Дворец',
  };
  newOfferType.textContent = offerTypes[offerType];

  const NewOfferRoomAndGuest = newOffer.querySelector('.popup__text--capacity');
  NewOfferRoomAndGuest.textContent = element.offer.rooms + ' комнаты для ' + element.offer.guests + ' гостей»';

  const newOfferTime = newOffer.querySelector('.popup__text--time');
  newOfferTime.textContent = 'Заезд после ' + element.offer.checkin + ', выезд до' + element.offer.checkout;

  const newOfferFeature = newOffer.querySelector('.popup__features');
  newOfferFeature.removeChild;
  const offerFeatureList = element.offer.features;

  if (offerFeatureList.length === 0) {
    newOfferFeature.classList.add('hidden');
  }

  while (newOfferFeature.firstChild) {
    newOfferFeature.removeChild(newOfferFeature.firstChild)
  }

  offerFeatureList.forEach(function (feature) {
    const newOfferFeatureItem = document.createElement('li');
    newOfferFeatureItem.classList.add('popup__feature', 'popup__feature--' + feature);
    newOfferFeature.appendChild(newOfferFeatureItem);
  });

  const newOfferDescription = newOffer.querySelector('.popup__description');
  newOfferDescription.textContent = element.offer.description;

  const newOfferPhoto = newOffer.querySelector('.popup__photos');
  const offerPhotoList = element.offer.photos;
  const newOfferPhotoList = document.createDocumentFragment();
  const OfferPhotoTemplate = newOfferPhoto.querySelector('.popup__photo');
  newOfferPhoto.removeChild(OfferPhotoTemplate);

  if (offerPhotoList.length === 0) {
    offerPhotoList.classList.add('hidden');
  }

  offerPhotoList.forEach(function(photo) {
    const newOfferPhotoItem = OfferPhotoTemplate.cloneNode(true);
    newOfferPhotoItem.src = photo;
    newOfferPhotoList.appendChild(newOfferPhotoItem);
  });
  newOfferPhoto.appendChild(newOfferPhotoList);

  const newOfferAvatar = newOffer.querySelector('.popup__avatar');
  newOfferAvatar.src = element.author.avatar;

  offersBox.appendChild(newOffer);
});

mapCanvas.appendChild(offersBox.firstChild);
