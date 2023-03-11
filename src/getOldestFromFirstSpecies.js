const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (employerId) => {
  // seu código aqui
  const [animalID] = data.employees
    .find(({ id }) => id === employerId).responsibleFor;
  const animal = data.species
    .find(({ id }) => id === animalID).residents.reduce((major, actualAnimal) =>
      (major.age < actualAnimal.age ? actualAnimal : major));
  return [animal.name, animal.sex, animal.age];
};
console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = getOldestFromFirstSpecies;
