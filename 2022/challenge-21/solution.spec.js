import { printTable } from './solution';

describe('Challenge 21: Creating the gifts table', () => {
  describe('printTable(...)', () => {
    const testCases = [
      createTestCase(
        [
          [
            { name: 'PlayStation 5', quantity: 9234782374892 },
            { name: 'Book Learn Web Dev', quantity: 23531 }
          ]
        ],
        '++++++++++++++++++++++++++++++++++++++\n| Gift               | Quantity      |\n| ------------------ | ------------- |\n| PlayStation 5      | 9234782374892 |\n| Book Learn Web Dev | 23531         |\n**************************************',
        'should return a table with the list of gifts (1)'
      ),
      createTestCase(
        [
          [
            { name: 'Game', quantity: 2 },
            { name: 'Bike', quantity: 1 },
            { name: 'Book', quantity: 3 }
          ]
        ],
        '+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 2        |\n| Bike | 1        |\n| Book | 3        |\n*******************',
        'should return a table with the list of gifts (2)'
      ),
      createTestCase(
        [[{ name: 'Game', quantity: 10000 }]],
        '+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 10000    |\n*******************',
        'should return a table with the list of gifts (3)'
      ),
      createTestCase(
        [[{ name: 'Game', quantity: 1234567890 }]],
        '+++++++++++++++++++++\n| Gift | Quantity   |\n| ---- | ---------- |\n| Game | 1234567890 |\n*********************',
        'should return a table with the list of gifts (4)'
      ),
      createTestCase(
        [
          [
            { name: 'Toy', quantity: 12 },
            { name: 'Mic', quantity: 123 }
          ]
        ],
        '+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Toy  | 12       |\n| Mic  | 123      |\n*******************',
        'should return a table with the list of gifts (5)'
      )
    ];

    it('#T should return a string', () => {
      expect(typeof printTable([])).toBe('string');
    });

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(printTable(...args)).toEqual(expected);
    });
  });
});
