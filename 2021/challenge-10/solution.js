const getCoins = change => {
  const AVAILABLE_COINS = [1, 2, 5, 10, 20, 50];

  if (change <= 0) return Array(AVAILABLE_COINS.length).fill(0);

  let remainingChange = change;
  const changeReturn = [];
  AVAILABLE_COINS.reverse().forEach((coin, index) => {
    changeReturn[index] = Math.floor(remainingChange / coin);
    remainingChange %= coin;
  });
  return changeReturn.reverse();
};

const getCoinsMap = change => {
  const AVAILABLE_COINS = [1, 2, 5, 10, 20, 50];

  if (change <= 0) return Array(AVAILABLE_COINS.length).fill(0);

  let remainingChange = change;
  return AVAILABLE_COINS.reverse()
    .map(coin => {
      const coinAmount = Math.floor(remainingChange / coin);
      remainingChange %= coin;
      return coinAmount;
    })
    .reverse();
};

const getCoinsReduce = change => {
  const AVAILABLE_COINS = [1, 2, 5, 10, 20, 50];

  if (change <= 0) return Array(AVAILABLE_COINS.length).fill(0);

  let remainingChange = change;
  return AVAILABLE_COINS.reduceRight((changeReturn, coin, index) => {
    const previousChangeReturn = [...changeReturn];
    previousChangeReturn[index] = Math.floor(remainingChange / coin);
    remainingChange %= coin;
    return previousChangeReturn;
  }, []);
};

export { getCoins, getCoinsMap, getCoinsReduce };
