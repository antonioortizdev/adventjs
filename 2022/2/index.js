countHours = (year, holidays) => {
  return holidays.reduce((total, holiday) => {
    const dayOfWeek = new Date(`${holiday}/${year}`).getDay()
    const isWorkingHoliday = dayOfWeek > 0 && dayOfWeek < 6
    return total + (isWorkingHoliday ? 2 : 0)
  }, 0)
}