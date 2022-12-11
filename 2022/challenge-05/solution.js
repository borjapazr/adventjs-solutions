const getMaxGifts = (giftsCities, maxGifts, maxCities) => {
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
