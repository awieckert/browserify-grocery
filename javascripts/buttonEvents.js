const startApplication = require('./dataGatekeeper.js');
const cartDom = require('./cartDom.js');
const goToDepartments = document.getElementById('go-to-departments');
const departmentsDiv = document.getElementById('departments');
const itemsDiv = document.getElementById('items');
const cartDiv = document.getElementById('cart');
const cartButton = document.getElementById('go-to-cart');

const cartButtonEvent = () => {
  cartButton.addEventListener('click',  () => {
    departmentsDiv.innerHTML = '';
    itemsDiv.innerHTML = '';
    cartDiv.innerHTML = '';
    cartDom();
  });
};

const departmentsButton = () => {
  goToDepartments.addEventListener('click', () => {
    departmentsDiv.innerHTML = '';
    itemsDiv.innerHTML = '';
    cartDiv.innerHTML = '';
    startApplication();
  });
};

module.exports = {
  departmentsButton,
  cartButtonEvent,
};
