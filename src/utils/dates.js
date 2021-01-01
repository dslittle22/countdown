export const dateDiff = (startDate, endDate) => {
  var startYear = startDate.getFullYear();
  var february =
    (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0
      ? 29
      : 28;
  var daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  var yearDiff = endDate.getFullYear() - startYear;
  var monthDiff = endDate.getMonth() - startDate.getMonth();
  if (monthDiff < 0) {
    yearDiff--;
    monthDiff += 12;
  }
  var dayDiff = endDate.getDate() - startDate.getDate();
  if (dayDiff < 0) {
    if (monthDiff > 0) {
      monthDiff--;
    } else {
      yearDiff--;
      monthDiff = 11;
    }
    dayDiff += daysInMonth[startDate.getMonth()];
  }
  let msg = '';
  msg += yearDiff
    ? `${yearDiff} year${yearDiff !== 1 ? 's' : ''}, ${monthDiff} month${
        monthDiff === 1 ? '' : 's'
      } and `
    : monthDiff
    ? `${monthDiff} month${monthDiff === 1 ? '' : 's'} and `
    : '';
  msg += `${dayDiff} day${dayDiff === 1 ? '' : 's'}.`;
  return msg;
};

export const countBoxes = (startDate, eventDate, option) => {
  const dayInMS = 24 * 60 * 60 * 1000;
  const totalDays = Math.round((eventDate - startDate) / dayInMS) + 1;

  if (totalDays < 1) return 0;
  if (option === 'day') return totalDays;
  switch (option) {
    case 'week':
      return Math.floor(totalDays / 7) + 1;
    case 'month':
      return Math.floor(totalDays / 30.5) + 1;
    case 'year':
      return Math.floor(totalDays / 365) + 1;
    default:
      return totalDays;
  }
};
