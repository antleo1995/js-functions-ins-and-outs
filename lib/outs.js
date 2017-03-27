'use strict';

const createArray = function () {

};
// challenge: use createArray in arrayTransform
const arrayTransform = function (array, predicate, mutator) {
  const ins = require('./ins.js')
  let result = []

  for (let i =0; i < array.length; i++) {
      result = ins.transform(array[i], predicate, mutator)
  }

  return result
};

/*
const isLarge = function (number){
  if (number > 100){
    return true
  } else (
    return false
  )
};
const mutate = function (value) {
  return value/2

}
*/
//aka object factory
const createPerson = function (givenName, familyName, bornOn, height, weight, eyeColor) {

  return {
    givenName,
    familyName,
    bornOn,
    height,
    weight,
    eyeColor
  }
};

const memoFactory = function (rememberMe) {
let  memo = rememberMe

return function()  {
  return memo
}

};

const counterFactory = function () {
  let tick = 0

  return function() {
    return tick++
  }

};

module.exports = {
  createArray,
  arrayTransform,
  createPerson,
  memoFactory,
  counterFactory,
};
