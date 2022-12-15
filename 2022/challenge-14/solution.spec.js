import { getOptimalPath, getOptimalPathRecursive, getOptimalPathAlt } from './solution';

describe('Challenge 14: The best path', () => {
  describe('getOptimalPath(...)', () => {
    const testCases = [
      createTestCase([[[0], [7, 4], [2, 4, 6]]], 8, 'should return the optimal path (1)'),
      createTestCase([[[0], [2, 3]]], 2, 'should return the optimal path (2)'),
      createTestCase([[[0], [3, 4], [9, 8, 1]]], 5, 'should return the optimal path (3)'),
      createTestCase([[[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]], 8, 'should return the optimal path (4)'),
      createTestCase(
        [[[1], [1, 5], [7, 5, 8], [9, 4, 1, 3], [-1, -1, -1, -1, -1]]],
        7,
        'should return the optimal path (5)'
      )
    ];

    it('#T should return a number', () => {
      const path = [[0], [2, 3]];
      expect(typeof getOptimalPath(path)).toBe('number');
      expect(typeof getOptimalPathRecursive(path)).toBe('number');
      expect(typeof getOptimalPathAlt(path)).toBe('number');
    });

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(getOptimalPath(...args)).toEqual(expected);
      expect(getOptimalPathRecursive(...args)).toEqual(expected);
      expect(getOptimalPathAlt(...args)).toEqual(expected);
    });
  });
});
