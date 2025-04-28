const fibonacci = function (num) {
  if (num < 0) return 'OOPS'
  else {
    const sequence = [0, 1]
    for (let i = 0; i < num; i++) {
      let next = sequence[i] + sequence[i + 1]
      sequence.push(next)
    }
    return sequence[num]
  }
};

// Do not edit below this line
module.exports = fibonacci;
