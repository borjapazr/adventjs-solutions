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

describe('Challenge 04: ¡Es hora de poner la navidad en casa!', () => {
  describe('createXmasTree and createXmasTreeAlt should render', () => {
    it('a christmas tree with height of 1', () => {
      const christmasTreeWithHeightOf1 = '*\n#\n#';
      expect(createXmasTree(1)).toBe(christmasTreeWithHeightOf1);
      expect(createXmasTreeAlt(1)).toBe(christmasTreeWithHeightOf1);
    });

    it('a christmas tree with height of 3', () => {
      const christmasTreeWithHeightOf3 = '__*__\n_***_\n*****\n__#__\n__#__';
      expect(createXmasTree(3)).toBe(christmasTreeWithHeightOf3);
      expect(createXmasTreeAlt(3)).toBe(christmasTreeWithHeightOf3);
    });
  });
});
