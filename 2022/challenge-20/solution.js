const howManyReindeers = (reindeerTypes, gifts) => {
  const reindeerTypesCopy = reindeerTypes.map(reindeerType => ({ ...reindeerType }));

  const distributeReindeers = giftWeight => {
    const allowedReindeerTypes = reindeerTypesCopy.filter(({ weightCapacity }) => weightCapacity < giftWeight);

    let totalWeightCapacity = allowedReindeerTypes.reduce(
      (capacity, { weightCapacity }) => capacity + weightCapacity,
      0
    );

    return allowedReindeerTypes.map(({ weightCapacity, type }) => {
      const reindeersNumber = Math.floor(giftWeight / totalWeightCapacity);

      giftWeight -= reindeersNumber * weightCapacity;
      totalWeightCapacity -= weightCapacity;

      return {
        type,
        num: reindeersNumber
      };
    });
  };

  reindeerTypesCopy.sort((reindeerTypeA, reindeerTypeB) => {
    return reindeerTypeB.weightCapacity - reindeerTypeA.weightCapacity;
  });

  return gifts.map(({ country, weight }) => ({
    country,
    reindeers: distributeReindeers(weight)
  }));
};

export { howManyReindeers };
