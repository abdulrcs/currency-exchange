import fetchCurrency from '../fetchCurrency'

test('Fetch currency API', async () => {
  const data = await fetchCurrency()
  expect(Object.keys(data).length).toBeGreaterThan(1)
})
