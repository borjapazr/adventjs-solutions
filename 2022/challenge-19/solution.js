const sortToys = (toys, positions) => {
  return toys.sort((toyA, toyB) => {
    return positions[toys.indexOf(toyA)] - positions[toys.indexOf(toyB)];
  });
};

const sortToysAllowingToyRepetition = (toys, positions) => {
  const minPosition = Math.min(...positions);

  return toys.reduce((orderedToys, toy, index) => {
    orderedToys[positions[index] - minPosition] = toy;
    return orderedToys;
  }, []);
};

export { sortToys, sortToysAllowingToyRepetition };
