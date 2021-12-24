import { canReconfigure, canReconfigureAlt } from './solution';

describe('Challenge 23: ¿Puedes reconfigurar las fábricas para no parar de crear regalos?', () => {
  describe('canReconfigure(...)', () => {
    const testCases = [
      createTestCase(['BAL', 'LIB'], true),
      createTestCase(['CON', 'JUU'], false),
      createTestCase(['MMM', 'MID'], false),
      createTestCase(['AA', 'MID'], false)
    ];

    it.each(testCases)(
      '#$# should return $expected when trying to convert $args.0 to $args.1',
      ({ args, expected }) => {
        expect(canReconfigure(...args)).toEqual(expected);
        expect(canReconfigureAlt(...args)).toEqual(expected);
      }
    );
  });
});
