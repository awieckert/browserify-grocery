const getDepartments = require('./departments.js');

function successFunction () {
  const departmentsData = JSON.parse(this.responseText).departments;
  console.log('Departments Data: ', departmentsData);
};

function errorFunction () {
  console.log('WTF JUST HAPPENED!');
};

const initializer = () => {
  getDepartments(successFunction, errorFunction);
};

module.exports = initializer;
