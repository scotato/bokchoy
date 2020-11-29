import * as React from 'react'
import {
  StackDivider,
  StackDividerProps,
  useColorModeValue,
} from '@chakra-ui/react'

export const Divider = (props: StackDividerProps) => {
  const dividerColor = useColorModeValue('gray.200', 'gray.900')

  return (
    <StackDivider
      borderColor={dividerColor}
      marginX={0}
      marginY={0}
      margin={0}
      borderWidth={1}
      {...props}
    />
  )
}
