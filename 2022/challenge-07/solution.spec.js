import { getGiftsToRefill } from './solution';

describe('Challenge 07: Doing gifts inventory', () => {
  describe('getGiftsToRefill(...)', () => {
    const testCases = [
      createTestCase([[], [], []], [], 'should return an empty list if no gifts are given'),
      createTestCase(
        [
          ['a', 'a'],
          ['a', 'a'],
          ['a', 'a']
        ],
        [],
        'should return an empty list if all gifts are in all lists'
      ),
      createTestCase(
        [
          ['a', 'a'],
          ['b', 'b'],
          ['c', 'c']
        ],
        ['a', 'b', 'c'],
        'should return all gifts if none of them are at least in two lists (1)'
      ),
      createTestCase(
        [
          ['a', 'b'],
          ['c', 'd'],
          ['e', 'f']
        ],
        ['a', 'b', 'c', 'd', 'e', 'f'],
        'should return all gifts if none of them are at least in two lists (2)'
      )
    ];

    it('#T should return an array', () => {
      expect(getGiftsToRefill([], [], [])).toBeInstanceOf(Array);
    });

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(getGiftsToRefill(...args)).toEqual(expected);
    });
  });
});
