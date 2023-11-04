// Write a function that returns the total number of days between the Jan 1st and a given date, accounting for leap years.

function toDayOfYear(arr) {
  const [day, month, year] = arr;

  const daysInMonths = {
    january: 31,
    february: 28,
    march: 31,
    april: 30,
    may: 31,
    june: 30,
    july: 31,
    august: 31,
    september: 30,
    october: 31,
    november: 30,
    december: 31,
    set leapYear(year) {
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        this.february = 29;
      }
    },
  };

  daysInMonths.leapYear = year;
  const dayCount =
    Object.values(daysInMonths)
      .slice(0, month - 1)
      .reduce((a, c) => a + c, 0) + day;
  return dayCount;
}

console.log(toDayOfYear([25, 12, 2017]), 359);
console.log(toDayOfYear([1, 5, 3000]), 121);
console.log(toDayOfYear([31, 10, 1991]), 304);
console.log(toDayOfYear([5, 11, 1604]), 310);
