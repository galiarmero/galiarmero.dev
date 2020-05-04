export const colors = {
  bg: '#011321',
  lighterBg: '#071D2D',
  darkerBg: '#010F1A',
  selectBg: '#1428C4',
  subtleLine: '#122433',
  heading: '#FFF',
  text: '#E9E9E9',
  accent: '#00DFFC',
  boxShadow: 'rgba(1, 12, 20, 0.7)',
}

export const breakpoint = [
  480,
  768,
  992,
  1200,
].reduce(
  (obj, bp) => (
    { ...obj, [`media${Math.floor(bp / 100)}`]: `@media (min-width: ${bp}px)`}
  ),
  {}
)