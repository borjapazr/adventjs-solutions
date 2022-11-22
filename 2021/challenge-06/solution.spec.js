import { sumPairs } from './solution';

describe('Challenge 06: Rematando los exámenes finales', () => {
  describe('sumPairs(...)', () => {
    const testCases = [
      createTestCase([[3, 5, 7, 2], 10], [3, 7], 'should return the tuple [3, 7] to sum to 10'),
      createTestCase(
        [[-3, -2, 7, -5], 10],
        null,
        'should return null because there is no combination that adds up to 10'
      ),
      createTestCase([[2, 2, 3, 2, 1], 4], [2, 2], 'should return the tuple [2, 2] to sum to 4'),
      createTestCase(
        [[6, 7, 1, 2], 8],
        [6, 2],
        'should return the tuple [6, 2] to sum to 8 and validate that the first element is the left-most one'
      ),
      createTestCase([[0, 2, 2, 3, -1, 1, 5], 6], [1, 5], 'should return the tuple [1, 5] to sum to 6')
    ];

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(sumPairs(...args)).toEqual(expected);
    });
  });
});
