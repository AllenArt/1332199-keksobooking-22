const housingPrice = document.querySelector('#price');
const housingTypesSelect = document.querySelector('#type');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

const getPrice = function(housingTypeSelect) {
  switch (housingTypeSelect.value) {
    case 'bungalow':
      housingPrice.placeholder = '0';
      housingPrice.min = '0';
      break;
    case 'flat':
      housingPrice.placeholder = '1000';
      housingPrice.min = '1000';
      break;
    case 'house':
      housingPrice.placeholder = '5000';
      housingPrice.min = '5000';
      break;
    case 'palace':
      housingPrice.placeholder = '10000';
      housingPrice.min = '10000';
      break;
  }
};

housingTypesSelect.addEventListener('change', function() {
  getPrice(housingTypesSelect)},
);

timeIn.addEventListener('change', function() {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', function() {
  timeIn.value = timeOut.value;
});


