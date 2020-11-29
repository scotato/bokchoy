import * as React from 'react'
import {
  VStack,
  Box,
  Text,
  BoxProps,
  useColorModeValue,
} from '@chakra-ui/react'
import { Divider } from './Divider'
import { useTemplate } from '../hooks'

interface GroupProps {
  title?: string
  caption?: string
}

export const Group = (props: GroupProps & BoxProps) => {
  const backgroundColor = useColorModeValue('white', 'gray.800')
  const { isLarge } = useTemplate()
  const { title, caption, children, ...boxProps } = props

  return (
    <Box {...boxProps}>
      {title && (
        <Text px={5} py={2} color="gray.500" fontWeight="500">
          {title}
        </Text>
      )}
      <VStack
        overflow="hidden"
        align="stretch"
        width="100%"
        divider={<Divider />}
        backgroundColor={backgroundColor}
        borderRadius={isLarge ? 24 : 0}
        spacing={0}
      >
        {children}
      </VStack>
      {caption && (
        <Text px={5} py={2} color="gray.500" fontSize={16}>
          {caption}
        </Text>
      )}
    </Box>
  )
}
