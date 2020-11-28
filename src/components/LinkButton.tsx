import * as React from 'react'
import { Button, ButtonProps } from '@chakra-ui/react'
import { useLocation, LinkProps, NavLinkProps } from 'react-router-dom'
import { Link, NavLink } from './Link'

export type LinkButtonProps = Omit<LinkProps, 'isActive'> & ButtonProps
export type NavLinkButtonProps = Omit<NavLinkProps, 'isActive'> & ButtonProps

export const LinkButton = (props: LinkButtonProps) => {
  return (
    <Button
      as={Link}
      _hover={{
        textDecoration: 'none',
      }}
      {...props}
    >
      {props.children}
    </Button>
  )
}

export const NavLinkButton = (props: NavLinkButtonProps) => {
  const { pathname } = useLocation()
  const isActive = pathname.includes(props.to as string)

  return (
    <Button
      as={NavLink}
      isActive={isActive}
      _hover={{
        textDecoration: 'none',
      }}
      {...props}
    >
      {props.children}
    </Button>
  )
}
