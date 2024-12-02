import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { PublicRouter } from './router/PublicRouter'

function App() {
  return (
    <ChakraProvider>
          <PublicRouter />
    </ChakraProvider>
  )
}

export default App
