let departments = [];
let items = [];
const cart = [];

const getDepartments = () => {
  return departments;
};

const setDepartments = (departmentsArray) => {
  departments = departmentsArray;
};

const setItems = (itemsArray) => {
  items = itemsArray;
};

const getItems = () => {
  return items;
};

const getItemsByDepartment = (departmentId) => {
  const selectedItems = [];
  items.forEach((item) => {
    if (item.departmentId === departmentId) {
      selectedItems.push(item);
    }
  });
  return selectedItems;
};

const setCart = (itemToAdd, numberToAdd) => {
  const itemPosition = items.map(function (item) {
    return item.id;
  }).indexOf(itemToAdd);

  const newItem = items[itemPosition];
  newItem.purchaseNum = numberToAdd;
  cart.push(newItem);
};

const getCart = () => {
  return cart;
};

module.exports = {
  getDepartments,
  setDepartments,
  setItems,
  getItems,
  getItemsByDepartment,
  setCart,
  getCart,
};
