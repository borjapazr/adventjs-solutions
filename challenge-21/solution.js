const canCarry = (capacity, trip) => {
  let currentGiftLoad = 0;
  const giftsAtDeliveryPoint = {};

  for (const stop of trip) {
    const [numberOfGifts, collectionPoint, deliveryPoint] = stop;
    if (collectionPoint in giftsAtDeliveryPoint) {
      currentGiftLoad -= giftsAtDeliveryPoint[collectionPoint];
    }
    currentGiftLoad += numberOfGifts;
    if (currentGiftLoad > capacity) {
      return false;
    }
    giftsAtDeliveryPoint[deliveryPoint] = numberOfGifts;
  }

  return true;
};

export { canCarry };
