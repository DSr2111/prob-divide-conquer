function findRotationCount(arr) {
  const length = arr.length;

  if (length <= 1) {
    return 0;
  }

  if (arr[0] < arr[length - 1]) {
    return 0;
  }

  const mid = Math.floor(length / 2);

  if (arr[mid] > arr[length - 1]) {
    return mid + findRotationCount(arr.slice(mid));
  } else {
    return findRotationCount(arr.slice(0, mid + 1));
  }
}

module.exports = findRotationCount;
