const data = require('../data/zoo_data');

const countEntrants = (entrants) => ({
  adult: entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50)
    .length,
  senior: entrants.filter((entrant) => entrant.age >= 50).length,
  child: entrants.filter((entrant) => entrant.age < 18).length,
});

const calculateEntry = (entrants) => {
  // seu código aqui
  let sum = 0;
  if (entrants !== undefined) {
    const countedEntrants = countEntrants(entrants);
    Object.keys(countedEntrants).forEach((key) => {
      sum += countedEntrants[key] * data.prices[key];
    });
  }
  return sum;
};
module.exports = { calculateEntry, countEntrants };
