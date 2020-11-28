import * as React from 'react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { LinkButton, LinkButtonProps } from '../components/LinkButton'

export const BackButton = (props: LinkButtonProps) => {
  return (
    <LinkButton
      leftIcon={<ChevronLeftIcon marginRight={0} fontSize={32} />}
      paddingLeft={1}
      iconSpacing={0}
      justifyContent="start"
      fontSize={20}
      color="blue.500"
      children={props.children ?? 'Back'}
      {...props}
    />
  )
}
