import * as React from 'react'
import { VStack, Heading, Image, Skeleton, AspectRatio } from '@chakra-ui/react'
import { Card } from '../Card'
import { Recipe as SchemaRecipe, WebPage } from 'schema-dts'

interface RecipeRowProps {
  recipe: SchemaRecipe
  webpage?: WebPage
}

export const RecipeRow = (props: RecipeRowProps) => {
  const { recipe } = props

  const title = recipe.name as string
  const thumbnailUrl = recipe.thumbnailUrl as string
  const imageUrl = Array.isArray(recipe.image) ? recipe.image[0] : recipe.image
  const image = imageUrl || thumbnailUrl

  return (
    <Card>
      <AspectRatio ratio={16 / 9}>
        <Image
          objectPosition="center"
          objectFit="cover"
          src={image}
          alt="thumbnail"
          fallback={<Skeleton />}
        />
      </AspectRatio>

      <VStack p={4} spacing={2} alignItems="start">
        <Heading
          fontSize={24}
          fontWeight="bold"
          lineHeight="1.2"
          children={title}
        />
      </VStack>
    </Card>
  )
}
