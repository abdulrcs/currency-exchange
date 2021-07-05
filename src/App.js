import React, { useEffect, useState } from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'

import CurrencyCard from './components/CurrencyCard'
import Container from './components/Container'
import CurrencyHeader from './components/CurrencyHeader'
import CurrencyContainer from './components/CurrencyContainer'
import AddCurrency from './components/AddCurrency'

import fetchCurrency from './utilities/fetchCurrency'

function App() {
  const [balance, setBalance] = useState(1)
  const [currencies, setCurrencies] = useState({})
  const [list, setList] = useState([])

  useEffect(() => {
    fetchCurrency().then(data => {
      setCurrencies(data)
      setList([
        ['IDR', data['IDR']],
        ['SGD', data['SGD']],
        ['GBP', data['GBP']],
      ])
    })
  }, [])

  const CurrencyList = list.map(currency => (
    <CurrencyCard
      key={currency}
      currency={currency}
      balance={balance}
      list={list}
      setList={setList}
    />
  ))

  return (
    <ChakraProvider theme={theme}>
      <Container>
        <CurrencyHeader balance={balance} setBalance={setBalance} />
        <CurrencyContainer>
          {CurrencyList}
          <AddCurrency currencies={currencies} setList={setList} />
        </CurrencyContainer>
      </Container>
    </ChakraProvider>
  )
}

export default App
