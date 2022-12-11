const checkJump = heights => {
  const peakIndex = heights.indexOf(Math.max(...heights));
  const isPeakAtMiddle = ![0, heights.length - 1].includes(peakIndex);

  const leftSide = heights.slice(0, peakIndex);
  const rightSide = heights.slice(peakIndex + 1, heights.length);

  const isUp = leftSide.slice(1).every((height, index) => height >= leftSide[index]);
  const isDown = rightSide.slice(1).every((height, index) => height <= rightSide[index]);

  return isPeakAtMiddle && isUp && isDown;
};

export { checkJump };
