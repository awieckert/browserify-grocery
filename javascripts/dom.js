const departmentsDiv = document.getElementById('departments');

const printToDom = (dataToPrint) => {
  departmentsDiv.innerHTML = domString(dataToPrint);
};

const domString = (departmentsArray) => {
  let stringToPrint = '';
  departmentsArray.forEach((item) => {
    stringToPrint += `<div class='col-md-3 department'>`;
    stringToPrint +=  `<h3 class='hide'>${item.name}</h3>`;
    stringToPrint +=  `<img src='${item.img}'>`;
    stringToPrint += `</div>`;
  });
  return stringToPrint;
};

module.exports = printToDom;
