import * as React from 'react'
import {
  Box,
  VStack,
  Heading,
  Text,
  AspectRatio,
  useColorModeValue,
} from '@chakra-ui/react'
import { Image } from '../Image'
import { useTemplate } from '../../hooks'

interface RecipeIngredientProps {
  title?: string
  subtitle?: string
  image?: string
  children?: JSX.Element
}

export const RecipeCard = (props: RecipeIngredientProps) => {
  const color = useColorModeValue('gray.600', 'gray.400')
  const { isLarge } = useTemplate()
  const { title, subtitle, image } = props

  return (
    <Box>
      {image ? (
        <AspectRatio ratio={16 / 9}>
          <Image src={image} />
        </AspectRatio>
      ) : null}

      <VStack
        px={isLarge ? 12 : 6}
        paddingTop={8}
        paddingBottom={4}
        spacing={2}
        alignItems="start"
      >
        <Heading fontWeight="bold" children={title} />
        {subtitle ? (
          <Text color={color} fontSize={20} children={subtitle} />
        ) : null}
        {props.children}
      </VStack>
    </Box>
  )
}
