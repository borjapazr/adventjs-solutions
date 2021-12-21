const canCarry = (capacity, trip) => {
  const giftAccumulator = {};

  trip.forEach(([giftCount, collectionPoint, deliveryPoint]) => {
    for (let stopIndex = collectionPoint; stopIndex < deliveryPoint; stopIndex++) {
      giftAccumulator[stopIndex] = (giftAccumulator[stopIndex] ?? 0) + giftCount;
    }
  });

  return Object.values(giftAccumulator).every(stopGiftCount => stopGiftCount <= capacity);
};

export { canCarry };
