const startApplication = require('./dataGatekeeper.js');
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
    // print to cart dom
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
