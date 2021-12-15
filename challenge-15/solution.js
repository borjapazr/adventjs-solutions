const checkSledJump = heights => {
  const peakIndex = heights.indexOf(Math.max(...heights));
  const isPeakAtMiddle = peakIndex !== heights.length - 1;
  const isUpAndDown = heights.every((height, index, array) =>
    index < peakIndex ? height < array[index + 1] : height > (array[index + 1] ?? Number.NEGATIVE_INFINITY)
  );
  return isPeakAtMiddle && isUpAndDown;
};

export { checkSledJump };
