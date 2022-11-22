import { learn } from './solution';

describe('Challenge 19: ¿Qué deberíamos aprender en Platzi?', () => {
  describe('learn(...)', () => {
    const testCases = [
      createTestCase([10, [2, 3, 8, 1, 4]], [0, 2]),
      createTestCase([15, [2, 10, 4, 1]], [1, 2]),
      createTestCase([25, [10, 15, 20, 5]], [0, 1]),
      createTestCase([8, [8, 2, 1]], [1, 2]),
      createTestCase([8, [8, 2, 1, 4, 3]], [3, 4]),
      createTestCase([4, [10, 14, 20]], null),
      createTestCase([5, [5, 5, 5]], null)
    ];

    it.each(testCases)(
      '#$# should return $expected when we have $args.0 minutes and the courses last $args.1',
      ({ args, expected }) => {
        expect(learn(...args)).toEqual(expected);
      }
    );
  });
});
