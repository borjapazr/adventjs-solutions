import { decorateTree } from './solution';

describe('Challenge 15: Decorating the Christmas tree', () => {
  describe('decorateTree(...)', () => {
    const testCases = [
      createTestCase(['B P R P'], ['R', 'P B', 'R B B', 'B P R P'], 'should return a Christmas tree with height 4'),
      createTestCase(['B B'], ['B', 'B B'], 'should return a Christmas tree with height 2'),
      createTestCase(
        ['B B P R P R R'],
        ['B', 'R P', 'B P P', 'P R B R', 'P P B B P', 'B R B B B R', 'B B P R P R R'],
        'should return a Christmas tree with height 7'
      ),
      createTestCase(
        ['R R P R R'],
        ['R', 'R R', 'P B P', 'R B B R', 'R R P R R'],
        'should return a Christmas tree with height 5'
      )
    ];

    it('#T should return an string', () => {
      expect(decorateTree('')).toBeInstanceOf(Array);
    });

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(decorateTree(...args)).toEqual(expected);
    });
  });
});
