import * as React from 'react'
import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react'

interface HeaderProps {
  title: string
  primary?: JSX.Element
  secondary?: JSX.Element
}

export const Header = (props: HeaderProps) => {
  const borderColor = useColorModeValue('gray.200', 'gray.800')

  return (
    <Flex
      paddingX={8}
      paddingY={4}
      justifyContent="space-between"
      align-items="center"
      borderBottomColor={borderColor}
      borderBottomWidth={2}
    >
      <Box children={props.primary} />
      <Heading fontSize={24}>{props.title}</Heading>
      <Box children={props.secondary} />
    </Flex>
  )
}
