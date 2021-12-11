const shouldBuyFidelity = times => times > 23;

const shouldBuyFidelityRecursive = times => {
  const ticketPrice = 12;
  const fidelityCardPrice = 250;
  const discountPercentage = 0.75;

  const ticketsRegularPrice = ticketPrice * times;

  const calculateTicketsPromotionalPrice = n =>
    n > 0 ? ticketPrice * discountPercentage ** n + calculateTicketsPromotionalPrice(n - 1) : 0;
  const totalFidelityPrice = fidelityCardPrice + calculateTicketsPromotionalPrice(times);

  return totalFidelityPrice < ticketsRegularPrice;
};

const shouldBuyFidelityLoop = times => {
  const ticketPrice = 12;
  const fidelityCardPrice = 250;
  const discountPercentage = 0.75;

  const ticketsRegularPrice = ticketPrice * times;

  let totalFidelityPrice = fidelityCardPrice;
  for (let i = 1; i <= times; i++) {
    totalFidelityPrice += ticketPrice * discountPercentage ** i;
  }

  return totalFidelityPrice < ticketsRegularPrice;
};

export { shouldBuyFidelity, shouldBuyFidelityRecursive, shouldBuyFidelityLoop };
