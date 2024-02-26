// https://www.codewars.com/kata/55aa075506463dac6600010d/train/javascript

function getDivisors(number) {
  const result = {};
  const middle = number / 2 ^ 0 || 1;
  for (let i = 1; i <= middle; ++i) {
    if (number % i === 0) {
      result[i] = result[number / i] = null;
    }
  }
  return Object.keys(result);
};

function listSquared(m, n) {
  const result = [];
  for (let i = m; i < n; ++i) {
    const divisors = getDivisors(i);
    const sum = divisors.reduce((acc, divisor) => acc + divisor ** 2, 0);
    const root = Math.floor(Math.sqrt(sum));
    debugger;
    // console.log("🚀 ~ ", i, divisors, sum, root)
    if (root * root === sum) {
      result.push([i, sum]);
      // console.log("🚀 ~ [i, sum]:", [i, sum])
    }
  }
  return result;
}