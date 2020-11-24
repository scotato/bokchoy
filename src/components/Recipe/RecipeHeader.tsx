import * as React from 'react'
import { Box, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react'

interface RecipeIngredientProps {
  title?: string
  subtitle?: string
  image?: string
}

export const RecipeHeader = (props: RecipeIngredientProps) => {
  const color = useColorModeValue('gray.600', 'gray.400')
  const { title, subtitle, image } = props

  return (
    <Box>
      {image ? (
        <Image
          mb={4}
          objectPosition="center"
          height="256px"
          width="100%"
          objectFit="cover"
          borderRadius={8}
          src={image}
          alt="thumbnail"
        />
      ) : null}
      <Heading fontWeight="bold" children={title} />
      {subtitle ? (
        <Text color={color} fontSize={20} children={subtitle} />
      ) : null}
    </Box>
  )
}
