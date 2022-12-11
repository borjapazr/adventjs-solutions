import { getCompleted } from './solution';

describe('Challenge 11: Santa Claus is Scrum Master', () => {
  describe('getCompleted(...)', () => {
    const testCases = [
      createTestCase(['01:00:00', '03:00:00'], '1/3'),
      createTestCase(['02:00:00', '04:00:00'], '1/2'),
      createTestCase(['01:00:00', '01:00:00'], '1/1'),
      createTestCase(['00:10:00', '01:00:00'], '1/6'),
      createTestCase(['01:10:10', '03:30:30'], '1/3'),
      createTestCase(['02:20:20', '03:30:30'], '2/3'),
      createTestCase(['03:30:30', '05:50:50'], '3/5')
    ];

    it('#T should return a string', () => {
      expect(typeof getCompleted('01:00:00', '03:00:00')).toBe('string');
    });

    it.each(testCases)('#$# should return $expected when the input is $args.0', ({ args, expected }) => {
      expect(getCompleted(...args)).toEqual(expected);
    });
  });
});
