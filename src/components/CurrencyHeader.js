import { Box, Flex, Input, Text } from '@chakra-ui/react'

export default function CurrencyHeader({ balance, setBalance }) {
  const handleChange = e => setBalance(e)

  return (
    <Box
      w="100%"
      bg="gray.900"
      color="white"
      borderBottom="3px solid black"
      p={2}
    >
      <Text>USD - United State Dollar</Text>
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold">
          USD
        </Text>
        <Input
          w="200px"
          fontSize="2xl"
          fontWeight="bold"
          textAlign="right"
          value={balance}
          border="none"
          focusBorderColor="none"
          onChange={e => handleChange(e.target.value)}
        />
      </Flex>
    </Box>
  )
}
