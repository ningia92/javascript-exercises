const removeFromArray = function(array, ...args) {
  const itemsToRemove = args;

  return array.filter(item => !itemsToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
