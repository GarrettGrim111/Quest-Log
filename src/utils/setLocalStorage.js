const setLocalStorage = (data, item) => {
  const localStorageItem = JSON.parse(localStorage.getItem(item));
  const array = [];

  // At first, in local storage is nothing, we have nothing to iterate and push, if there anything iterate through elements
  if (localStorageItem !== null) {
    for (let data of localStorageItem) {
      array.push(data);
    }
  }

  array.push(data);
  localStorage.setItem(item, JSON.stringify(array));
};

export default setLocalStorage;
