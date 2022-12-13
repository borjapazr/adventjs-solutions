import { selectSleigh, selectSleighAlt } from './solution';

describe('Challenge 12: Electric sleighs, wow!', () => {
  describe('selectSleigh(...)', () => {
    const testCases = [
      createTestCase(
        [
          1,
          [
            { name: 'pheralb', consumption: 0.3 },
            { name: 'TMChein', consumption: 0.5 }
          ]
        ],
        'TMChein',
        'should return the name of the sleigh with the lowest consumption (1)'
      ),
      createTestCase(
        [
          10,
          [
            { name: 'Pedrosillano', consumption: 1 },
            { name: 'SamarJaffal', consumption: 5 }
          ]
        ],
        'Pedrosillano',
        'should return the name of the sleigh with the lowest consumption (2)'
      ),
      createTestCase(
        [
          10,
          [
            { name: 'Pedrosillano', consumption: 1 },
            { name: 'SamarJaffal', consumption: 2 },
            { name: 'marcospage', consumption: 3 }
          ]
        ],
        'SamarJaffal',
        'should return the name of the sleigh with the lowest consumption (3)'
      ),
      createTestCase(
        [
          50,
          [
            { name: 'Pedrosillano', consumption: 1 },
            { name: 'SamarJaffal', consumption: 2 },
            { name: 'marcospage', consumption: 3 }
          ]
        ],
        null,
        'should return null if no sleigh can be used'
      )
    ];

    it('#T should return a string', () => {
      const distance = 10;
      const sleighs = [
        { name: 'Pedrosillano', consumption: 1 },
        { name: 'SamarJaffal', consumption: 2 },
        { name: 'marcospage', consumption: 3 }
      ];
      expect(typeof selectSleigh(distance, sleighs)).toBe('string');
      expect(typeof selectSleighAlt(distance, sleighs)).toBe('string');
    });

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(selectSleigh(...args)).toEqual(expected);
      expect(selectSleighAlt(...args)).toEqual(expected);
    });
  });
});
