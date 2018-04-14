const getDepartments = require('./departments.js');
const printToDom = require('./dom.js');

function successFunction () {
  const departmentsData = JSON.parse(this.responseText).departments;
  console.log('Departments Data: ', departmentsData);
  printToDom(departmentsData);
};

function errorFunction () {
  console.log('WTF JUST HAPPENED!');
};

const initializer = () => {
  getDepartments(successFunction, errorFunction);
};

module.exports = initializer;
