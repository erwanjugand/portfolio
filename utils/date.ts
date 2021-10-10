export function differenceInYears (date1: Date, date2: Date): number {
  let diff = date1.getTime() - date2.getTime()
  diff /= 1000
  diff /= (60 * 60 * 24)

  return Math.round(diff / 365.25)
}

export function compareDesc (date1: Date, date2: Date): number {
  const diff = date1.getTime() - date2.getTime()

  if (diff > 0) {
    return -1
  } else if (diff < 0) {
    return 1
  } else {
    return diff
  }
}
