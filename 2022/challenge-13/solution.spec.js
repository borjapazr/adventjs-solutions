import { getFilesToBackup } from './solution';

describe('Challenge 13: Backups for Santa Claus files', () => {
  describe('getFilesToBackup(...)', () => {
    const testCases = [
      createTestCase(
        [
          1546300800,
          [
            [2, 1546300800],
            [3, 1546301100],
            [1, 1546300800],
            [1, 1546300900],
            [1, 1546301000]
          ]
        ],
        [1, 3],
        'should return an array of file ids that were changed after the last backup (1)'
      ),
      createTestCase(
        [
          1546300600,
          [
            [1, 1546300800],
            [2, 1546300800],
            [1, 1546300900],
            [1, 1546301000],
            [3, 1546301100]
          ]
        ],
        [1, 2, 3],
        'should return an array of file ids that were changed after the last backup (2)'
      ),
      createTestCase(
        [
          1556300600,
          [
            [1, 1546300800],
            [2, 1546300800],
            [1, 1546300900],
            [1, 1546301000],
            [3, 1546301100]
          ]
        ],
        [],
        'should return an empty array if there are no changes after the last backup'
      ),
      createTestCase([1556300600, []], [], 'should return an empty array if there are no changes')
    ];

    it('#T should return an array', () => {
      expect(getFilesToBackup(10000, [])).toBeInstanceOf(Array);
    });

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(getFilesToBackup(...args)).toEqual(expected);
    });
  });
});
