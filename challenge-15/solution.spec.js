import { checkSledJump } from './solution';

describe('Challenge 15: El salto perfecto', () => {
  describe('checkSledJump(...)', () => {
    const testCases = [
      createTestCase([[1, 2, 3, 2, 1]], true),
      createTestCase([[0, 1, 0]], true),
      createTestCase([[0, 3, 2, 1]], true),
      createTestCase([[0, 1000, 1]], true),
      createTestCase([[2, 4, 4, 6, 2]], false),
      createTestCase([[1, 2, 3]], false),
      createTestCase([[1, 2, 3, 2, 1, 2, 3]], false),
      createTestCase([[1, 3]], false),
      createTestCase([[1]], false),
      createTestCase([null], false)
    ];

    it.each(testCases)('#$# should return $expected when the jump is $args.0', ({ args, expected }) => {
      expect(checkSledJump(...args)).toEqual(expected);
    });
  });
});
