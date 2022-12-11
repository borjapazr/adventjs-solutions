import { countHours, countHoursAlt } from './solution';

describe('Challenge 02: Nobody wants to do extra hours at work', () => {
  describe('countHours(...)', () => {
    const testCases = [
      createTestCase([2023, ['01/06', '04/01', '12/25']], 4, 'should return 4 for 2023'),
      createTestCase([2022, ['01/06', '04/01', '12/25']], 4, 'should return 4 for 2022'),
      createTestCase(
        [1985, ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25']],
        10,
        'should return 10 for 1985'
      ),
      createTestCase([2000, ['01/01']], 0, 'should return 0 for 2000')
    ];

    it('#T should return a number', () => {
      expect(typeof countHours(2022, ['01/01'])).toBe('number');
      expect(typeof countHoursAlt(2022, ['01/01'])).toBe('number');
    });

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(countHours(...args)).toEqual(expected);
      expect(countHoursAlt(...args)).toEqual(expected);
    });
  });
});
