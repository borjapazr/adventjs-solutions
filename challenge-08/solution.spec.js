import { maxProfit, maxProfitLoop, maxProfitReduce } from './solution';

describe('Challenge 08: La locura de las criptomonedas', () => {
  describe('maxProfit(...)', () => {
    const testCases = [
      createTestCase(
        [[39, 18, 29, 25, 34, 32, 5]],
        16,
        'should return a positive max profit of 16 respecting the timeline'
      ),
      createTestCase([[10, 20, 30, 40, 50, 60, 70]], 60, 'should return a positive max profit of 60'),
      createTestCase(
        [[18, 15, 12, 11, 9, 7]],
        -1,
        'should return -1 because there is no profit respecting the timeline'
      ),
      createTestCase([[3, 3, 3, 3, 3]], -1, 'should return -1 because there is no profit')
    ];

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(maxProfit(...args)).toEqual(expected);
      expect(maxProfitLoop(...args)).toEqual(expected);
      expect(maxProfitReduce(...args)).toEqual(expected);
    });
  });
});
