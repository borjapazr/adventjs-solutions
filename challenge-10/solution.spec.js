import { getCoins, getCoinsMap, getCoinsReduce } from './solution';

describe('Challenge 10: La máquina del cambio', () => {
  describe('getCoints(...)', () => {
    const testCases = [
      createTestCase([51], [1, 0, 0, 0, 0, 1]),
      createTestCase([3], [1, 1, 0, 0, 0, 0]),
      createTestCase([5], [0, 0, 1, 0, 0, 0]),
      createTestCase([16], [1, 0, 1, 1, 0, 0]),
      createTestCase([100], [0, 0, 0, 0, 0, 2])
    ];

    it.each(testCases)('#$# should return $expected when the change is $args.0', ({ args, expected }) => {
      expect(getCoins(...args)).toEqual(expected);
      expect(getCoinsMap(...args)).toEqual(expected);
      expect(getCoinsReduce(...args)).toEqual(expected);
    });
  });
});
