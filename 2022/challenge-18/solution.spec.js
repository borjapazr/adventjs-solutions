import { dryNumber } from './solution';

describe('Challenge 18: We ran out of ink!', () => {
  describe('dryNumber(...)', () => {
    const testCases = [
      createTestCase([1, 15], [1, 10, 11, 12, 13, 14, 15]),
      createTestCase([2, 20], [2, 12, 20]),
      createTestCase([3, 33], [3, 13, 23, 30, 31, 32, 33]),
      createTestCase([4, 45], [4, 14, 24, 34, 40, 41, 42, 43, 44, 45]),
      createTestCase([5, 55], [5, 15, 25, 35, 45, 50, 51, 52, 53, 54, 55]),
      createTestCase([9, 8], [])
    ];

    it('#T should return an array', () => {
      expect(dryNumber(1, 1)).toBeInstanceOf(Array);
    });

    it.each(testCases)(
      '#$# should return $expected when the dry number is $args.0 and the number of barcodes is $args.1',
      ({ args, expected }) => {
        expect(dryNumber(...args)).toEqual(expected);
      }
    );
  });
});
