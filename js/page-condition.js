import {map} from './map.js'

const offerForm = document.querySelector('.ad-form');
const offerFieldsets = offerForm.querySelectorAll('fieldset');
const mapFilterForm = document.querySelector('.map__filters');
const mapFilters = mapFilterForm.querySelectorAll('select, fieldset');

offerForm.classList.add('ad-form--disabled');

offerFieldsets.forEach(function (fieldset) {
  fieldset.setAttribute('disabled', true);
})

mapFilterForm.classList.add('map__filters--disabled');

mapFilters.forEach(function (filter) {
  filter.setAttribute('disabled', true);
});

map.whenReady(function() {
  offerForm.classList.remove('ad-form--disabled');

  offerFieldsets.forEach(function (fieldset) {
    fieldset.removeAttribute('disabled');
  });

  mapFilterForm.classList.remove('map__filters--disabled');

  mapFilters.forEach(function (filter) {
    filter.removeAttribute('disabled');
  });
});
