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
export const formatDateWithDayName = (date) => dayjs(date).format("dddd, DD MMM YYYY")

export const appearanceObserverOpts = (setAppearedState, threshold = 0.2) => ({
  onChange: ({ isIntersecting }) => {
    if (isIntersecting) {
      setAppearedState(true)
    }
  },
  threshold,
})

export const newlineToBr = (string) => {
  if (typeof string !== 'string') {
    throw new TypeError('Expected a string');
  }

  return string.replace(/\r?\n/g, '<br>$&');
}
