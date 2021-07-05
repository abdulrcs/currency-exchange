import { Stack } from '@chakra-ui/react'

export default function CurrencyContainer({ children }) {
  return (
    <Stack h="100%" spacing={3} p={2} overflowY="auto">
      {children}
    </Stack>
  )
}
