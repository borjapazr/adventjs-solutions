const getMaxGifts = (giftsCities, maxGifts, maxCities) => {
  const combinations = giftsCities.reduce(
    (acc, cityGifts) => acc.concat(acc.map(existingCombination => [cityGifts].concat(existingCombination))),
    [[]]
  );

  const validCombinations = combinations.filter(combination => combination.length <= maxCities);

  const sums = validCombinations.map(combination => combination.reduce((total, current) => total + current, 0));

  const validSums = sums.filter(sum => sum <= maxGifts);

  return Math.max(...validSums);
};

// This solution is faster than the one above but it does not work for some test cases.
// Form example getMaxGiftsAlt([70, 50, 30], 80, 2) returns 70 but it should return 80
const getMaxGiftsAlt = (giftsCities, maxGifts, maxCities) => {
  return giftsCities
    .sort((cityGiftsA, cityGiftsB) => cityGiftsB - cityGiftsA)
    .reduce((m, g) => {
      if (maxCities !== 0 && m + g <= maxGifts && m + g !== maxGifts - 1) {
        maxCities -= 1;
        m += g;
      }
      return m;
    }, 0);
};

export { getMaxGifts };
