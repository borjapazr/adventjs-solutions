import { canMouseEat } from './solution';

describe('Challenge 25: El último juego y hasta el año que viene 👋', () => {
  describe('canMouseEat(...)', () => {
    const roomOne = [
      [' ', ' ', ' '],
      [' ', ' ', 'm'],
      [' ', ' ', '*']
    ];

    const roomTwo = [
      ['*', ' ', ' ', ' '],
      [' ', 'm', '*', ' '],
      [' ', ' ', ' ', ' '],
      [' ', ' ', ' ', '*']
    ];

    const testCases = [
      createTestCase(['up', roomOne], false, 'should return false because it can not go up in the roomOne'),
      createTestCase(['down', roomOne], true, 'should return true because it can go down in the roomOne'),
      createTestCase(['left', roomOne], false, 'should return false because it can not go left in the roomOne'),
      createTestCase(['right', roomOne], false, 'should return false because it can not go right in the roomOne'),
      createTestCase(['up', roomTwo], false, 'should return false because it can not go up in the roomTwo'),
      createTestCase(['down', roomTwo], false, 'should return false because it can not go down in the roomTwo'),
      createTestCase(['right', roomTwo], true, 'should return true because it can go left in the roomTwo'),
      createTestCase(['left', roomTwo], false, 'should return false because it can not go right in the roomTwo')
    ];

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(canMouseEat(...args)).toEqual(expected);
    });
  });
});
