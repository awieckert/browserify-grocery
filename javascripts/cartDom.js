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
    stringToPrint += `<td><button class='btn btn-danger'><span class='glyphicon glyphicon-trash'></span></button></td>`;
    stringToPrint +=  `</tr>`;
  });
  stringToPrint +=  `</table>`;
  stringToPrint += getTotal(Items);
  stringToPrint +=  `</div>`;
  return stringToPrint;
};

const getTotal = (items) => {
  let itemTotal = 0;
  let priceTotal = 0;
  items.forEach((item) => {
    itemTotal += (item.purchaseNum * 1);
    priceTotal += (item.purchaseNum * item.price);
  });
  return totalsString(itemTotal, priceTotal);
};

const totalsString = (itemNum, total) => {
  let stringToPrint = '';
  stringToPrint += `<h2>Total Number of Items: ${itemNum}</h2>`;
  stringToPrint += `<h2>Total price: $${total.toFixed(2)}</h2>`;
  return stringToPrint;
};

const printCartToDom = () => {
  const cartItems = data.getCart();
  cartOutputDiv.innerHTML = cartDomString(cartItems);
};

module.exports = printCartToDom;
