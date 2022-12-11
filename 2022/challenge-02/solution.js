const countHours = (year, holidays) => {
  return holidays.reduce((overtimeHours, holiday) => {
    const dayOfWeek = new Date(`${holiday}/${year}`).getDay();
    const isWorkDay = dayOfWeek !== 0 && dayOfWeek !== 6;
    return isWorkDay ? overtimeHours + 2 : overtimeHours;
  }, 0);
};

const countHoursAlt = (year, holidays) => {
  return holidays.reduce((overtimeHours, holiday) => {
    const dayOfWeek = new Date(`${holiday}/${year}`).getDay();
    const isWorkDay = [1, 2, 3, 4, 5].includes(dayOfWeek);
    return overtimeHours + isWorkDay * 2;
  }, 0);
};

export { countHours, countHoursAlt };
