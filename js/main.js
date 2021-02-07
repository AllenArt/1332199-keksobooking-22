// Основа функция взята со справочника mdn (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

const getRandom = function (min, max, decimalPlace) {
  min = Math.ceil(min);
  max = Math.floor(max)
if (max < min) {
  const intermediateStore = min;
  min = max;
  max = intermediateStore;
  }
return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomWithFloat = function (min, max, decimalPlace) {
  if (max < min) {
    const intermediateStore = min;
    min = max;
    max = intermediateStore;
    }
  const randomNumber=(Math.random() * (max - min + 1) + min);
  return randomNumber.toFixed(decimalPlace)
}
