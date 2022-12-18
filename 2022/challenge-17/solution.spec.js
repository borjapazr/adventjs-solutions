import { carryGifts } from './solution';

describe('Challenge 17: Carrying gifts in bags', () => {
  describe('carryGifts(...)', () => {
    const testCases = [
      createTestCase([['game', 'bike', 'book', 'toy'], 10], ['game bike', 'book toy'], 'should return three bags (1)'),
      createTestCase(
        [['game', 'bike', 'book', 'toy'], 7],
        ['game', 'bike', 'book toy'],
        'should return three bags (2)'
      ),
      createTestCase(
        [['game', 'bike', 'book', 'toy'], 4],
        ['game', 'bike', 'book', 'toy'],
        'should return four bags (1)'
      ),
      createTestCase(
        [['toy', 'gamme', 'toy', 'bike'], 6],
        ['toy', 'gamme', 'toy', 'bike'],
        'should return four bags (2)'
      ),
      createTestCase([['toy', 'toy', 'toy', 'toy'], 2], [], 'should return four bags (3)'),
      createTestCase(
        [['toy', 'toy', 'disk', 'disk', 'toy', 'toy'], 7],
        ['toy toy', 'disk', 'disk toy', 'toy'],
        'should return four bags (4)'
      )
    ];

    it('#T should return an array', () => {
      expect(carryGifts([], 1)).toBeInstanceOf(Array);
    });

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(carryGifts(...args)).toEqual(expected);
    });
  });
});
