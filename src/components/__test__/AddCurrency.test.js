import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import AddCurrency from '../AddCurrency'

test('Render currency dropdown', () => {
  render(<AddCurrency currencies={[['USD', 1]]} />)
  expect(screen.getByText('(+) Add more currency..')).toBeInTheDocument()
})
