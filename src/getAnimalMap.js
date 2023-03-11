const data = require('../data/zoo_data');

const filterDefault = () =>
  data.species.reduce((obj, { location, name }) => {
    obj[location].push(name);
    return obj;
  }, { NE: [], NW: [], SE: [], SW: [] });
const filterIncludesName = () => data.species.reduce((obj, { location, name, residents }) => {
  obj[location].push({ [name]: residents.map((animal) => `${animal.name}`) });
  return obj;
}, { NE: [], NW: [], SE: [], SW: [] });

const filterIncludesNameAndSex = (sex) => data.species
  .reduce((obj, { location, name, residents }) => {
    obj[location]
      .push({ [name]: residents
        .filter((animal) => animal.sex === sex && animal).map((animalName) => animalName.name),
      });
    return obj;
  }, { NE: [], NW: [], SE: [], SW: [] });

const getAnimalMap = (options) => {
  if (options === undefined || !options.includeNames) {
    return filterDefault();
  }
  let animalMap = filterIncludesName();
  if (options.sex !== undefined) {
    animalMap = filterIncludesNameAndSex(options.sex);
  }

  if (options.sorted) {
    Object.keys(animalMap).forEach((orientation, index) => {
      (animalMap[orientation].map((animal) => {
        animal[Object.keys(animal)[0]].sort();
        return animal;
      }));
    });
  }
  return animalMap;
};
console.log(getAnimalMap({ includeNames: true, sex: 'male', sorted: true }));
module.exports = getAnimalMap;
