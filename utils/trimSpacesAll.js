export default function trimSpacesAll(value) {
  const input = typeof value === 'string' ? value : String(value)
  // Replace all spaces with an empty string
  const processed = input.replace(/ /g, '')
  // const output = parseInt(processed, 10)
  const output = parseFloat(processed, 10)
  return output
}