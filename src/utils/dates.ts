import {optionType} from '../components/App'

export const dateDiff = (startDate: Date, endDate: Date) => {
    const startYear: number = startDate.getFullYear();
    const february: number =
      (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0
        ? 29
        : 28;
    const daysInMonth: number[] = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    let yearDiff: number = endDate.getFullYear() - startYear;
    let monthDiff: number = endDate.getMonth() - startDate.getMonth();
    if (monthDiff < 0) {
      yearDiff--;
      monthDiff += 12;
    }
    let dayDiff: number = endDate.getDate() - startDate.getDate();
    if (dayDiff < 0) {
      if (monthDiff > 0) {
        monthDiff--;
      } else {
        yearDiff--;
        monthDiff = 11;
      }
      dayDiff += daysInMonth[startDate.getMonth()];
    }
    return { dayDiff, monthDiff, yearDiff };
  };
  
  export const countBoxes = (startDate: Date, endDate: Date, option: optionType): number => {
    const dayInMS = 24 * 60 * 60 * 1000;
    const totalDays = Math.round((endDate.getTime() - startDate.getTime()) / dayInMS) + 1;
    const { monthDiff, yearDiff } = dateDiff(startDate, endDate);
  
    if (totalDays < 1) return 0;
    switch (option) {
      case 'day':
        return totalDays;
      case 'week':
        return Math.floor(totalDays / 7) + 1;
      case 'month':
        return monthDiff;
      case 'year':
        return yearDiff;
      default:
        return totalDays;
    }
  };
  
  export const formattedDateDiff = (startDate: Date, endDate: Date): string => {
    const { dayDiff, monthDiff, yearDiff } = dateDiff(startDate, endDate);
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
  