function wrapping(gifts) {
  const wrapGift = gift => {
    const horizontalWrap = '*'.repeat(gift.length + 2)
    return [horizontalWrap, `*${gift}*`, horizontalWrap].join('\n')
  }
  return gifts.map(wrapGift)
}
