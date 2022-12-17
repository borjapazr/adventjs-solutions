const decorateTree = base => {
  const ornamentFormula = {
    BB: 'B',
    BP: 'R',
    BR: 'P',
    PB: 'R',
    PP: 'P',
    PR: 'B',
    RB: 'P',
    RP: 'B',
    RR: 'R'
  };

  const splittedBase = base.split(' ');

  const addOrnament = (accumulator, currentValue, currentIndex, original) => {
    const nextValue = original[currentIndex + 1];

    if (nextValue !== undefined) {
      accumulator.push(ornamentFormula[currentValue + nextValue]);
    }

    return accumulator;
  };

  const createTree = (accumulator, _currentValue, currentIndex) => {
    const nextLine = accumulator[currentIndex].reduce(addOrnament, []);

    accumulator.push(nextLine);

    return accumulator;
  };

  return [...Array(splittedBase.length - 1)]
    .reduce(createTree, [splittedBase])
    .reverse()
    .map(ornaments => ornaments.join(' '));
};

export { decorateTree };
