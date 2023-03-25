export const addressDisplay = (address:string, l = 8, r = -6): string => {
  if (typeof address !== 'string') return address
  return address.slice(0, l) + '...' + address.slice(r)
}

export const numberDisplay = (value: number | string): string => {
  if (typeof value === 'number') value = value.toFixed(2)
  else if (typeof value === 'string') value = parseFloat(value).toFixed(2)
  return value?.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
}
