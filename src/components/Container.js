import { Flex } from '@chakra-ui/react'

export default function Container({ children }) {
  return (
    <Flex w="100vw" h="100vh" bg="#0f0e17" justifyContent="center">
      <Flex
        w="500px"
        h="100vh"
        maxW="90vw"
        border="3px solid black"
        direction="column"
      >
        {children}
      </Flex>
    </Flex>
  )
}
