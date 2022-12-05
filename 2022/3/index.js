distributeGifts = (packOfGifts, reindeers) => {
  const packWeight = packOfGifts.join('').length
  const reindeersMaxWeight = reindeers.join('').length * 2
  return Math.floor(reindeersMaxWeight / packWeight)
}