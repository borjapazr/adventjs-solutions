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

const ovejas = [
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

const resultadoCorrecto = [
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' }
];

console.log('Datos de entrada:');
console.table(ovejas);
console.log('Resultado correcto:', resultadoCorrecto);
console.log('Resultado de contarOvejas():', contarOvejas(ovejas));
console.log('Resultado de contarOvejasAlt():', contarOvejasAlt(ovejas));
