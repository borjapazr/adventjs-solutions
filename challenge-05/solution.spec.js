import { daysToXmas } from './solution';

describe('Challenge 05: Contando los días para los regalos', () => {
  describe('daysToXmas(...)', () => {
    const testCases = [
      createTestCase(['Dec 1, 2021'], 24),
      createTestCase(['Dec 24, 2021 00:00:01'], 1),
      createTestCase(['Dec 24, 2021 23:59:59'], 1),
      createTestCase(['December 20, 2021 03:24:00'], 5),
      createTestCase(['Dec 25, 2021'], 0),
      createTestCase(['Dec 26, 2021'], -1),
      createTestCase(['Dec 31, 2021'], -6),
      createTestCase(['Jan 1, 2022 00:00:01'], -7),
      createTestCase(['Jan 1, 2022 23:59:59'], -7)
    ];

    it.each(testCases)('#$# should return $expected days when the date is $args.0', ({ expected, args }) => {
      expect(daysToXmas(new Date(...args))).toBe(expected);
    });
  });
});
