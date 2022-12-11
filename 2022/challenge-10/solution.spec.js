import { checkJump } from './solution';

describe('Challenge 10: The Santa Claus sleigh jump', () => {
  describe('checkJump(...)', () => {
    const testCases = [
      createTestCase([[1, 2, 3, 2, 1]], true),
      createTestCase([[0, 1, 0]], true),
      createTestCase([[0, 3, 2, 1]], true),
      createTestCase([[0, 1000, 1]], true),
      createTestCase([[2, 4, 4, 6, 2]], true),
      createTestCase([[1, 2, 3]], false),
      createTestCase([[1, 2, 3, 2, 1, 2, 3]], false),
      createTestCase([[1, 3]], false),
      createTestCase([[1]], false)
    ];

    it('#T should return a boolean', () => {
      expect(typeof checkJump([2, 3, 1, 5, 4])).toBe('boolean');
    });

    it.each(testCases)('#$# should return $expected when the jump is $args.0', ({ args, expected }) => {
      expect(checkJump(...args)).toEqual(expected);
    });
  });
});
