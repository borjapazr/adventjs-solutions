const wrapGifts = gifts => {
  if (!gifts || gifts.length === 0) {
    return [];
  }

  const wrapperLength = Math.max(...gifts.map(gift => gift.length)) + 2;
  const wrapper = '*'.repeat(wrapperLength);
  return [
    wrapper,
    ...gifts.map(gift => gift.padStart((wrapperLength + gift.length) / 2, '*').padEnd(wrapperLength, '*')),
    wrapper
  ];
};

export { wrapGifts };
