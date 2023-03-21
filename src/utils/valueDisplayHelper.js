export const addressDisplay = (address, l = 8, r = -6) => {
  if (typeof address !== 'string') return address
  return address.slice(0, l) + '...' + address.slice(r)
}

export const numberDisplay = (value) => {
  if (typeof value === 'number') value = value.toFixed(2)
  else if (typeof value === 'string') value = parseFloat(value).toFixed(2)
  return value?.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
}

export const toTitleCase = (str) => {
  return str
    .split('_')
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}
