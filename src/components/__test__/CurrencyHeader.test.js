import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import CurrencyHeader from '../CurrencyHeader'

test('Render currency header', () => {
  render(<CurrencyHeader balance={1} />)
  expect(screen.getByText('USD - United State Dollar')).toBeInTheDocument()
  expect(screen.getByDisplayValue(1)).toBeInTheDocument()
})
