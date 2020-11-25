import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Routes } from './Routes'
import { theme } from '../theme'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes />
  </ChakraProvider>
)
