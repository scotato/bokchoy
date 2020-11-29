import * as React from 'react'
import { Button, ButtonProps, useColorModeValue } from '@chakra-ui/react'
import { useLocation, LinkProps, NavLinkProps } from 'react-router-dom'
import { Link, NavLink } from './Link'

export type LinkButtonProps = Omit<LinkProps, 'isActive'> & ButtonProps
export type NavLinkButtonProps = Omit<NavLinkProps, 'isActive'> & ButtonProps

export const LinkButton = (props: LinkButtonProps) => {
  const bg = useColorModeValue('white', 'gray.900')

  return (
    <Button as={Link} bg={bg} {...props}>
      {props.children}
    </Button>
  )
}

export const NavLinkButton = (props: NavLinkButtonProps) => {
  const { pathname } = useLocation()
  const isActive = pathname.includes(props.to as string)

  return (
    <Button as={NavLink} isActive={isActive} {...props}>
      {props.children}
    </Button>
  )
}
