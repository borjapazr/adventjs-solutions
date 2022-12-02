const countHours = (year, holidays) => {
  return holidays.reduce((overtimeHours, holiday) => {
    const dayOfWeek = new Date(`${holiday}/${year}`).getDay();
    const isWorkDay = dayOfWeek !== 0 && dayOfWeek !== 6;
    return isWorkDay ? overtimeHours + 2 : overtimeHours;
  }, 0);
};

export { countHours };
