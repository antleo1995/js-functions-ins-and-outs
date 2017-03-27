'use strict';

const product = function () {
  let result = 1

  for (i=0; i < arguments.length; i++){
    result = result * arguments[i]
  }

  return result
};

const max = function () {
  let result = arguments[0]

  for (let i=1; i < arguments.length; i++) {
    if (result < arguments[i]) { result = arguments[i] }
  }

  return result
};

const maxTakesArray = function (array) {
  let result = array[0]
  for (let i=1; i < array.length; i++) {
    if (result < array[i]) { result = array[i] }
  }
  return result
};

const arrayTimes2 = function (integerArray) {
  let result = []

  for (let i = 0; i < integerArray.length; i++) {
      result[i] = integerArray[i] * 2;
    }

  return result
};

const addProperty = function (obj, prop, value) {
  obj[prop] = value
};

const transform = function (value, predicate, mutator) {
  if (predicate(value)){
    return mutator(value)
  }
  return value
};
const transformArray = function (array, predicate, mutator)  {

};


module.exports = {
  product,
  max,
  arrayTimes2,
  addProperty,
  transform,
  maxTakesArray
};
