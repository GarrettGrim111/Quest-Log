const setLocalStorage = (item) => {
  const prevLocalStorage = JSON.parse(localStorage.getItem("items"));
  const data = [];

  // At first, in local storage is nothing, we have nothing to iterate and push, if there anything iterate through elements
  if (prevLocalStorage !== null) {
    for (let item of prevLocalStorage) {
      data.push(item);
    }
  }

  // Add new item object to the beginning -
  // add new items to previous complete local storage (default is compplete substitude of local storage)
  data.push(item);
  localStorage.setItem("items", JSON.stringify(data));
};

export default setLocalStorage;
