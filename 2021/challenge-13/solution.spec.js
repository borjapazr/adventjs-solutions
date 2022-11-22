import { wrapGifts } from './solution';

describe('Challenge 13: Envuelve regalos con asteriscos', () => {
  describe('wrapGifts(...)', () => {
    const testCases = [
      createTestCase([['📷', '⚽️']], ['****', '*📷*', '*⚽️*', '****']),
      createTestCase([['🏈🎸', '🎮🧸']], ['******', '*🏈🎸*', '*🎮🧸*', '******']),
      createTestCase([['📷']], ['****', '*📷*', '****']),
      createTestCase([['📷👕', '🚲']], ['******', '*📷👕*', '**🚲**', '******']),
      createTestCase([[]], [])
    ];

    it.each(testCases)('#$# should return $expected when the gifts are $args.0', ({ args, expected }) => {
      expect(wrapGifts(...args)).toEqual(expected);
    });
  });
});
