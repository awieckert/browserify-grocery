const data = require('./data.js');

const cartOutputDiv = document.getElementById('cart');

const cartDomString = (Items) => {
  let stringToPrint = '';
  stringToPrint += '<h3>Your Cart</h3>';
  stringToPrint += `<div class='col-xs-8 col-xs-offset-2'>`;
  stringToPrint += `<table class='table table-striped'>`;
  stringToPrint +=  `<tr>`;
  stringToPrint +=    `<th>Name</th>`;
  stringToPrint +=    `<th>Price</th>`;
  stringToPrint +=    `<th>Quantity</th>`;
  stringToPrint +=    `<th></th>`;
  stringToPrint +=  `</tr>`;
  Items.forEach((item) => {
    stringToPrint +=  `<tr>`;
    stringToPrint += `<td>${item.name}</td>`;
    stringToPrint += `<td>$${item.price.toFixed(2)}</td>`;
    stringToPrint += `<td>${item.purchaseNum}</td>`;
    stringToPrint += `<td>X</td>`;
    stringToPrint +=  `</tr>`;
  });
  stringToPrint +=  `</table>`;
  stringToPrint +=  `</div>`;
  return stringToPrint;
};

const printCartToDom = () => {
  const cartItems = data.getCart();
  cartOutputDiv.innerHTML = cartDomString(cartItems);
};

module.exports = printCartToDom;
