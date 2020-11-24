import * as React from 'react'
import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react'

interface RecipeIngredientProps {
  title?: string
  subtitle?: string
}

export const RecipeHeader = (props: RecipeIngredientProps) => {
  const color = useColorModeValue('gray.600', 'gray.400')
  const { title, subtitle } = props

  return (
    <Box>
      <Heading fontWeight="bold" children={title} />
      {subtitle ? (
        <Text color={color} fontSize={20} children={subtitle} />
      ) : null}
    </Box>
  )
}
