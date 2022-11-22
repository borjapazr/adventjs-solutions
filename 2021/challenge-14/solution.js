// O((n + 1)*log(n)) time complexity
const missingReindeer = ids => {
  ids.sort((a, b) => a - b);

  let leftIndex = 0;
  let rightIndex = ids.length - 1;
  while (leftIndex <= rightIndex) {
    const currentIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (ids[currentIndex] === currentIndex) {
      leftIndex = currentIndex + 1;
    } else {
      rightIndex = currentIndex - 1;
    }
  }

  return leftIndex;
};

// O(n) time complexity
const missingReindeerAlt = ids => {
  const sumNatural = n => (n * (n + 1)) / 2;

  const maxReindeerId = ids.length;
  const expectedSum = sumNatural(maxReindeerId);
  const reindeersIdsSum = ids.reduce((a, b) => a + b, 0);

  return expectedSum - reindeersIdsSum;
};

export { missingReindeer, missingReindeerAlt };
