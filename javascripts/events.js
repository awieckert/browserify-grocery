const data = require('./data.js');
const printToDom = require('./itemsDom.js');

const departmentContainerDiv = document.getElementById('departments');
const departmentCards = document.getElementsByClassName('department');

const showDepartmentName = (e) => {
  const departmentImg = e.target.children[1];
  const departmentName = e.target.children[0];

  departmentName.classList.remove('hide');
  departmentImg.classList.add('grey-out');
};

const hideDepartmentName = (e) => {
  const departmentImg = e.target.children[1];
  const departmentName = e.target.children[0];

  departmentName.classList.add('hide');
  departmentImg.classList.remove('grey-out');
};

const showItems = (e) => {
  const departmentId = e.target.previousSibling.dataset.departmentId;
  const selectedItems = data.getItemsByDepartment(departmentId);
  departmentContainerDiv.innerHTML = '';
  printToDom(selectedItems);
};

const addDepartmentsEvents = () => {
  for (let i = 0; i < departmentCards.length; i++) {
    departmentCards[i].addEventListener('mouseenter', showDepartmentName);
    departmentCards[i].addEventListener('mouseleave', hideDepartmentName);
    departmentCards[i].addEventListener('click', showItems);
  }
};

module.exports = {
  addDepartmentsEvents,
};
