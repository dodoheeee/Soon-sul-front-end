export function financial(x: string, n: number) {
  return Number.parseFloat(x).toFixed(n);
}
export const formatNumber = (value: number) => {
  return value && value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
