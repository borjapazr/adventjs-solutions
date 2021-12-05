const createXmasTree = height => {
  const treeTrunkHeight = 2;
  let tree = '';
  for (let i = 1; i <= height + treeTrunkHeight; i++) {
    for (let j = 1; j <= height + height - 1; j++) {
      // Tree part
      if (i <= height) {
        if (j <= height - i || j >= height + i) {
          tree += '_';
        } else {
          tree += '*';
        }
      }
      // Trunk part
      if (i > height) {
        if (j === (height * 2) / 2) {
          tree += '#';
        } else {
          tree += '_';
        }
      }
    }
    tree += '\n';
  }
  return tree.trim();
};

const createXmasTreeAlt = height => {
  const treeBody = Array.from({ length: height }, (_, index) =>
    '*'
      .repeat(2 * index + 1)
      .padStart(index + height, '_')
      .padEnd(height * 2 - 1, '_')
      .concat('\n')
  ).join('');

  const treeTrunkHeight = 2;
  const treeTrunk = '#'
    .padStart(height, '_')
    .padEnd(height * 2 - 1, '_')
    .concat('\n')
    .repeat(treeTrunkHeight);
  return treeBody.concat(treeTrunk).trim();
};

console.log(createXmasTree(3));
console.log(createXmasTreeAlt(3));
