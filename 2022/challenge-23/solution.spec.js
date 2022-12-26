import { executeCommands, executeCommandsAlt } from './solution';

describe('Challenge 23: Santa Claus Compiler', () => {
  describe('executeCommands(...)', () => {
    const testCases = [
      createTestCase(
        [['MOV 5,V00', 'MOV 10,V01', 'DEC V00', 'ADD V00,V01']],
        [14, 10, 0, 0, 0, 0, 0, 0],
        'should return an array with the result for every register (1)'
      ),
      createTestCase(
        [['MOV 255,V00', 'INC V00', 'DEC V01', 'DEC V01']],
        [0, 254, 0, 0, 0, 0, 0, 0],
        'should return an array with the result for every register (2)'
      ),
      createTestCase(
        [['MOV 10,V00', 'DEC V00', 'INC V01', 'JMP 1', 'INC V06']],
        [0, 10, 0, 0, 0, 0, 1, 0],
        'should return an array with the result for every register (3)'
      ),
      createTestCase(
        [['MOV 10,V00', 'MOV V00,V01', 'MOV V01,V02', 'MOV V02,V03', 'MOV V03,V04']],
        [10, 10, 10, 10, 10, 0, 0, 0],
        'should return an array with the result for every register (4)'
      )
    ];

    it('#T should return an array', () => {
      expect(executeCommands([])).toBeInstanceOf(Array);
      expect(executeCommandsAlt([])).toBeInstanceOf(Array);
    });

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(executeCommands(...args)).toEqual(expected);
      expect(executeCommandsAlt(...args)).toEqual(expected);
    });
  });
});
