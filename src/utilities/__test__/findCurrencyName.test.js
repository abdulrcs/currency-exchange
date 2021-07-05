import findCurrencyName from '../findCurrencyName'

describe('Find currency name from currency codes', () => {
  test('Find IDR full name', () => {
    expect(findCurrencyName('IDR')).toEqual('Indonesian Rupiah')
  })
})
