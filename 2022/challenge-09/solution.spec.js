import { countTime, countTimeSort, countTimeMap } from './solution';

describe('Challenge 09: Crazy Xmas lights', () => {
  describe('countTime(...)', () => {
    const testCases = [
      createTestCase([[0, 1, 1, 0, 1]], 7, 'should return 7 when the led string is [0, 1, 1, 0, 1]'),
      createTestCase([[0, 0, 0, 1]], 21, 'should return 21 when the led string is [0, 0, 0, 1]'),
      createTestCase([[0, 0, 1, 0, 0]], 28, 'should return 28 when the led string is [0, 0, 1, 0, 0]'),
      createTestCase([[1, 0, 0, 1, 0, 0]], 14, 'should return 14 when the led string is [1, 0, 0, 1, 0, 0]'),
      createTestCase([[1, 1, 0, 0, 0, 0]], 28, 'should return 28 when the led string is [1, 1, 0, 0, 0, 0]'),
      createTestCase([[1, 1, 1]], 0, 'should return 0 when the led string is [1, 1, 1]')
    ];

    it('#T should return a number', () => {
      expect(typeof countTime([0, 0, 1, 0, 0])).toBe('number');
      expect(typeof countTimeMap([0, 0, 1, 0, 0])).toBe('number');
      expect(typeof countTimeSort([0, 0, 1, 0, 0])).toBe('number');
    });

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(countTime(...args)).toEqual(expected);
      expect(countTimeMap(...args)).toEqual(expected);
      expect(countTimeSort(...args)).toEqual(expected);
    });
  });
});
