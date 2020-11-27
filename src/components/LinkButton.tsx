import * as React from 'react'
import { Button, ButtonProps } from '@chakra-ui/react'
import { Link, LinkProps } from 'react-router-dom'

export const LinkButton = (props: ButtonProps & LinkProps) => {
  return (
    <Button as={Link} {...props}>
      {props.children}
    </Button>
  )
}
