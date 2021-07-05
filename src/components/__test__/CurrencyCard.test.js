import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import CurrencyCard from '../CurrencyCard'

test('Render the currency card', () => {
  render(<CurrencyCard balance={1} currency={['IDR', 1]} />)
  expect(screen.getByText(/IDR - Indonesian Rupiah/)).toBeInTheDocument()
})
