const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) =>
  ids.reduce((array, id) => {
    array.push(...data.species.filter((animal) => animal.id === id));
    return array;
  }, []);
module.exports = getSpeciesByIds;
