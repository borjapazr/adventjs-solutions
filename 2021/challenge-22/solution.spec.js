import { countDecorations } from './solution';

describe('Challenge 22: ¿Cuántos adornos necesita el árbol?', () => {
  describe('countDecorations(...)', () => {
    const testCases = [
      createTestCase(
        [
          {
            value: 1, // el nodo raíz siempre es uno, porque es la estrella ⭐
            left: {
              value: 2, // el nodo izquierdo necesita dos decoraciones
              left: null, // no tiene más ramas
              right: null // no tiene más ramas
            },
            right: {
              value: 3, // el nodo de la derecha necesita tres decoraciones
              left: null, // no tiene más ramas
              right: null // no tiene más ramas
            }
          }
        ],
        6
      ),
      createTestCase(
        [
          {
            value: 1,
            left: {
              value: 5,
              left: {
                value: 7,
                left: {
                  value: 3,
                  left: null,
                  right: null
                },
                right: null
              },
              right: null
            },
            right: {
              value: 6,
              left: {
                value: 5,
                left: null,
                right: null
              },
              right: {
                value: 1,
                left: null,
                right: null
              }
            }
          }
        ],
        28
      )
    ];

    it.each(testCases)('#$# should return $expected ornaments', ({ args, expected }) => {
      expect(countDecorations(...args)).toEqual(expected);
    });
  });
});
