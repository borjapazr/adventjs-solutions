const wrapGifts = gifts => {
  const WRAPPER_SYMBOL = '*';

  if (!gifts || gifts.length === 0) {
    return [];
  }

  const wrapperLength = Math.max(...gifts.map(gift => gift.length)) + 2;
  const wrapper = WRAPPER_SYMBOL.repeat(wrapperLength);
  return [
    wrapper,
    ...gifts.map(gift => gift.padStart((wrapperLength + gift.length) / 2, '*').padEnd(wrapperLength, WRAPPER_SYMBOL)),
    wrapper
  ];
};

export { wrapGifts };
