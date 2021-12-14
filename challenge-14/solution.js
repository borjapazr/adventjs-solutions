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

export { missingReindeer };
