import {map} from './map.js'

const offerForm = document.querySelector('.ad-form');
const offerFieldsets = offerForm.querySelectorAll('fieldset');
const mapFilterForm = document.querySelector('.map__filters');
const mapFilters = mapFilterForm.querySelectorAll('select, fieldset');

const addDisabledAtribute = function(element) {
  element.setAttribute('disabled', true);
};

const removeDisabledAttribute = function(element) {
  element.removeAttribute('disabled');
};

offerForm.classList.add('ad-form--disabled');

offerFieldsets.forEach(addDisabledAtribute);

mapFilterForm.classList.add('map__filters--disabled');

mapFilters.forEach(addDisabledAtribute);

map.whenReady(function() {
  offerForm.classList.remove('ad-form--disabled');

  offerFieldsets.forEach(removeDisabledAttribute);

  mapFilterForm.classList.remove('map__filters--disabled');

  mapFilters.forEach(removeDisabledAttribute);
});
