import { fitsInOneBox, fitsInOneBoxAlt, fitsInOneBoxSome } from './solution';

describe('Challenge 04: Box inside a box and another...', () => {
  describe('fitsInOneBox(...)', () => {
    const testCases = [
      createTestCase(
        [
          [
            { l: 1, w: 1, h: 1 },
            { l: 2, w: 2, h: 2 }
          ]
        ],
        true,
        'should fit in one box'
      ),
      createTestCase(
        [
          [
            { l: 1, w: 1, h: 1 },
            { l: 2, w: 2, h: 2 },
            { l: 3, w: 1, h: 3 }
          ]
        ],
        false,
        'should not fit in one box'
      ),
      createTestCase(
        [
          [
            { l: 1, w: 1, h: 1 },
            { l: 2, w: 2, h: 2 },
            { l: 2, w: 10, h: 2 }
          ]
        ],
        false,
        'should not fit in one box'
      ),
      createTestCase(
        [
          [
            { l: 1, w: 1, h: 1 },
            { l: 3, w: 3, h: 3 },
            { l: 2, w: 2, h: 2 }
          ]
        ],
        true,
        'should fit in one box'
      )
    ];

    it('#T should return a boolean', () => {
      expect(typeof fitsInOneBox([{ l: 1, w: 1, h: 1 }])).toBe('boolean');
      expect(typeof fitsInOneBoxAlt([{ l: 1, w: 1, h: 1 }])).toBe('boolean');
      expect(typeof fitsInOneBoxSome([{ l: 1, w: 1, h: 1 }])).toBe('boolean');
    });

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(fitsInOneBox(...args)).toEqual(expected);
      expect(fitsInOneBoxAlt(...args)).toEqual(expected);
      expect(fitsInOneBoxSome(...args)).toEqual(expected);
    });
  });
});
