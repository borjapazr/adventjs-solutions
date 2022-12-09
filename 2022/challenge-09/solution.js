const countTime = leds => {
  const ledStripsOff = leds.join('').split('1');
  ledStripsOff[0] += ledStripsOff.pop();

  return ledStripsOff.reduce((time, ledStripOff) => {
    return Math.max(time, ledStripOff.length * 7);
  }, 0);
};

const countTimeMap = leds => {
  const ledStripsOff = leds.join('').split('1');
  ledStripsOff[0] += ledStripsOff.pop();

  return Math.max(...ledStripsOff.map(ledStripOff => ledStripOff.length)) * 7;
};

const countTimeSort = leds => {
  const ledStripsOff = leds.join('').split('1');
  ledStripsOff[0] += ledStripsOff.pop();

  return ledStripsOff.sort((ledStripOffA, ledStripOffB) => ledStripOffB.length - ledStripOffA.length)[0].length * 7;
};

export { countTime, countTimeSort, countTimeMap };
