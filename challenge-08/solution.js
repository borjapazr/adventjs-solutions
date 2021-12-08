const maxProfit = prices => {
  let maximumProfit = -1;
  prices.forEach((price, index) => {
    const profit = Math.max(...prices.slice(index + 1)) - price;
    maximumProfit = profit > 0 && profit > maximumProfit ? profit : maximumProfit;
  });
  return maximumProfit;
};

const maxProfitLoop = prices => {
  let maximumProfit = -1;
  let minimumPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    maximumProfit = Math.max(maximumProfit, prices[i] - minimumPrice);
    minimumPrice = Math.min(minimumPrice, prices[i]);
  }
  return maximumProfit > 0 ? maximumProfit : -1;
};

const maxProfitReduce = prices =>
  prices.reduce((maximumProfit, price, index, array) => {
    const profit = Math.max(...array.slice(index + 1)) - price;
    return profit > 0 && profit > maximumProfit ? profit : maximumProfit;
  }, -1);

export { maxProfit, maxProfitLoop, maxProfitReduce };
