import { sortToys } from './solution';

describe('Challenge 19: Sorting the toys!', () => {
  describe('sortToys(...)', () => {
    const testCases = [
      createTestCase(
        [
          ['ball', 'doll', 'car', 'puzzle'],
          [2, 3, 1, 0]
        ],
        ['puzzle', 'car', 'ball', 'doll'],
        'should return the toys sorted by their positions (1)'
      ),
      createTestCase(
        [
          ['pc', 'xbox', 'ps4', 'switch', 'nintendo'],
          [3, 1, 0, 2, 4]
        ],
        ['ps4', 'xbox', 'switch', 'pc', 'nintendo'],
        'should return the toys sorted by their positions (2)'
      ),
      createTestCase(
        [
          ['pc', 'xbox', 'ps4', 'switch', 'nintendo'],
          [8, 6, 5, 7, 9]
        ],
        ['ps4', 'xbox', 'switch', 'pc', 'nintendo'],
        'should return the toys sorted by their positions (3)'
      ),
      createTestCase(
        [
          ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l'],
          [1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1111]
        ],
        ['l', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k'],
        'should return the toys sorted by their positions (4)'
      )
    ];

    it('#T should return an array', () => {
      expect(sortToys([], [])).toBeInstanceOf(Array);
    });

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(sortToys(...args)).toEqual(expected);
    });
  });
});
