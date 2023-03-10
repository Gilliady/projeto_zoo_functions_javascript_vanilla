const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  // seu código aqui
  const objCounter = {};
  switch (animal) {
  case undefined:
    data.species
      .forEach((actualSpecie) => {
        objCounter[actualSpecie.name] = actualSpecie.residents.length;
      });
    return objCounter;
  default:
    return !animal.sex ? data.species
      .find((specie) => specie.name === animal.species).residents.length
      : data.species
        .find((specie) => specie.name === animal.species).residents
        .filter((actualAnimal) => actualAnimal.sex === animal.sex).length;
  }
};

module.exports = countAnimals;
