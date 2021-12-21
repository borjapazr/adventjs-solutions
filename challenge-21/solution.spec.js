import { canCarry } from './solution';

describe('Challenge 21: La ruta con los regalos', () => {
  describe('canCarry(...)', () => {
    const testCases = [
      createTestCase(
        [
          4,
          [
            [2, 5, 8],
            [3, 6, 10]
          ]
        ],
        false
      ),
      createTestCase(
        [
          3,
          [
            [1, 1, 5],
            [2, 2, 10]
          ]
        ],
        true
      ),
      createTestCase(
        [
          3,
          [
            [2, 1, 5],
            [3, 5, 7]
          ]
        ],
        true
      ),
      createTestCase(
        [
          4,
          [
            [2, 3, 8],
            [2, 5, 7]
          ]
        ],
        true
      ),
      createTestCase([1, [[2, 3, 8]]], false),
      createTestCase(
        [
          2,
          [
            [1, 2, 4],
            [2, 3, 8]
          ]
        ],
        false
      )
    ];

    it.each(testCases)(
      '#$# should return $expected when we the capacity is $args.0 and the trip is $args.1',
      ({ args, expected }) => {
        expect(canCarry(...args)).toEqual(expected);
      }
    );
  });
});
