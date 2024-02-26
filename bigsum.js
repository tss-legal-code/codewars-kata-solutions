function add(a, b) {
  let aIndex = a.length - 1;
  let bIndex = b.length - 1;
  let carry = 0;
  const result = [];
  while (aIndex > -1 || bIndex > -1) {
    const aValue = aIndex > -1 ? +a[aIndex] : 0;
    const bValue = bIndex > -1 ? +b[bIndex] : 0;
    const sum = aValue + bValue + carry;
    const resultingDigit = sum % 10;
    carry = Math.floor(sum / 10);

    result.push(resultingDigit);

    aIndex -= 1;
    bIndex -= 1;
  }
  carry && result.push(carry);
  // reverse result as lower level digits were pushed first
  return result.reverse().join('');
}