const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) =>
  ids.reduce((array, actualId) => {
    array.push(...data.species.filter(({ id }) => id === actualId));
    return array;
  }, []);
module.exports = getSpeciesByIds;
