const daysToXmas = date => {
  const xmasDate = new Date(2021, 11, 25);
  const msInADay = 1000 * 60 * 60 * 24;
  return Math.ceil((xmasDate - date) / msInADay);
};

let date = new Date('Dec 1, 2021');
console.log(date.toDateString(), daysToXmas(date)); // 24
date = new Date('Dec 24, 2021 00:00:01');
console.log(date.toDateString(), daysToXmas(date)); // 1
date = new Date('Dec 24, 2021 23:59:59');
console.log(date.toDateString(), daysToXmas(date)); // 1
date = new Date('December 20, 2021 03:24:00');
console.log(date.toDateString(), daysToXmas(date)); // 5
date = new Date('Dec 25, 2021');
console.log(date.toDateString(), daysToXmas(date)); // 0
date = new Date('Dec 26, 2021');
console.log(date.toDateString(), daysToXmas(date)); // -1
date = new Date('Dec 31, 2021');
console.log(date.toDateString(), daysToXmas(date)); // -6
date = new Date('Jan 1, 2022 00:00:01');
console.log(date.toDateString(), daysToXmas(date)); // -7
date = new Date('Jan 1, 2022 23:59:59');
console.log(date.toDateString(), daysToXmas(date)); // -7
