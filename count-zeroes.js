function countZeroes() {
  if (arr.length === 1) {
    return arr[0] === 0 ? 1 : 0;
  }

  const middle = Math.floor(arr.length / 2);
  const leftZeroes = countZeroes(arr.slice(0, middle));
  const rightZeroes = countZeroes(arr.slice(middle));

  return leftZeroes + rightZeroes;
}

module.exports = countZeroes;
