// https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa/train/javascript
https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa/solutions/javascript // solutions ))
/**
 * @param {number} t - max trevel distance
 * @param {number} k - number of cities
 * @param {number[]} ls - list of distances
 * @returns 
 */
function chooseBestSum(t, k, ls) {
  // initial input checks
  if (t <= 0 || k < 1 || ls.length < 1 || ls.length < k) return null;

  // corner case: check if minimal travel distance is satisfactory
  const minT = [...ls].sort((a, b) => a - b).slice(0, k).reduce((s, n) => s + n);
  if (minT > t) return null;

  // compute result
  return Math.max(...getCombinations([...ls], k)
    .map(arr => arr.reduce((acc, n) => acc + n))
    .filter(s => s <= t));

}

/**
 * general-purpose (reusable) function to get combinations
 * @param {any[]} array - an array of values to be used as source for combinations
 * @param {number} length - desired length of each combination
 * @param {any[]} [acc] - for internal use only
 * @param {number} [start] - for internal use only 
 * @param {any[]} [current] - for internal use only
 * @returns 
 */
function getCombinations(array, length, acc = [], start = 0, current = []) {
  if (current.length === length) {
    acc.push([...current]);
    return;
  }

  // use each distance only once
  for (let index = start; index < array.length; index++) {
    current.push(array[index]);
    // push next items to current array
    getCombinations(array, length, acc, index + 1, current);
    // release "slot" for next distance item (at this level of recursion)
    current.pop();
  }

  // actually returned AND used only at the initial level of recursion
  return acc;
}












function chooseBestSum(t, k, ls) {
  let arr = [];

  function rec(sum, ar, n) {
    if (n == 0) {
      arr.push(sum);
    } else {
      for (let i = 0; i < ar.length; i++) {
        rec(sum + ar[i], ar.slice(i + 1), n - 1);
      }
    }
  }

  rec(0, ls, k);

  var sol = arr.sort((a, b) => b - a).find(a => a <= t);
  return typeof sol === 'undefined' ? null : sol;
}


const chooseBestSum = (t, k, ls) =>
  ls.reduce((pre, val) => [...pre, ...pre.filter(val => val.length < k).map(v => [...v, val])], [[]])
    .filter(val => val.length === k)
    .map(val => val.reduce((pre, val) => pre + val))
    .filter(val => val <= t)
    .sort((a, b) => a - b).pop() || null;