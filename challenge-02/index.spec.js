const listGifts = letter => {
  return letter
    .split(' ')
    .filter(word => word[0] !== '_' && word)
    .reduce((previous, next) => {
      previous[next] = previous[next] + 1 || 1;
      return previous;
    }, {});
};

describe('Challenge 02: ¡Ayuda al elfo a listar los regalos!', () => {
  describe('listGifts should process', () => {
    const letter = 'bici coche balón _playstation bici coche peluche';

    const expectedResult = {
      bici: 2,
      coche: 2,
      balón: 1,
      peluche: 1
    };

    it('a letter and return the number of gifts of each type without taking into account those crossed out', () => {
      expect(listGifts(letter)).toEqual(expectedResult);
    });
  });
});
