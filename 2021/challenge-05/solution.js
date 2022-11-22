const daysToXmas = date => {
  const xmasDate = new Date(2021, 11, 25);
  const msInADay = 1000 * 60 * 60 * 24;
  return Math.ceil((xmasDate - date) / msInADay);
};

export { daysToXmas };
