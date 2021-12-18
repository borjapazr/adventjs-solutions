const decodeNumber = symbols => {
  const dictionary = { '.': 1, ',': 5, ':': 10, ';': 50, '!': 100 };

  return [...symbols].reduce((number, symbol, index, array) => {
    const currentSymbolValue = dictionary[symbol];
    const nextSymbolValue = dictionary[array[index + 1]];
    const operation = currentSymbolValue < nextSymbolValue ? -1 : 1;
    return number + currentSymbolValue * operation;
  }, 0);
};

export { decodeNumber };
