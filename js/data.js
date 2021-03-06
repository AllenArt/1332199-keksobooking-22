import {getRandomNumber, getRandomNumberWithFloat, getRandomArrayElement, getUniqueRandomArray} from './utils.js';

const TITLES = [
  'Любишь путешествовать? Тебе сюда!',
  'Лучшие виды в городе!',
  'Место в центре всех событий!',
];

const TYPES_OF_HOUSING = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const CHECK_OUT_TIMES= [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTIONS = [
  'Райское место для незабываемого отдыха в любое время года в любой компании.',
  'Лучшее место на Земле для отдыха по оптимальной цене.',
  'Необычное место для активных путешественников.',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const OFFER_TYPES = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
};

const NUMBER_OF_OFFERS = 10;

const createAuthor = function() {
  return {
    avatar: 'img/avatars/user0' + getRandomNumber(1, 8) + '.png',
  };
};

const createLocation = function() {
  return {
    x: getRandomNumberWithFloat(35.65000, 35.70000, 5),
    y: getRandomNumberWithFloat(139.70000, 139.80000, 5),
  };
};

const createOffer = function() {
  return {
    title: getRandomArrayElement(TITLES),
    address: createLocation(),
    price: getRandomNumber(0, 1000000000000),
    type: getRandomArrayElement(TYPES_OF_HOUSING),
    rooms: getRandomNumber(0, 1000),
    guests: getRandomNumber(0, 1000),
    checkin: getRandomArrayElement(CHECK_OUT_TIMES),
    checkout: getRandomArrayElement(CHECK_OUT_TIMES),
    features: getUniqueRandomArray(FEATURES),
    description: getRandomArrayElement(DESCRIPTIONS),
    photos: getUniqueRandomArray(PHOTOS),
  };
};

const getOffers = function() {
  return {
    author: createAuthor(),
    offer: createOffer(),
    location: createLocation(),
  };
};

const mockedOffers = new Array(NUMBER_OF_OFFERS).fill(null).map(() => getOffers());

export {mockedOffers, OFFER_TYPES};
