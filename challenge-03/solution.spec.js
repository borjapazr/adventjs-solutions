import { isValid } from './solution';

describe('Challenge 03: El Grinch quiere fastidiar la Navidad!', () => {
  describe('isValid(...)', () => {
    const testCases = [
      createTestCase(['bici coche (balón) bici coche peluche'], true, 'should return true when the letter is valid'),
      createTestCase(
        ['bici coche (balón bici coche'],
        false,
        'should return false when the parentheses are not balanced'
      ),
      createTestCase(
        ['peluche (bici [coche) bici coche balón'],
        false,
        'should return false when the letter is corrupted with a [ inside a parentheses block'
      ),
      createTestCase(
        ['(peluche {) bici'],
        false,
        'should return false when the letter is corrupted with a { inside a parentheses block'
      ),
      createTestCase(['() bici'], false, 'should return false when the letter has empty parentheses block')
    ];

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(isValid(...args)).toBe(expected);
    });
  });
});
