const contarOvejas = ovejas =>
  ovejas.filter(oveja => {
    const nameLC = oveja.name.toLowerCase();
    const colorLC = oveja.color.toLowerCase();
    const isRed = colorLC === 'rojo';
    const hasAandNinName = nameLC.includes('a') && nameLC.includes('n');
    return isRed && hasAandNinName;
  });

const contarOvejasAlt = ovejas =>
  ovejas.filter(oveja => oveja.color === 'rojo').filter(oveja => oveja.name.match(/(na)/i));

describe('Challenge 01: Contando ovejas para dormir', () => {
  describe('contarOvejas and contarOvejasAlt should return', () => {
    const sheep = [
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
    ];

    const expectedResult = [
      { name: 'Navidad', color: 'rojo' },
      { name: 'Ki Na Ma', color: 'rojo' }
    ];

    it('a filtered sheep flock that contain red sheep and have an N and an A in its name', () => {
      expect(contarOvejas(sheep)).toEqual(expectedResult);
      expect(contarOvejasAlt(sheep)).toEqual(expectedResult);
    });
  });
});
