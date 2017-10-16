// ret array asc order
// "arr": [
// {
//   "item": "Name",
//   ...
// },...

const arr_sortValue = function (item, arr) {
 this.item = item;

  arr.sort((a, b) => {
    let itemToSort = this.item;
    let tempA = a[itemToSort].toUpperCase();
    let tempB = b[itemToSort].toUpperCase();
    if (tempA < tempB) {
      return -1;
    }
    if (tempA > tempB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
  return arr;
};

export {arr_sortValue};