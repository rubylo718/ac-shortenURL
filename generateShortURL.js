function generateShortURL (num) {
  const digit = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  let digitArray = []
  digitArray = digitArray.concat(...digit)

  let randomDigit = ''
  for (let i = 0; i < Number(num); i++) {
    randomDigit += sample(digitArray)
  }
  return randomDigit
}

function sample (array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// console.log(generateShortURL(5))
export { generateShortURL }
