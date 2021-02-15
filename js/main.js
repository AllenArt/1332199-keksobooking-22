'use strict'
// Основа функция взята со справочника mdn (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
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

const NUMBER_OF_OFFERS = 10;

const getRandomNumber = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max)

  if (max < min) {
    const intermediateStore = min;
    min = max;
    max = intermediateStore;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomNumberWithFloat = function(min, max, decimalPlace) {

  if (max < min) {
    const intermediateStore = min;
    min = max;
    max = intermediateStore;
  }

  const randomNumber=(Math.random() * (max - min) + min);
  return randomNumber.toFixed(decimalPlace)
}

const getRandomArrayElement = function(elements) {
  return elements[getRandomNumber(0, elements.length - 1)];
};

const getUniqueRandomArray = function(elements) {
  let mixedArray = [];

  mixedArray[0] = getRandomArrayElement(elements);

  while (mixedArray.length < elements.length) {
    let nextElement = getRandomArrayElement(elements);

    if (mixedArray.indexOf(nextElement) === -1) {
      mixedArray.push(nextElement);
    }
  }

  mixedArray.length = (getRandomNumber(0, elements.length - 1));
  return mixedArray;
};

const createAuthor = function() {
  return {
    avatar: 'img/avatars/user{{0' + getRandomNumber(1, 8) + '}}.png',
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


