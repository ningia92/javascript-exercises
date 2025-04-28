const add = function (num1, num2) {
  return num1 + num2
};

const subtract = function (num1, num2) {
  return num1 - num2
};

const sum = function (array) {
  return array.reduce((acc, curr) => {
    return add(acc, curr)
  }, 0)
};

const multiply = function (array) {
  return array.reduce((acc, curr) => {
    return acc * curr
  })
};

const power = function (num1, num2) {
  return num1**num2
};

const factorial = function (num) {
  let tot = 1
  for (let i = num; i > 0; i--) tot *= i
  return tot
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
