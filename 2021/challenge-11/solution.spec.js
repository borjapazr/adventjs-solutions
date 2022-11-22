import { shouldBuyFidelity, shouldBuyFidelityRecursive, shouldBuyFidelityLoop } from './solution';

describe('Challenge 11: ¿Vale la pena la tarjeta fidelidad del cine?', () => {
  describe('shouldBuyFidelity(...)', () => {
    const testCases = [
      createTestCase([1], false, 'should return false when the fidelity card is not worth it'),
      createTestCase([100], true, 'should return false when the fidelity card is worthwhile')
    ];

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(shouldBuyFidelity(...args)).toEqual(expected);
      expect(shouldBuyFidelityRecursive(...args)).toEqual(expected);
      expect(shouldBuyFidelityLoop(...args)).toEqual(expected);
    });
  });
});
