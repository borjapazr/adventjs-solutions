const getCoins = change => {
  const availableCoins = [1, 2, 5, 10, 20, 50];

  if (change <= 0) return Array(availableCoins.length).fill(0);

  let remainingChange = change;
  const changeReturn = [];
  availableCoins.reverse().forEach((coin, index) => {
    changeReturn[index] = Math.floor(remainingChange / coin);
    remainingChange %= coin;
  });
  return changeReturn.reverse();
};

const getCoinsMap = change => {
  const availableCoins = [1, 2, 5, 10, 20, 50];

  if (change <= 0) return Array(availableCoins.length).fill(0);

  let remainingChange = change;
  return availableCoins
    .reverse()
    .map(coin => {
      const coinAmount = Math.floor(remainingChange / coin);
      remainingChange %= coin;
      return coinAmount;
    })
    .reverse();
};

const getCoinsReduce = change => {
  const availableCoins = [1, 2, 5, 10, 20, 50];

  if (change <= 0) return Array(availableCoins.length).fill(0);

  let remainingChange = change;
  return availableCoins.reduceRight((changeReturn, coin, index) => {
    const previousChangeReturn = [...changeReturn];
    previousChangeReturn[index] = Math.floor(remainingChange / coin);
    remainingChange %= coin;
    return previousChangeReturn;
  }, []);
};

export { getCoins, getCoinsMap, getCoinsReduce };
