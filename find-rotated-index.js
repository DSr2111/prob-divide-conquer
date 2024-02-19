function findRotatedIndex() {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === num) {
      return middle;
    }

    if (arr[start] <= arr[middle]) {
      if (num >= arr[start] && num < arr[mid]) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    } else {
      if (num > arr[middle] && num <= arr[end]) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }
  }
  return -1;
}

module.exports = findRotatedIndex;
