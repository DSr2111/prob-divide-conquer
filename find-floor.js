function findFloor(arr, x) {
  const length = arr.length;

  // Base case: If array is empty or x is smaller than the smallest element
  if (length === 0 || x < arr[0]) {
    return -1;
  }

  // If x is greater than or equal to the largest element
  if (x >= arr[length - 1]) {
    return arr[length - 1];
  }

  // Find the middle index
  const mid = Math.floor(length / 2);

  // Check if middle element is floor
  if (arr[mid] === x || (arr[mid] < x && arr[mid + 1] > x)) {
    return arr[mid];
  }

  // Recursively search in the appropriate half
  if (arr[mid] < x) {
    return findFloor(arr.slice(mid + 1), x);
  } else {
    return findFloor(arr.slice(0, mid), x);
  }
}

module.exports = findFloor;
