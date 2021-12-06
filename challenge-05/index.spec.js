const daysToXmas = date => {
  const xmasDate = new Date(2021, 11, 25);
  const msInADay = 1000 * 60 * 60 * 24;
  return Math.ceil((xmasDate - date) / msInADay);
};

describe('Challenge 05: Contando los días para los regalos', () =>
  describe('daysToXmas should return', () => {
    it.each([
      [24, 'Dec 1, 2021'],
      [1, 'Dec 24, 2021 00:00:01'],
      [1, 'Dec 24, 2021 23:59:59'],
      [5, 'December 20, 2021 03:24:00'],
      [0, 'Dec 25, 2021'],
      [-1, 'Dec 26, 2021'],
      [-6, 'Dec 31, 2021'],
      [-7, 'Jan 1, 2022 00:00:01'],
      [-7, 'Jan 1, 2022 23:59:59']
    ])('%p days when the date is %p', (expected, date) => {
      expect(daysToXmas(new Date(date))).toBe(expected);
    });
  }));
