import {mockedOffers, OFFER_TYPES} from './data.js';

const offerTemplate = document.querySelector('#card').content;
const offersBox = document.createElement('div');

mockedOffers.forEach(function (element) {
  const newOffer = offerTemplate.cloneNode(true).querySelector('article');

  const newOfferTitle = newOffer.querySelector('.popup__title');
  newOfferTitle.textContent = element.offer.title;

  const newOfferAddres = newOffer.querySelector('.popup__text--address');
  newOfferAddres.innerHTML = element.offer.address.x + ' ' + element.offer.address.y;

  const newOfferPrice = newOffer.querySelector('.popup__text--price');
  newOfferPrice.textContent = element.offer.price + 'р/ночь';

  const newOfferType = newOffer.querySelector('.popup__type');
  const offerType = element.offer.type;
  newOfferType.textContent = OFFER_TYPES[offerType];

  const NewOfferRoomAndGuest = newOffer.querySelector('.popup__text--capacity');
  NewOfferRoomAndGuest.textContent = element.offer.rooms + ' комнаты для ' + element.offer.guests + ' гостей»';

  const newOfferTime = newOffer.querySelector('.popup__text--time');
  newOfferTime.textContent = 'Заезд после ' + element.offer.checkin + ', выезд до' + element.offer.checkout;

  let newOfferFeatures = newOffer.querySelector('.popup__features');
  const offerFeaturesList = element.offer.features;

  if (offerFeaturesList.length === 0) {
    newOfferFeatures.classList.add('hidden');
  }

  while (newOfferFeatures.firstChild) {
    newOfferFeatures.removeChild(newOfferFeatures.firstChild)
  }

  offerFeaturesList.forEach(function (feature) {
    const newOfferFeatureItem = document.createElement('li');
    newOfferFeatureItem.classList.add('popup__feature', 'popup__feature--' + feature);
    newOfferFeatures.appendChild(newOfferFeatureItem);
  });

  const newOfferDescription = newOffer.querySelector('.popup__description');
  newOfferDescription.textContent = element.offer.description;

  const newOfferPhotos = newOffer.querySelector('.popup__photos');
  const offerPhotosList = element.offer.photos;
  const newOfferPhotosList = document.createDocumentFragment();
  const OfferPhotoTemplate = newOfferPhotos.querySelector('.popup__photo');
  newOfferPhotos.removeChild(OfferPhotoTemplate);

  if (offerPhotosList.length === 0) {
    offerPhotosList.classList.add('hidden');
  }

  offerPhotosList.forEach(function(photo) {
    const newOfferPhotoItem = OfferPhotoTemplate.cloneNode(true);
    newOfferPhotoItem.src = photo;
    newOfferPhotosList.appendChild(newOfferPhotoItem);
  });
  newOfferPhotos.appendChild(newOfferPhotosList);

  const newOfferAvatar = newOffer.querySelector('.popup__avatar');
  newOfferAvatar.src = element.author.avatar;

  offersBox.appendChild(newOffer);
});

export {offersBox};
