import { getMaxGifts } from './solution';

describe("Challenge 05: Optimizing Santa's trips", () => {
  describe('getMaxGifts(...)', () => {
    const testCases = [
      createTestCase([[12, 3, 11, 5, 7], 20, 3], 20, 'should return the maximum number of gifts that can be delivered'),
      createTestCase(
        [[50], 15, 1],
        0,
        'should return 0 if the maximum number of gifts allowed is less than the number of gifts in the city with minimum gifts'
      ),
      createTestCase(
        [[50], 100, 1],
        50,
        'should return the number of gifts in the city with minimum gifts because the maximum number of gifts allowed is greater than the number of gifts in the city with minimum gifts'
      ),
      createTestCase(
        [[50, 70], 100, 1],
        70,
        'should return the number of gifts in the city with maximum gifts because the maximum number of gifts allowed is greater than the number of gifts in the city with maximum gifts'
      ),
      createTestCase(
        [[50, 70, 30], 100, 2],
        100,
        'should return the maximum number of gifts that can be delivered when the maximum number of cities is 2'
      ),
      createTestCase(
        [[50, 70, 30], 100, 3],
        100,
        'should return the maximum number of gifts that can be delivered when the maximum number of cities is 3'
      ),
      createTestCase(
        [[50, 70, 30], 100, 4],
        100,
        'should return the maximum number of gifts that can be delivered when the maximum number of cities is 4'
      ),
      createTestCase(
        [[50, 10, 40, 1000, 500, 200], 199, 4],
        100,
        'should return 100 when the maximum number of cities is 4'
      ),
      createTestCase(
        [[50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000],
        115,
        'should return 115 when the maximum number of cities is 1000'
      )
    ];

    it('#T should return a number', () => {
      expect(typeof getMaxGifts([50], 15, 1)).toBe('number');
    });

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(getMaxGifts(...args)).toEqual(expected);
    });
  });
});
