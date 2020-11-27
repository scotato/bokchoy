import * as React from 'react'
import { Flex, VStack, useColorModeValue } from '@chakra-ui/react'
import { StarIcon, InfoIcon } from '@chakra-ui/icons'
import { ColorModeSwitcher } from '../components/ColorModeSwitcher'
import { LinkButton } from '../components/LinkButton'

export const Navigator = () => {
  const backgroundColor = useColorModeValue('gray.200', 'gray.800')

  return (
    <Flex
      justifyContent="space-between"
      flexDirection="column"
      bg={backgroundColor}
      paddingX={4}
      paddingY={8}
    >
      <VStack align="stretch">
        <LinkButton
          to="/"
          leftIcon={<StarIcon color="blue.500" height={24} />}
          justifyContent="start"
          backgroundColor={backgroundColor}
        >
          Discover
        </LinkButton>
        <LinkButton
          to="/debug"
          leftIcon={<InfoIcon color="blue.500" height={24} />}
          justifyContent="start"
          backgroundColor={backgroundColor}
        >
          Debug
        </LinkButton>
      </VStack>
      <ColorModeSwitcher alignSelf="center" />
    </Flex>
  )
}
