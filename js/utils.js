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
  let mixedArrayCount = (getRandomNumber(0, elements.length - 1));

  while (mixedArray.length <= mixedArrayCount) {
    let nextElement = getRandomArrayElement(elements);

    if (mixedArray.indexOf(nextElement) === -1) {
      mixedArray.push(nextElement);
    }
  }

  return mixedArray;
};

const addDisabledAtribute = function(element) {
  element.setAttribute('disabled', true);
};

const removeDisabledAttribute = function(element) {
  element.removeAttribute('disabled');
};

export {getRandomNumber, getRandomNumberWithFloat, getRandomArrayElement, getUniqueRandomArray, addDisabledAtribute, removeDisabledAttribute};
