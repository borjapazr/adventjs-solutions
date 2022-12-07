const createCube = size => {
  let cube = '';
  for (let index = 0; index < size; index++) {
    const topSide = `${' '.repeat(index)}${'/\\'.repeat(size - index)}${'_\\'.repeat(size)}\n`;
    const bottomSide = `${' '.repeat(index)}${'\\/'.repeat(size - index)}${'_/'.repeat(size)}\n`;
    cube = `${topSide}${cube}${bottomSide}`;
  }
  return cube.trimEnd();
};

export { createCube };
