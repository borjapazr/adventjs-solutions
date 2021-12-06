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

export { contarOvejas, contarOvejasAlt };
