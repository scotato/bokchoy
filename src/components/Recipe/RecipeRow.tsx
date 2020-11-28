import * as React from 'react'
import { VStack, HStack, Text, Image, Skeleton } from '@chakra-ui/react'
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
    <HStack p={0} spacing={4}>
      <Image
        objectPosition="center"
        objectFit="cover"
        boxSize={16}
        width={16}
        height={16}
        src={image}
        alt="thumbnail"
        fallback={<Skeleton width={16} height={16} />}
        borderRadius={8}
      />

      <VStack spacing={2} alignItems="start">
        <Text fontSize={24} lineHeight="1.2" children={title} />
      </VStack>
    </HStack>
  )
}
