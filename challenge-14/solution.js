const missingReindeer = ids => {
  const sumNatural = n => (n * (n + 1)) / 2;

  const maxReindeerId = ids.length;
  const expectedSum = sumNatural(maxReindeerId);
  const reindeersIdsSum = ids.reduce((a, b) => a + b, 0);

  return expectedSum - reindeersIdsSum;
};

export { missingReindeer };
