SUNDAY = 0
SATURDAY = 6
countHours = (year, holidays) => {
  const getExtraHoursFromHoliday = (total, holiday) => {
    const dayOfWeek = new Date(`${holiday}/${year}`).getDay()
    const isAWorkingDayOfWeek = dayOfWeek > SUNDAY && dayOfWeek < SATURDAY
    if (isAWorkingDayOfWeek) {
      return total + 2
    }
    return total
  }
  return holidays.reduce(getExtraHoursFromHoliday, 0)
}
