import { contarOvejas, contarOvejasAlt } from './solution';

describe('Challenge 01: Contando ovejas para dormir', () => {
  describe('contarOvejas(...)', () => {
    const testCases = [
      createTestCase(
        [
          [
            {
              name: 'Noa',
              color: 'azul'
            },
            {
              name: 'Euge',
              color: 'rojo'
            },
            {
              name: 'Navidad',
              color: 'rojo'
            },
            {
              name: 'Ki Na Ma',
              color: 'rojo'
            }
          ]
        ],
        [
          { name: 'Navidad', color: 'rojo' },
          { name: 'Ki Na Ma', color: 'rojo' }
        ],
        'should return a filtered sheep flock that contain red sheep and have an N and an A in its name'
      )
    ];

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(contarOvejas(...args)).toEqual(expected);
      expect(contarOvejasAlt(...args)).toEqual(expected);
    });
  });
});
