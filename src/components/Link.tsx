import * as React from 'react'
import {
  Link as RouterLink,
  NavLink as RouterNavLink,
  LinkProps as RouterLinkProps,
  NavLinkProps as RouterNavLinkProps,
} from 'react-router-dom'
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'

export type LinkProps = RouterLinkProps & ChakraLinkProps
export type NavLinkProps = RouterNavLinkProps & ChakraLinkProps

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
