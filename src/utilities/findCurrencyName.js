export default function findCurrencyName(currencyCode) {
  if (currencyCode === 'USD') return 'United States Dollar'
  else if (currencyCode === 'CAD') return 'Canadian Dollar'
  else if (currencyCode === 'IDR') return 'Indonesian Rupiah'
  else if (currencyCode === 'GBP') return 'British Pound'
  else if (currencyCode === 'CHF') return 'Swiss Franc'
  else if (currencyCode === 'SGD') return 'Singapore Dollar'
  else if (currencyCode === 'INR') return 'Indian Rupee'
  else if (currencyCode === 'MYR') return 'Malaysian Ringgit'
  else if (currencyCode === 'JPY') return 'Japanese Yen'
  else if (currencyCode === 'KRW') return 'South Korea Won'
}
