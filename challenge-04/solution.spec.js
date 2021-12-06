import { createXmasTree, createXmasTreeAlt } from './solution';

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
