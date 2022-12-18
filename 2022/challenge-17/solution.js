const carryGifts = (gifts, maxWeight) => {
  const giftsString = gifts.join(' ');
  const regex = new RegExp(`\\b(\\w ?){1,${maxWeight}}(?= |$)`, 'g');
  const bags = giftsString.match(regex);
  return bags || [];
};

export { carryGifts };
