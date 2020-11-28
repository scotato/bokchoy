import * as React from 'react'
import {
  Link as RouterLink,
  NavLink as RouterNavLink,
  LinkProps,
  NavLinkProps,
} from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

export const Link = (props: LinkProps) => (
  <ChakraLink
    as={RouterLink}
    _hover={{
      textDecoration: 'none',
    }}
    {...props}
  />
)

export const NavLink = (props: NavLinkProps) => {
  return (
    <ChakraLink
      as={RouterNavLink}
      _hover={{
        textDecoration: 'none',
      }}
      {...props}
    />
  )
}
