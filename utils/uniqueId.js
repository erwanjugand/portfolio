let counter = 1

export default function uniqueId (prefix = '') {
  return prefix + ++counter
}
