const getDepartments = require('./departments.js');
const printDepartmentToDom = require('./departmentDom.js');

function successFunction () {
  const departmentsData = JSON.parse(this.responseText).departments;
  console.log('Departments Data: ', departmentsData);
  printDepartmentToDom(departmentsData);
};

function errorFunction () {
  console.log('WTF JUST HAPPENED!');
};

const initializer = () => {
  getDepartments(successFunction, errorFunction);
};

module.exports = initializer;