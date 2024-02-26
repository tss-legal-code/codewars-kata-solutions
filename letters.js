// https://www.codewars.com/kata/5629db57620258aa9d000014/train/javascript
function mix(s1, s2) {
  const allChars = [];
  const getFrequencies = str => str
    .replace(/[^a-z]/g, '')
    .split('')
    .reduce((acc, k, ind, arr) => {
      acc[k] = acc[k] ? acc[k] + 1 : 1;
      if (ind === arr.length - 1) {
        // on the last iteration clean the acc: we will not consider letters 
        // when the maximum of their occurrences is less than or equal to 1
        Object.keys(acc).forEach(k => {
          if (acc[k] === 1) delete acc[k];
          else if (!allChars.includes(k)) allChars.push(k);
        });
      }
      return acc;
    }, {});
  const sepNext = '/';
  const sepMax = ':';
  const f1 = getFrequencies(s1);
  const f2 = getFrequencies(s2);

  return allChars
    .reduce((acc, char) => {
      const countF1 = f1[char] || 0;
      const countF2 = f2[char] || 0;
      const sign = countF1 === countF2 ? '=' : countF1 > countF2 ? '1' : '2';
      const count = Math.max(countF1, countF2);
      acc.push([sign, char, count]);
      return acc;
    }, [])
    // sort by chars [1]
    .sort((a, b) => a[1] < b[1] ? -1 : 1)
    // sort by sign [0]
    .sort((a, b) => {
      // numbers go first
      if (['1', '2'].includes(a[0]) && ['1', '2'].includes(b[0])) return a[0] - b[0];
      if (a[0] === "=" && b[0] !== '=') return 1;
      if (a[0] !== "=" && b[0] === '=') return -1;
      return 0;
    })
    // sort by count [2]
    .sort((a, b) => b[2] - a[2])
    .map(([sign, char, count]) => [sign, char.repeat(count)].join(sepMax))
    .join(sepNext);
}
