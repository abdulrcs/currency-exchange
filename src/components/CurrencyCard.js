import { Button, Flex, Stack, Text } from '@chakra-ui/react'
import findCurrencyName from '../utilities/findCurrencyName'

export default function CurrencyCard({ currency, balance, list, setList }) {
  const currencyCode = currency[0]
  const amount = currency[1].toLocaleString()
  const totalAmount = (currency[1] * balance).toLocaleString()

  return (
    <Flex
      w="100%"
      bg="gray.900"
      color="white"
      border="3px solid black"
      borderRadius="10px"
    >
      <Stack spacing={1} w="90%" p={2}>
        <Flex alignItems="center" justifyContent="space-between">
          <Text fontSize="xl">{currencyCode}</Text>
          <Text fontSize="2xl">{totalAmount}</Text>
        </Flex>
        <Text
          fontStyle="italic"
          fontWeight="bold"
        >{`${currencyCode} - ${findCurrencyName(currencyCode)}`}</Text>
        <Text fontStyle="italic">{`1 USD = ${currencyCode} ${amount}`}</Text>
      </Stack>

      <Flex
        w="10%"
        borderLeft="3px solid black"
        alignItems="center"
        justifyContent="center"
      >
        <Button
          colorScheme="ghost"
          onClick={() => setList(list.filter(e => e[0] !== currencyCode))}
        >
          (-)
        </Button>
      </Flex>
    </Flex>
  )
}
