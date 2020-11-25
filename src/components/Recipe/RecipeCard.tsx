import * as React from 'react'
import {
  VStack,
  Heading,
  Image,
  Text,
  Skeleton,
  AspectRatio,
  useColorModeValue,
} from '@chakra-ui/react'
import { Card } from '../Card'

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
    <Card>
      {image ? (
        <AspectRatio ratio={16 / 9} width="100%">
          <Image
            objectPosition="center"
            objectFit="cover"
            src={image}
            alt="thumbnail"
            fallback={<Skeleton />}
          />
        </AspectRatio>
      ) : null}

      <VStack py={6} px={8} spacing={4} alignItems="start">
        <Heading fontWeight="bold" children={title} />
        {subtitle ? (
          <Text color={color} fontSize={20} children={subtitle} />
        ) : null}
        {props.children}
      </VStack>
    </Card>
  )
}
