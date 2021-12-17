import { countPackages } from './solution';

describe('Challenge 17: La locura de enviar paquetes en esta época...', () => {
  describe('countPackages(...)', () => {
    const testCases = [
      createTestCase(
        [
          [
            ['dapelu', 5, ['midu', 'jelowing']],
            ['midu', 2, []],
            ['jelowing', 2, []]
          ],
          'dapelu'
        ],
        9,
        ''
      ),
      createTestCase(
        [
          [
            ['lolivier', 8, ['camila', 'jesuspoleo']],
            ['camila', 5, ['sergiomartinez', 'conchaasensio']],
            ['jesuspoleo', 4, []],
            ['sergiomartinez', 4, []],
            ['conchaasensio', 3, ['facundocapua', 'faviola']],
            ['facundocapua', 2, []],
            ['faviola', 1, []]
          ],
          'camila'
        ],
        15,
        ''
      )
    ];

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(countPackages(...args)).toEqual(expected);
    });
  });
});
