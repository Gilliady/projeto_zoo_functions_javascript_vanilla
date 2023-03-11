const data = require('../data/zoo_data');

const searchName = (name) => data.employees
  .find(({ firstName, lastName }) => firstName === name || lastName === name);

const getAnimalObj = (employer) => data.species.filter(({ id }) => employer.responsibleFor
  .some((animalID) => animalID === id));

const getAllEmployeesCoverage = () => data.employees.map((employer) => {
  const animalsObj = getAnimalObj(employer);
  const locations = animalsObj.map(({ location }) => location);
  return { id: employer.id,
    fullName: `${employer.firstName} ${employer.lastName}`,
    species: animalsObj.map(({ name }) => name),
    locations };
});

const validateID = (idParam) => {
  if (!data.employees
    .find(({ id }) => id === idParam)) {
    throw new Error('Informações inválidas');
  }
};

const validatName = (name) => {
  if (!searchName(name)) {
    throw new Error('Informações inválidas');
  }
};

const getEmployeesCoverageByName = (employeNameParam) => {
  const employer = searchName(employeNameParam);
  const animalsObj = getAnimalObj(employer);
  return { id: employer.id,
    fullName: `${employer.firstName} ${employer.lastName}`,
    species: animalsObj.map(({ name }) => name),
    locations: animalsObj.map(({ location }) => location) };
};

const getEmployeesCoverageByID = (paramID) => {
  const employer = data.employees.find(({ id }) => id === paramID);
  const animalsObj = getAnimalObj(employer);
  return { id: employer.id,
    fullName: `${employer.firstName} ${employer.lastName}`,
    species: animalsObj.map(({ name }) => name),
    locations: animalsObj.map(({ location }) => location) };
};

const getEmployeesCoverage = (param) => {
  // seu código aqui
  if (param === undefined) {
    return getAllEmployeesCoverage();
  }
  if (param.name) {
    validatName(param.name);
    return getEmployeesCoverageByName(param.name);
  }
  if (param.id) {
    validateID(param.id);
    return getEmployeesCoverageByID(param.id);
  }
};
console.log(getEmployeesCoverage({ name: 'Spry' }));
module.exports = getEmployeesCoverage;
