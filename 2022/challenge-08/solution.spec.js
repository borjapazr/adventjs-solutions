import { checkPart } from './solution';

describe('Challenge 08: We need a mechanic!', () => {
  describe('checkPart(...)', () => {
    const testCases = [
      createTestCase(['uwu'], true, 'should return true if the string is a palindrome'),
      createTestCase(['midu'], false, 'should return false if the string is not a palindrome'),
      createTestCase(
        ['lolol'],
        true,
        'should return true if the string can be a palindrome by removing one character (1)'
      ),
      createTestCase(
        ['yolooloy'],
        true,
        'should return true if the string can be a palindrome by removing one character (2)'
      ),
      createTestCase(
        ['zzzoonzzz'],
        true,
        'should return true if the string can be a palindrome by removing one character (3)'
      )
    ];

    it('#T should return a boolean', () => {
      expect(typeof checkPart('asdf')).toBe('boolean');
    });

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(checkPart(...args)).toEqual(expected);
    });
  });
});
