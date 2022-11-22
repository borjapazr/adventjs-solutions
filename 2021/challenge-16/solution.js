const decodeNumber = symbols => {
  const DICTIONARY = { '.': 1, ',': 5, ':': 10, ';': 50, '!': 100 };

  return [...symbols].reduce((number, symbol, index, array) => {
    const currentSymbolValue = DICTIONARY[symbol];
    const nextSymbolValue = DICTIONARY[array[index + 1]];
    const operation = currentSymbolValue < nextSymbolValue ? -1 : 1;
    return number + currentSymbolValue * operation;
  }, 0);
};

export { decodeNumber };
