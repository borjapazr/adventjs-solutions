import { pangram, pangramAlt } from './solution';

describe('Challenge 20: ¿Una carta de pangramas? ¡QUÉ!', () => {
  describe('pangram(...)', () => {
    const testCases = [
      createTestCase(['Extraño pan de col y kiwi se quemó bajo fugaz vaho'], true),
      createTestCase(['Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!'], true),
      createTestCase(['Esto es una frase larga pero no tiene todas las letras del abecedario'], false),
      createTestCase(['De la a a la z, nos faltan letras'], false)
    ];

    it.each(testCases)('#$# should return $expected when we the letter is $args.0', ({ args, expected }) => {
      expect(pangram(...args)).toEqual(expected);
      expect(pangramAlt(...args)).toEqual(expected);
    });
  });
});
