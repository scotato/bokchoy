import * as React from 'react'
import { Link as RouterLink, LinkProps } from 'react-router-dom'
import { chakra } from '@chakra-ui/react'

const ChakraLink = chakra(RouterLink)

export const Link = (props: LinkProps) => (
  <ChakraLink color="blue.500" {...props} />
)
