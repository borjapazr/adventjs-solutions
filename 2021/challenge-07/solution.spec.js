import { contains, containsStringify, containsDFRecursive, containsDFNonRecursive, containsBF } from './solution';

describe('Challenge 07: Buscando en el almacén', () => {
  describe('contains(...)', () => {
    const testCases = [
      createTestCase(
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
        ],
        true,
        'should return true when the product is found in store'
      ),
      createTestCase(
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
        ],
        false,
        'should return false when the product is not found in store'
      ),
      createTestCase(
        ['laptop', 'laptop'],
        true,
        'should return true when the product is found in the store and the latter is a string'
      ),
      createTestCase([null, 'laptop'], false, 'should return false when the store is null')
    ];

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(contains(...args)).toEqual(expected);
      expect(containsStringify(...args)).toEqual(expected);
      expect(containsDFRecursive(...args)).toEqual(expected);
      expect(containsDFNonRecursive(...args)).toEqual(expected);
      expect(containsBF(...args)).toEqual(expected);
    });
  });
});
