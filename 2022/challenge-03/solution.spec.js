import { distributeGifts, distributeGiftsAlt } from './solution';

describe('Challenge 03: How many packs of gifts can Santa carry?', () => {
  describe('distributeGifts(...)', () => {
    const testCases = [
      createTestCase(
        [
          ['a', 'b', 'c'],
          ['d', 'e']
        ],
        1,
        'should return 1 when Santa has 3 gifts with total weight of 3 and 2 reindeers whose weight limit is 4'
      ),
      createTestCase([['videogames', 'console'], ['midu']], 0, "should return 0 if reindeers can't carry any pack"),
      createTestCase(
        [
          ['game', 'videoconsole', 'computer'],
          ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd']
        ],
        5,
        'should return 5 when Santa has 3 gifts with total weight of 24 and 8 reindeers whose weight limit is 134'
      ),
      createTestCase(
        [
          ['music'],
          ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd']
        ],
        26,
        'should return 26 when Santa has 1 gift with total weight of 5 and 8 reindeers whose weight limit is 134'
      )
    ];

    it('#T should return a number', () => {
      expect(typeof distributeGifts([], [])).toBe('number');
      expect(typeof distributeGiftsAlt([], [])).toBe('number');
    });

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(distributeGifts(...args)).toEqual(expected);
      expect(distributeGiftsAlt(...args)).toEqual(expected);
    });
  });
});
