const getMaxGifts = (giftsCities, maxGifts, maxCities) => {
  let maxPossibleGifts = 0;

  const findMaxPossibleGifts = (numbers, combinationsPath) => {
    if (combinationsPath.length <= maxCities) {
      const combinationSum = combinationsPath.reduce((a, b) => a + b, 0);

      if (combinationSum <= maxGifts && combinationSum > maxPossibleGifts) {
        maxPossibleGifts = combinationSum;
      }
    }

    numbers.forEach((number, index, numbersList) => {
      combinationsPath.push(number);
      findMaxPossibleGifts(numbersList.slice(index + 1), combinationsPath);
      combinationsPath.pop(number);
    });
  };

  findMaxPossibleGifts(giftsCities, []);

  return maxPossibleGifts;
};

export { getMaxGifts };
