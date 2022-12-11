const distributeGifts = (packOfGifts, reindeers) => {
  return Math.floor((reindeers.join``.length * 2) / packOfGifts.join``.length);
};

const distributeGiftsAlt = (packOfGifts, reindeers) => {
  // Only valid for numbers between [−2147483648, 2147483647]
  return ((reindeers.join``.length * 2) / packOfGifts.join``.length) | 0;
};

export { distributeGifts, distributeGiftsAlt };
