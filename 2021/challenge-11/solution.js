const shouldBuyFidelity = times => times > 23;

const shouldBuyFidelityRecursive = times => {
  const TICKET_PRICE = 12;
  const FIDELITY_CARD_PRICE = 250;
  const DISCOUNT_PERCENTAGE = 0.75;

  const ticketsRegularPrice = TICKET_PRICE * times;

  const calculateTicketsPromotionalPrice = n =>
    n > 0 ? TICKET_PRICE * DISCOUNT_PERCENTAGE ** n + calculateTicketsPromotionalPrice(n - 1) : 0;
  const totalFidelityPrice = FIDELITY_CARD_PRICE + calculateTicketsPromotionalPrice(times);

  return totalFidelityPrice < ticketsRegularPrice;
};

const shouldBuyFidelityLoop = times => {
  const TICKET_PRICE = 12;
  const FIDELITY_CARD_PRICE = 250;
  const DISCOUNT_PERCENTAGE = 0.75;

  const ticketsRegularPrice = TICKET_PRICE * times;

  let totalFidelityPrice = FIDELITY_CARD_PRICE;
  for (let i = 1; i <= times; i++) {
    totalFidelityPrice += TICKET_PRICE * DISCOUNT_PERCENTAGE ** i;
  }

  return totalFidelityPrice < ticketsRegularPrice;
};

export { shouldBuyFidelity, shouldBuyFidelityRecursive, shouldBuyFidelityLoop };
