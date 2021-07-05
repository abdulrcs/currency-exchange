import convertCurrency from '../convertCurrency'

test('Convert currency from EUR to USD', () => {
  const USD = 1.185
  const IDR = 17235
  expect(convertCurrency(USD, IDR)).toBeCloseTo(14544.3)
})
