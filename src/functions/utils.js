export const getRandomColor = (string) => {
  let hash = [...string].reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc)
  }, 0)
  return `hsl(${hash % 360},75%,35%`
}
