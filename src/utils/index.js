export const throttle = (func, wait = 100) => {
  let timer = null;
  return function(...args) {
    if (timer === null) {
      timer = setTimeout(() => {
        func.apply(this, args);
        timer = null;
      }, wait);
    }
  };
};

export const appearanceObserverOpts = (setAppearedState, threshold = 0.2) => (
  {
    onChange: ({ isIntersecting }) => {
      if (isIntersecting) {
        setAppearedState(true)
      }
    },
    threshold,
  }
)
