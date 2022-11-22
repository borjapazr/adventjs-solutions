import { checkIsSameTree } from './solution';

describe('Challenge 24: Comparando árboles de Navidad', () => {
  describe('checkIsSameTree(...)', () => {
    const treeOne = {
      value: 1,
      left: { value: 2, left: null, right: null },
      right: { value: 3, left: null, right: null }
    };

    const treeTwo = {
      value: 1,
      left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
      right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
    };

    const testCases = [
      createTestCase([treeOne, treeOne], true, 'should return true because treeOne is being compared with itself'),
      createTestCase([treeOne, treeTwo], false, 'should return false because treeOne is being compared with treeTwo'),
      createTestCase([treeTwo, treeTwo], true, 'should return true because treeTwo is being compared with itself')
    ];

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(checkIsSameTree(...args)).toEqual(expected);
    });
  });
});
