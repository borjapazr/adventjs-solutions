import { getMinJump } from './solution';

describe('Challenge 12: La ruta perfecta para dejar los regalos', () => {
  describe('getMinJump(...)', () => {
    const testCases = [
      createTestCase([[5, 3, 6, 7, 9]], 4),
      createTestCase([[2, 4, 6, 8, 10]], 7),
      createTestCase([[1, 2, 3, 5]], 4),
      createTestCase([[3, 7, 5]], 2),
      createTestCase([[9, 5, 1]], 2),
      createTestCase([[1, 2, 3, 4, 5, 6]], 7),
      createTestCase([[]], 1)
    ];

    it.each(testCases)('#$# should return $expected when the obstacles are $args.0', ({ args, expected }) => {
      expect(getMinJump(...args)).toEqual(expected);
    });
  });
});
