function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return merge(left, right);

    function merge(left, right) {
      if (left.length > 1) {
        return mergeSort(left);
      } else if (right.length > 1) {
        return mergeSort(right);
      } else {
        return compare(left, right);
      }
      function compare(left, right) {
        const sortedArray = [];
        if (left[0] > right[0]) {
          sortedArray.push(right[0]);
          sortedArray.push(left[0]);
        } else {
          sortedArray.push(left[0]);
          sortedArray.push(right[0]);
        }
        return sortedArray;
      }
    }
  }
}

const myArray = mergeSort([6, 4, 3, 6, 8]);

console.log(myArray);
