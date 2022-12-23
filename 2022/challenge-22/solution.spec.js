import { checkStepNumbers } from './solution';

describe('Challenge 22: The lights in sync', () => {
  describe('checkStepNumbers(...)', () => {
    const testCases = [
      createTestCase(
        [
          ['tree_1', 'tree_2', 'house', 'tree_1', 'tree_2', 'house'],
          [1, 33, 10, 2, 44, 20]
        ],
        true,
        'should return true when step numbers are in strictly increasing order (1)'
      ),
      createTestCase(
        [
          ['tree_1', 'tree_1', 'house'],
          [2, 1, 10]
        ],
        false,
        'should return false when step numbers are not in strictly increasing order (1)'
      ),
      createTestCase(
        [
          ['tree_1', 'tree_1', 'house'],
          [1, 2, 10]
        ],
        true,
        'should return true when step numbers are in strictly increasing order (2)'
      ),
      createTestCase(
        [
          ['house', 'house', 'tree_1', 'tree_1', 'house', 'tree_2', 'tree_2', 'tree_3'],
          [5, 2, 1, 2, 3, 4, 5, 6]
        ],
        false,
        'should return false when step numbers are not in strictly increasing order (2)'
      )
    ];

    it('#T should return a boolean', () => {
      expect(typeof checkStepNumbers([], [])).toBe('boolean');
    });

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(checkStepNumbers(...args)).toEqual(expected);
    });
  });
});
