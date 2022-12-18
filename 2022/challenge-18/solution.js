function dryNumber(dry, numbers) {
  return Array.from({ length: numbers }, (_, index) => index + 1).filter(number => {
    return number.toString().includes(dry);
  });
}

export { dryNumber };
