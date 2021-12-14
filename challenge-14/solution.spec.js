import { missingReindeer } from './solution';

describe('Challenge 14: En busca del reno perdido', () => {
  describe('missingReindeer(...)', () => {
    const testCases = [
      createTestCase([[0, 2, 3]], 1),
      createTestCase([[5, 6, 1, 2, 3, 7, 0]], 4),
      createTestCase([[0, 1]], 2),
      createTestCase([[3, 0, 1]], 2),
      createTestCase([[9, 2, 3, 5, 6, 4, 7, 0, 1]], 8),
      createTestCase([[0]], 1),
      createTestCase([[1]], 0)
    ];

    it.each(testCases)('#$# should return $expected when the reindeers are $args.0', ({ args, expected }) => {
      expect(missingReindeer(...args)).toEqual(expected);
    });
  });
});
