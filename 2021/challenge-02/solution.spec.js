import { listGifts } from './solution';

describe('Challenge 02: ¡Ayuda al elfo a listar los regalos!', () => {
  describe('listGifts(..)', () => {
    const testCases = [
      createTestCase(
        ['bici coche balón _playstation bici coche peluche'],
        {
          bici: 2,
          coche: 2,
          balón: 1,
          peluche: 1
        },
        'should count the gifts and dispense with those beginning with _'
      )
    ];

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(listGifts(...args)).toEqual(expected);
    });
  });
});
