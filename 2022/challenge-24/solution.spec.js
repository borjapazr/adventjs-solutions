import { canExit } from './solution';

describe('Challenge 24: The last challenge is a maze', () => {
  describe('canExit(...)', () => {
    const testCases = [
      createTestCase(
        [
          [
            [' ', ' ', 'W', ' ', 'S'],
            [' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', 'W', ' '],
            ['W', 'W', ' ', 'W', 'W'],
            [' ', ' ', ' ', ' ', 'E']
          ]
        ],
        true,
        'should return true because there is a path to the exit (1)'
      ),
      createTestCase(
        [
          [
            [' ', ' ', 'W', 'W', 'S'],
            [' ', ' ', ' ', 'W', ' '],
            [' ', ' ', ' ', 'W', ' '],
            ['W', 'W', ' ', 'W', 'W'],
            [' ', ' ', ' ', ' ', 'E']
          ]
        ],
        false,
        'should return false because there is no path to the exit (1)'
      ),
      createTestCase(
        [
          [
            [' ', ' ', 'W', 'W', 'S'],
            [' ', ' ', ' ', 'W', ' '],
            [' ', ' ', ' ', 'W', ' '],
            ['W', 'W', ' ', ' ', 'W'],
            [' ', ' ', ' ', ' ', 'E']
          ]
        ],
        false,
        'should return false because there is no path to the exit (2)'
      ),
      createTestCase([[['E', ' ', ' ', ' ', 'S']]], true, 'should return true because there is a path to the exit (2)'),
      createTestCase(
        [[['E', ' ', 'W', ' ', 'S']]],
        false,
        'should return false because there is no path to the exit (3)'
      ),
      createTestCase(
        [[['E', ' ', 'W', ' ', 'S']]],
        false,
        'should return false because there is no path to the exit (4)'
      ),
      createTestCase(
        [
          [
            ['E', ' ', 'W', ' ', 'S'],
            [' ', ' ', ' ', ' ', ' ']
          ]
        ],
        true,
        'should return true because there is a path to the exit (3)'
      ),
      createTestCase(
        [
          [
            ['E', ' ', 'W', ' ', 'S'],
            [' ', ' ', ' ', ' ', ' '],
            ['W', 'W', 'W', 'W', 'W']
          ]
        ],
        true,
        'should return true because there is a path to the exit (4)'
      ),
      createTestCase(
        [
          [
            ['E', ' ', 'W', ' ', 'S'],
            [' ', ' ', 'W', ' ', ' '],
            ['W', 'W', 'W', 'W', 'W']
          ]
        ],
        false,
        'should return false because there is no path to the exit (5)'
      ),
      createTestCase(
        [
          [
            ['E', 'S', 'W', 'W', 'W'],
            ['W', 'W', 'W', 'W', 'W'],
            ['W', 'W', 'W', 'W', 'W']
          ]
        ],
        true,
        'should return true because there is a path to the exit (5)'
      )
    ];

    it('#T should return a boolean', () => {
      expect(
        typeof canExit([
          ['E', 'S', 'W', 'W', 'W'],
          ['W', 'W', 'W', 'W', 'W'],
          ['W', 'W', 'W', 'W', 'W']
        ])
      ).toBe('boolean');
    });

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(canExit(...args)).toEqual(expected);
    });
  });
});
