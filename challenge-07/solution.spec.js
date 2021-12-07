import { containsDFRecursive, containsDFNonRecursive, containsBF } from './solution';

describe('Challenge 07: Buscando en el almacén', () =>
  describe('contains should return', () => {
    it.each([
      [
        true,
        [
          {
            estanteria1: {
              cajon1: {
                producto1: 'coca-cola',
                producto2: 'fanta',
                producto3: 'sprite'
              }
            },
            estanteria2: {
              cajon1: 'vacio',
              cajon2: {
                producto1: 'pantalones',
                producto2: 'camiseta'
              }
            }
          },
          'camiseta'
        ]
      ],
      [
        false,
        [
          {
            baul: {
              fondo: {
                objeto: 'cd-rom',
                'otro-objeto': 'disquette',
                'otra-cosa': 'mando'
              }
            }
          },
          'gameboy'
        ]
      ]
    ])('%p when the input is %j', (expected, input) => {
      expect(containsDFRecursive(...input)).toEqual(expected);
      expect(containsDFNonRecursive(...input)).toEqual(expected);
      expect(containsBF(...input)).toEqual(expected);
    });
  }));
