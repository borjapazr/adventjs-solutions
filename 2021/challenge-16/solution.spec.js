import { decodeNumber } from './solution';

describe('Challenge 16: Descifrando los números...', () => {
  describe('decodeNumber(...)', () => {
    const testCases = [
      createTestCase(['...'], 3),
      createTestCase(['.,'], 4),
      createTestCase([',.'], 6),
      createTestCase([',...'], 8),
      createTestCase(['.........!'], 107),
      createTestCase(['.;'], 49),
      createTestCase(['..,'], 5),
      createTestCase(['..,!'], 95),
      createTestCase(['.;!'], 49),
      createTestCase(['!!!'], 300),
      createTestCase([';!'], 50),
      createTestCase([';.W'], NaN)
    ];

    it.each(testCases)('#$# should return $expected when the encrypted letter is $args.0', ({ args, expected }) => {
      expect(decodeNumber(...args)).toEqual(expected);
    });
  });
});
