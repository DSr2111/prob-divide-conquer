function sortedFrequency(arr, target) {
  // Base case: If the array is empty
  if (arr.length === 0) {
    return 0;
  }

  // Base case: If the array has only one element
  if (arr.length === 1) {
    return arr[0] === target ? 1 : 0;
  }

  // Find the middle index
  const mid = Math.floor(arr.length / 2);

  // Recursively search left and right halves
  const leftCount = sortedFrequency(arr.slice(0, mid), target);
  const rightCount = sortedFrequency(arr.slice(mid), target);

  // Merge the results
  return leftCount + rightCount;
}

module.exports = sortedFrequency;
