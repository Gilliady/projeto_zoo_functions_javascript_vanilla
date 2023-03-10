const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const isManager = (id) => employees
  .some((employee) => employee.managers
    .find((managerID) => managerID === id));

const getRelatedEmployees = (managerId) => {
  // seu código aqui
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    return employees.filter((employee) => employee.managers
      .find((employeeManagerId) => employeeManagerId === managerId))
      .reduce((fullNameArray, employer) => {
        fullNameArray.push(`${employer.firstName} ${employer.lastName}`);
        return fullNameArray;
      }, []);
  }
};
module.exports = { isManager, getRelatedEmployees };
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
