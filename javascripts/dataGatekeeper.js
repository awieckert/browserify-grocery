const getDepartments = require('./departments.js');
const printDepartmentToDom = require('./departmentDom.js');
const data = require('./data.js');

function successFunction () {
  const departmentsData = JSON.parse(this.responseText).departments;
  data.setDepartments(departmentsData);
  printDepartmentToDom(departmentsData);
};

function errorFunction () {
  console.log('WTF JUST HAPPENED!');
};

const initializer = () => {
  getDepartments(successFunction, errorFunction);
};

module.exports = initializer;
