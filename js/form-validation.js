import {addDisabledAtribute, removeDisabledAttribute} from './utils.js';

const offerTitle = document.querySelector('#title');
const OFFFER_TITLE_MIN_LENGTH = 30;
const OFFFER_TITLE_MAX_LENGTH = 100;
const roomQuantity = document.querySelector('#room_number');
const guestCapacity = document.querySelector('#capacity');
const capacityVariants = guestCapacity.querySelectorAll('option');

offerTitle.addEventListener('input', function() {
  const titleLength = offerTitle.value.length;

  if (titleLength < OFFFER_TITLE_MIN_LENGTH) {
    offerTitle.setCustomValidity(`Минимальная длина заголовка 30 символов, осталось ввести: ${OFFFER_TITLE_MIN_LENGTH - titleLength}`);
  } else if (titleLength > OFFFER_TITLE_MAX_LENGTH) {
    offerTitle.setCustomValidity(`Максимальная длина заголовка 100 символов, необходимо убрать: ${OFFFER_TITLE_MAX_LENGTH - titleLength}`);
  } else {
    offerTitle.setCustomValidity('');
  }
  offerTitle.reportValidity();
})

roomQuantity.addEventListener('change', function() {
  switch (roomQuantity.value) {
    case '1':
      capacityVariants.forEach(function(capacity) {
        if (capacity.value != '1') {
          addDisabledAtribute(capacity);
        } else {
          removeDisabledAttribute(capacity);
        }
      });
      break;
    case '2':
      capacityVariants.forEach(function(capacity) {
        if (capacity.value === '1' || capacity.value === '2') {
          removeDisabledAttribute(capacity);
        } else {
          addDisabledAtribute(capacity);
        }
      })
      break;
    case '3':
      capacityVariants.forEach(function(capacity) {
        if (capacity.value !== '0') {
          removeDisabledAttribute(capacity);
        } else {
          addDisabledAtribute(capacity);
        }
      })
      break;
    case '100':
      capacityVariants.forEach(function(capacity) {
        if (capacity.value === '0') {
          removeDisabledAttribute(capacity);
        } else {
          addDisabledAtribute(capacity);
        }
      })
      break;
  }
});

