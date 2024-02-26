// https://www.codewars.com/kata/551f23362ff852e2ab000037/train/javascript

function longestSlideDown(pyramid) {
  const pyramidCopy = JSON.parse(JSON.stringify(pyramid));
  for (let i = 1; i < pyramidCopy.length; ++i) {
    for (let k = 0; k < pyramidCopy[i].length; ++k) {
      pyramidCopy[i][k] += Math.max(pyramidCopy[i - 1][k - 1] || 0, pyramidCopy[i - 1][k] || 0);
    }
  }

  return Math.max(...pyramidCopy[pyramidCopy.length - 1]);
}


