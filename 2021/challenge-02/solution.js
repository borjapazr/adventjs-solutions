const listGifts = letter => {
  return letter
    .split(' ')
    .filter(word => word[0] !== '_' && word)
    .reduce((previous, next) => {
      previous[next] = previous[next] + 1 || 1;
      return previous;
    }, {});
};

export { listGifts };
