import convertCurrency from './convertCurrency'

export default async function fetchCurrency() {
  const data = await fetch(
    'http://api.exchangeratesapi.io/v1/latest?access_key=76d6acb0420f7522a14a1700bb00123b&symbols=USD,CAD,IDR,GBP,CHF,SGD,INR,MYR,JPY,KRW&format=1'
  )
    .then(res => res.json())
    .then(json => json['rates'])

  const keys = Object.keys(data)
  const values = Object.values(data)
  const finalData = {}

  for (let i = 0; i < keys.length; i++) {
    finalData[keys[i]] = convertCurrency(data['USD'], values[i])
  }

  return finalData
}
