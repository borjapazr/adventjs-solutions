const listGifts = letter => {
  return letter
    .split(' ')
    .filter(word => word[0] !== '_' && word)
    .reduce((previous, next) => {
      previous[next] = previous[next] + 1 || 1;
      return previous;
    }, {});
};

const carta = 'bici coche balón _playstation bici coche peluche';

const resultadoCorrecto = {
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
};

console.log('Resultado correcto:', resultadoCorrecto);
console.log("Resultado de listGifts('" + carta + "'):", listGifts(carta));
