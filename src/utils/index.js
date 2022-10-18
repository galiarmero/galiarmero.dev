import dayjs from "dayjs"

export const throttle = (func, wait = 100) => {
  let timer = null
  return function (...args) {
    if (timer === null) {
      timer = setTimeout(() => {
        func.apply(this, args)
        timer = null
      }, wait)
    }
  }
}

export const formatDate = (date) => dayjs(date).format("DD MMMM YYYY")
export const formatDateWithDayName = (date) =>
  dayjs(date).format("dddd, DD MMM YYYY")
export const formatDateEu = (date) => dayjs(date).format("DD MMM YYYY")
export const getDayName = (date) => dayjs(date).format("dddd")
export const getRelativeDayName = (date) => {
  date = dayjs(date)
  if (dayjs().format("DD MMM YYYY") === date.format("DD MMM YYYY")) {
    return "Today"
  }

  if (
    dayjs().subtract(1, "day").format("DD MMM YYYY") ===
    date.format("DD MMM YYYY")
  ) {
    return "Yesterday"
  }

  return date.format("dddd")
}

export const appearanceObserverOpts = (setAppearedState, threshold = 0.2) => ({
  onChange: ({ isIntersecting }) => {
    if (isIntersecting) {
      setAppearedState(true)
    }
  },
  threshold,
})

export const newlineToBr = (string) => {
  if (typeof string !== "string") {
    throw new TypeError("Expected a string")
  }

  return string.replace(/\r?\n/g, "<br>$&")
}
