const canMouseEat = (direction, game) => {
  const [MOUSE_SYMBOL, MOUSE_FOOD_SYMBOL] = ['m', '*'];
  const MOVES = {
    UP: [0, -1],
    DOWN: [0, 1],
    LEFT: [-1, 0],
    RIGHT: [1, 0],
    DEFAULT: [0, 0]
  };

  const mouseRow = game.findIndex(row => row.includes(MOUSE_SYMBOL));
  const mouseColumn = game[mouseRow].findIndex(cell => cell === MOUSE_SYMBOL);
  const mouseMove = MOVES[direction.toUpperCase()] || MOVES.DEFAULT;

  return game?.[mouseRow + mouseMove[1]]?.[mouseColumn + mouseMove[0]] === MOUSE_FOOD_SYMBOL;
};

export { canMouseEat };
