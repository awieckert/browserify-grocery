const getDepartments = (successFunction, errorFunction) => {
  const myRequest = new XMLHttpRequest;
  myRequest.addEventListener('load', successFunction);
  myRequest.addEventListener('error', errorFunction);
  myRequest.open('GET', '../db/departments.json');
  myRequest.send();
};

module.exports = getDepartments;
