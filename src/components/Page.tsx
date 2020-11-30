import * as React from 'react'
import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react'
import { useTemplate } from '../hooks'

export const Page = (props: BoxProps) => {
  const backgroundColor = useColorModeValue('gray.100', 'gray.900')
  const { isLarge } = useTemplate()

  return isLarge ? (
    <Box
      p={8}
      backgroundColor={backgroundColor}
      width="100%"
      height="100%"
      {...props}
    >
      <Box width="100%" height="100%" maxW="1024px" mx="auto">
        {props.children}
      </Box>
    </Box>
  ) : (
    <Box backgroundColor={backgroundColor} width="100%" height="100%">
      {props.children}
    </Box>
  )
}
