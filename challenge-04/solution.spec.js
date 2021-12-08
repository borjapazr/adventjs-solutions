import { createXmasTree, createXmasTreeAlt } from './solution';

describe('Challenge 04: ¡Es hora de poner la navidad en casa!', () => {
  describe('createXmasTree(...)', () => {
    const testCases = [
      createTestCase([1], '*\n#\n#', 'should render a christmas tree with height of 1'),
      createTestCase([3], '__*__\n_***_\n*****\n__#__\n__#__', 'should render a christmas tree with height of 3')
    ];

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(createXmasTree(...args)).toBe(expected);
      expect(createXmasTreeAlt(...args)).toBe(expected);
    });
  });
});
