const selectSleigh = (distance, sleighs) => {
  const eligibleSleighs = sleighs.filter(sleigh => {
    return sleigh.consumption * distance <= 20;
  });

  return eligibleSleighs.length > 0 ? eligibleSleighs.at(-1).name : null;
};

const selectSleighAlt = (distance, sleighs) => {
  const eligibleSleighs = sleighs.filter(sleigh => {
    return sleigh.consumption * distance <= 20;
  });

  eligibleSleighs.unshift({ name: null, consumption: Infinity });

  return eligibleSleighs.at(-1).name;
};

export { selectSleigh, selectSleighAlt };
