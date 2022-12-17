import { fixLetter } from './solution';

describe("Challenge 16: Fixing Santa Claus' letters", () => {
  describe('fixLetter(...)', () => {
    const testCases = [
      createTestCase(
        [' hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  '],
        'Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.',
        'should return a fixed letter (1)'
      ),
      createTestCase(
        ["  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"],
        "Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?",
        'should return a fixed letter (2)'
      ),
      createTestCase(['  hi    santa    claus '], 'Hi Santa Claus.', 'should return a fixed letter (3)'),
      createTestCase(
        ['  hi    santa    claus . santa claus is the best  '],
        'Hi Santa Claus. Santa Claus is the best.',
        'should return a fixed letter (4)'
      ),
      createTestCase(
        ['  hi,santa claus. are you there ?   '],
        'Hi, Santa Claus. Are you there?',
        'should return a fixed letter (5)'
      ),
      createTestCase(
        ['Hey santa Claus .  I want a bike.   I want a videogame! '],
        'Hey Santa Claus. I want a bike. I want a videogame!',
        'should return a fixed letter (6)'
      )
    ];

    it('#T should return a string', () => {
      expect(typeof fixLetter('a')).toBe('string');
    });

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(fixLetter(...args)).toEqual(expected);
    });
  });
});
