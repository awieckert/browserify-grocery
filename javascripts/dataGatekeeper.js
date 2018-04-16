const getDepartments = require('./departments.js');
const loadItems = require('./items.js');
const printDepartmentToDom = require('./departmentDom.js');
const data = require('./data.js');

function whenItemsLoad () {
  const itemsData = JSON.parse(this.responseText).items;
  console.log('itemsData: ', itemsData);
};

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
  loadItems(whenItemsLoad, errorFunction);
};

module.exports = initializer;
