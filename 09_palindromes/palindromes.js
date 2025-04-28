const palindromes = function (string) {
  string = string
    .toLowerCase()
    .replaceAll(/( |,|\.|!)/g, '')
  
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[string.length - 1 - i]) return false
  }

  return true
};

// Do not edit below this line
module.exports = palindromes;
