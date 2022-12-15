const getOptimalPath = path => {
  const getOptimalPathRecursive = (row, column) => {
    if (row === path.length - 1) {
      return path[row][column];
    }

    const left = getOptimalPathRecursive(row + 1, column);
    const right = getOptimalPathRecursive(row + 1, column + 1);

    return path[row][column] + Math.min(left, right);
  };

  return getOptimalPathRecursive(0, 0);
};

const getOptimalPathRecursive = path => {
  const pathCopy = path.map(row => row.slice());

  for (let i = pathCopy.length - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      pathCopy[i][j] += Math.min(pathCopy[i + 1][j], pathCopy[i + 1][j + 1]);
    }
  }

  return pathCopy[0][0];
};

const getOptimalPathAlt = path => {
  return path.reduceRight((previous, current) => {
    return current.map((val, index) => {
      return val + Math.min(previous[index], previous[index + 1]);
    });
  })[0];
};

export { getOptimalPath, getOptimalPathRecursive, getOptimalPathAlt };
