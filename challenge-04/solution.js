const createXmasTree = height => {
  const [TREE_BODY_SYMBOL, TREE_TRUNK_SYMBOL, BACKGROUND_SYMBOL] = ['*', '#', '_'];

  const treeTrunkHeight = 2;
  let tree = '';
  for (let i = 1; i <= height + treeTrunkHeight; i++) {
    for (let j = 1; j <= height + height - 1; j++) {
      // Tree part
      if (i <= height) {
        if (j <= height - i || j >= height + i) {
          tree += BACKGROUND_SYMBOL;
        } else {
          tree += TREE_BODY_SYMBOL;
        }
      }
      // Trunk part
      if (i > height) {
        if (j === (height * 2) / 2) {
          tree += TREE_TRUNK_SYMBOL;
        } else {
          tree += BACKGROUND_SYMBOL;
        }
      }
    }
    tree += '\n';
  }
  return tree.trim();
};

const createXmasTreeAlt = height => {
  const [TREE_BODY_SYMBOL, TREE_TRUNK_SYMBOL, BACKGROUND_SYMBOL] = ['*', '#', '_'];

  const treeBody = Array.from({ length: height }, (_, index) =>
    TREE_BODY_SYMBOL.repeat(2 * index + 1)
      .padStart(index + height, BACKGROUND_SYMBOL)
      .padEnd(height * 2 - 1, BACKGROUND_SYMBOL)
      .concat('\n')
  ).join('');

  const treeTrunkHeight = 2;
  const treeTrunk = TREE_TRUNK_SYMBOL.padStart(height, BACKGROUND_SYMBOL)
    .padEnd(height * 2 - 1, BACKGROUND_SYMBOL)
    .concat('\n')
    .repeat(treeTrunkHeight);
  return treeBody.concat(treeTrunk).trim();
};

export { createXmasTree, createXmasTreeAlt };
