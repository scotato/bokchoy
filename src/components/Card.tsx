import * as React from 'react'
import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react'

export const Card = (props: BoxProps) => {
  const backgroundColor = useColorModeValue('white', 'gray.800')

  return (
    <Box
      borderRadius={24}
      overflow="hidden"
      backgroundColor={backgroundColor}
      spacing={0}
      width="100%"
      {...props}
    >
      {props.children}
    </Box>
  )
}
