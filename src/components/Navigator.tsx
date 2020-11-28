import * as React from 'react'
import { Flex, FlexProps, Stack, useColorModeValue } from '@chakra-ui/react'
import { CopyIcon, InfoIcon } from '@chakra-ui/icons'
import { ColorModeSwitcher } from '../components/ColorModeSwitcher'
import { NavLinkButton, NavLinkButtonProps } from '../components/LinkButton'
import { useTemplate } from '../hooks'

const NavigatorButton = (props: NavLinkButtonProps) => {
  const backgroundColor = useColorModeValue('gray.200', 'gray.800')

  return (
    <NavLinkButton
      leftIcon={<CopyIcon color="blue.500" height={24} />}
      justifyContent="start"
      backgroundColor={backgroundColor}
      fontSize={20}
      fontWeight={400}
      children={props.children}
      {...props}
    />
  )
}

export const Navigator = (props: FlexProps) => {
  const backgroundColor = useColorModeValue('gray.200', 'gray.800')
  const { size } = useTemplate()
  const stackDirection = size === 'large' ? 'column' : 'row'

  return (
    <Flex
      justifyContent="space-between"
      flexDirection="column"
      bg={backgroundColor}
      paddingX={4}
      paddingY={8}
      {...props}
    >
      <Stack align="stretch" justify="center" direction={stackDirection}>
        <NavigatorButton
          to="/library"
          leftIcon={<CopyIcon color="blue.500" height={24} />}
          children="Library"
        />
        <NavigatorButton
          to="/debug"
          leftIcon={<InfoIcon color="blue.500" height={24} />}
          children="Debug"
        />
      </Stack>
      <ColorModeSwitcher alignSelf="center" />
    </Flex>
  )
}
