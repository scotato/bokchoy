import * as React from 'react'
import {
  Box,
  VStack,
  Heading,
  Image,
  Text,
  Skeleton,
  AspectRatio,
  useColorModeValue,
} from '@chakra-ui/react'

interface RecipeIngredientProps {
  title?: string
  subtitle?: string
  image?: string
  children?: JSX.Element
}

export const RecipeCard = (props: RecipeIngredientProps) => {
  const color = useColorModeValue('gray.600', 'gray.400')
  const { title, subtitle, image } = props

  return (
    <Box width="100%">
      {image ? (
        <AspectRatio ratio={16 / 9} width="100%">
          <Image
            objectPosition="center"
            objectFit="cover"
            src={image}
            alt="thumbnail"
            fallback={<Skeleton />}
            width="100%"
          />
        </AspectRatio>
      ) : null}

      <VStack
        px={12}
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
