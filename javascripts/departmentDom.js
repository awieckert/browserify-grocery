const events = require('./events.js');

const departmentsDiv = document.getElementById('departments');

const printDepartmentToDom = (dataToPrint) => {
  departmentsDiv.innerHTML = domString(dataToPrint);
  events.addDepartmentsEvents();
};

const domString = (departmentsArray) => {
  let stringToPrint = '';
  departmentsArray.forEach((item) => {
    stringToPrint += `<div class='col-md-3 department'>`;
    stringToPrint +=  `<h3 class='department-title hide' data-department-id='${item.id}'>${item.name}</h3>`;
    stringToPrint +=  `<img src='${item.img}'>`;
    stringToPrint += `</div>`;
  });
  return stringToPrint;
};

module.exports = printDepartmentToDom;
