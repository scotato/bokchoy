import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Router, PageRoutes } from './Routes'
import { theme } from '../theme'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <PageRoutes />
    </Router>
  </ChakraProvider>
)
