import * as React from 'react'
import { Flex, FlexProps, Stack, useColorModeValue } from '@chakra-ui/react'
import { CopyIcon, InfoIcon } from '@chakra-ui/icons'
import { ColorModeSwitcher } from '../components/ColorModeSwitcher'
import { LinkButton } from '../components/LinkButton'
import { useTemplate } from '../hooks'

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
        <LinkButton
          to="/library"
          leftIcon={<CopyIcon color="blue.500" height={24} />}
          justifyContent="start"
          backgroundColor={backgroundColor}
          fontSize={20}
          fontWeight={400}
        >
          Library
        </LinkButton>
        <LinkButton
          to="/debug"
          leftIcon={<InfoIcon color="blue.500" height={24} />}
          justifyContent="start"
          backgroundColor={backgroundColor}
          fontSize={20}
          fontWeight={400}
        >
          Debug
        </LinkButton>
      </Stack>
      <ColorModeSwitcher alignSelf="center" />
    </Flex>
  )
}
