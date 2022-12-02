import { wrapping } from './solution';

describe('Challenge 01: ¡Automatizando envolver regalos de Navidad!', () => {
  describe('wrapping(...)', () => {
    const testCases = [
      createTestCase(
        [['book', 'game', 'socks']],
        ['******\n*book*\n******', '******\n*game*\n******', '*******\n*socks*\n*******'],
        'should return a list of wrapped gifts (1)'
      ),
      createTestCase([['midu']], ['******\n*midu*\n******'], 'should return a list of wrapped gifts (2)'),
      createTestCase([['a']], ['***\n*a*\n***'], 'should return a list of wrapped gifts (3)'),
      createTestCase([[]], [], 'should return en empty list if no gifts are given')
    ];

    it('#T should return an array', () => {
      expect(wrapping([])).toBeInstanceOf(Array);
    });

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(wrapping(...args)).toEqual(expected);
    });
  });
});
