import { fixFiles } from './solution';

describe('Challenge 18: El sistema operativo de Santa Claus', () => {
  describe('fixFiles(...)', () => {
    const testCases = [
      createTestCase(
        [['photo', 'postcard', 'photo', 'photo', 'video']],
        ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video'],
        'should return fixed file names with parentheses when duplicates exist'
      ),
      createTestCase(
        [['file', 'file', 'file', 'game', 'game']],
        ['file', 'file(1)', 'file(2)', 'game', 'game(1)'],
        'should return fixed file names with parentheses when there are multiple duplicates'
      ),
      createTestCase(
        [['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']],
        ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)'],
        'should return fixed file names with parentheses when duplicates with parentheses exist'
      )
    ];

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(fixFiles(...args)).toEqual(expected);
    });
  });
});
