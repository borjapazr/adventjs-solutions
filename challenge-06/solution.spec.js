import { sumPairs } from './solution';

describe('Challenge 06: Rematando los exámenes finales', () =>
  describe('sumPairs should return', () => {
    it.each([
      [
        [3, 7],
        [[3, 5, 7, 2], 10]
      ],
      [null, [[-3, -2, 7, -5], 10]],
      [
        [2, 2],
        [[2, 2, 3, 2, 1], 4]
      ],
      [
        [2, 2],
        [[2, 2, 3, 2, 1], 4]
      ],
      [
        [6, 2],
        [[6, 7, 1, 2], 8]
      ],
      [
        [1, 5],
        [[0, 2, 2, 3, -1, 1, 5], 6]
      ]
    ])('%p when the input is %j', (expected, input) => {
      expect(sumPairs(...input)).toEqual(expected);
    });
  }));
