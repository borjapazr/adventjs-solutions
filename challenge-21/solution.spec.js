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
        false,
        'should return false because Santa Claus can not carry all the presents'
      ),
      createTestCase(
        [
          3,
          [
            [1, 1, 5],
            [2, 2, 10]
          ]
        ],
        true,
        'should return true because Santa Claus can take all the presents'
      ),
      createTestCase(
        [
          3,
          [
            [2, 1, 5],
            [3, 5, 7]
          ]
        ],
        true,
        'should return true because Santa Claus can take all the presents'
      ),
      createTestCase(
        [
          4,
          [
            [2, 3, 8],
            [2, 5, 7]
          ]
        ],
        true,
        'should return true because Santa Claus can take all the presents'
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
        false,
        'should return false because Santa Claus can not carry all the presents'
      )
    ];

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(canCarry(...args)).toEqual(expected);
    });
  });
});
