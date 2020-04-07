export const throttle = (func, wait = 150) => {
  let timer = null;
  return (...args) => {
    if (timer !== null) return

    timer = setTimeout(() => {
      func.apply(this, args)
      timer = null
    }, wait)
  }
}