const data = require('../data/zoo_data');

const setDefaultObject = () => {
  const manipulateObj = {};
  Object.keys(data.hours).forEach((currentDay) => {
    if (currentDay !== 'Monday') {
      manipulateObj[currentDay] = { officeHour: `Open from ${data
        .hours[currentDay].open}am until ${data.hours[currentDay].close}pm`,
      exhibition: data.species.filter(({ name, availability }) => availability
        .includes(currentDay)).map(({ name }) => name),
      };
    }
  });
  manipulateObj.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return manipulateObj;
};

const setAnimalavailability = (scheduleTarget) => data.species
  .find(({ name }) => name.includes(scheduleTarget)).availability;

const setDayAvailableAnimals = (scheduleTarget) => {
  const obj = {};
  if (scheduleTarget !== 'Monday') {
    obj[scheduleTarget] = {
      officeHour: `Open from ${data
        .hours[scheduleTarget].open}am until ${data.hours[scheduleTarget].close}pm`,
      exhibition: data
        .species
        .filter(({ availability }) => availability
          .includes(scheduleTarget)).map(({ name }) => name),
    };
  } else {
    obj[scheduleTarget] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  }
  return obj;
};
const getSchedule = (scheduleTarget) => {
  const dias = Object.keys(data.hours);
  if (dias.includes(scheduleTarget)) {
    return (setDayAvailableAnimals(scheduleTarget));
  }
  if (data.species.some(({ name }) => name === scheduleTarget)) {
    return setAnimalavailability(scheduleTarget);
  }
  return setDefaultObject();
};
console.log(getSchedule('lions'));
module.exports = getSchedule;
