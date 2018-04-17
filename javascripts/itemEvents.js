const data = require('./data.js');

const itemCards = document.getElementsByClassName('item-add');

const addItems = (e) => {
  const numberToAdd = e.target.parentNode.parentNode.children[1].children[0].children[0].children[1].value;
  const itemToAdd = e.target.parentNode.parentNode.parentNode.children[0].children[0].dataset.itemId;
  data.setCart(itemToAdd, numberToAdd);
};

const addItemEvents = () => {
  for (let i = 0; i < itemCards.length; i++) {
    itemCards[i].addEventListener('click', addItems);
  }
};

module.exports = addItemEvents;
