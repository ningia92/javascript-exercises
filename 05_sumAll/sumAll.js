const sumAll = function(num1, num2) {
  if (num1 < 0 || num2 < 0) return 'ERROR';
  if (num1 % 1 !== 0 || num2 % 1 !== 0) return 'ERROR';
  if (typeof num1 !== 'number' || typeof num2 !== 'number') return 'ERROR';
  
  let sum = 0;
  let first = num1 < num2 ? num1 : num2;
  let last = num1 > num2 ? num1 : num2;

  for (let i = first; i <= last; i++) sum += i;

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
