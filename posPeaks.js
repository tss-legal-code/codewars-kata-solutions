https://www.codewars.com/kata/5279f6fe5ab7f447890006a7/train/javascript
function pickPeaks(arr) {
  const getPadding = arr => {
    let count = 0;
    for (const item of arr) {
      if (item === arr[0]) ++count;
      else break;
    }
    return count;
  };

  const start = getPadding(arr);
  const end = arr.length - 1 - getPadding([...arr].reverse());
  debugger;
  return arr.reduce((acc, curr, i) => {
    if (i < start || i > end) return acc;
    if (arr[i - 1] < curr && curr >= arr[i + 1]) {
      acc.pos.push(i);
      acc.peaks.push(curr);
    }
    return acc;
  }, { pos: [], peaks: [] });
}

function pickPeaks(arr) {
  return arr
    // store original indexes
    .map((value, index) => [value, index])
    // get rid of consequent duplicates (plateu)
    .filter((item, index, array) => item[0] !== (array[index - 1] || [])[0])
    // find items which are "higher" than direct neighbours
    .reduce((acc, curr, index, array) => {
      // skip beginning and ending
      if (index === 0 || index === array.length - 1) return acc;
      // actually detect and store "peaks"
      if (array[index - 1][0] < curr[0] && curr[0] > array[index + 1][0]) {
        acc.peaks.push(curr[0]);
        acc.pos.push(curr[1]);
      }
      return acc;
    }, { pos: [], peaks: [] });
}