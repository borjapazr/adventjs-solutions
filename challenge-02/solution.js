const listGifts = letter => {
  return letter
    .split(' ')
    .filter(word => word[0] !== '_' && word)
    .reduce((prev, next) => {
      const previous = { ...prev };
      previous[next] = previous[next] + 1 || 1;
      return previous;
    }, {});
};

export { listGifts };
