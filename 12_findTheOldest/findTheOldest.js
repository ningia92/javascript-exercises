const findTheOldest = function (people) {
  const oldest = people
    .map(person => {
      return !person.yearOfDeath
        ? { name: person.name, age: new Date().getFullYear() - person.yearOfBirth }
        : { name: person.name, age: person.yearOfDeath - person.yearOfBirth }
    })
    .reduce((acc, curr) => {
      if (!acc || acc.age < curr.age) return curr
      return acc
    }, null)

  return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
