const canCarry = (capacity, trip) => {
  const giftAccumulator = {};

  trip.forEach(([giftCount, collectionPoint, deliveryPoint]) => {
    for (let i = collectionPoint; i < deliveryPoint; i++) {
      giftAccumulator[i] = (giftAccumulator[i] ?? 0) + giftCount;
    }
  });

  return Object.values(giftAccumulator).every(stopGiftCount => stopGiftCount <= capacity);
};

export { canCarry };
