import { Button, Flex, Select } from '@chakra-ui/react'
import { useState } from 'react'

export default function AddCurrency({ currencies, setList }) {
  const [code, setCode] = useState('')
  const handleChange = e => setCode(e)

  const handleSubmit = e => {
    e.preventDefault()
    setList(prev => [...prev, [code, currencies[code]]])
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex h="100%" color="white" border="3px solid black">
        <Select
          placeholder="(+) Add more currency.."
          borderRadius={0}
          border="none"
          bg="white.200"
          color="gray.900"
          onChange={e => handleChange(e.target.value)}
        >
          {Object.keys(currencies).map(e => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </Select>

        <Button
          type="submit"
          borderRadius={0}
          borderLeft="3px solid black"
          colorScheme="orange"
          _focus={{ border: 'none', borderLeft: '3px solid black' }}
        >
          Submit
        </Button>
      </Flex>
    </form>
  )
}
