const fitsInOneBox = boxes => {
  const sortedBoxes = [...boxes].sort((firstBox, secondBox) => {
    return firstBox.l - secondBox.l;
  });

  return sortedBoxes.every(({ l: currentBoxL, w: currentBoxW, h: currentBoxH }, index, boxesList) => {
    const { l: previousBoxL, w: previousBoxW, h: previousBoxH } = boxesList[index - 1] || {};

    const isFirstBox = index === 0;
    const canCurrentBoxContainPreviousOne =
      currentBoxL > previousBoxL && currentBoxW > previousBoxW && currentBoxH > previousBoxH;

    return isFirstBox || canCurrentBoxContainPreviousOne;
  });
};

const fitsInOneBoxAlt = boxes => {
  const sortedBoxes = [...boxes].sort((firstBox, secondBox) => {
    return secondBox.l - firstBox.l;
  });

  return sortedBoxes.slice(1).every(({ l: currentBoxL, w: currentBoxW, h: currentBoxH }, index) => {
    const { l: previousBoxL, w: previousBoxW, h: previousBoxH } = sortedBoxes[index] || {};
    return currentBoxL < previousBoxL && currentBoxW < previousBoxW && currentBoxH < previousBoxH;
  });
};

export { fitsInOneBox, fitsInOneBoxAlt };
