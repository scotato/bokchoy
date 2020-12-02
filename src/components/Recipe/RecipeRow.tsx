import * as React from 'react'
import { VStack, HStack, Text } from '@chakra-ui/react'
import { Recipe as SchemaRecipe, WebPage } from 'schema-dts'
import { Image } from '../Image'
interface RecipeRowProps {
  recipe: SchemaRecipe
  webpage?: WebPage
}

type Person = {
  name: string
}

type Organization = {
  name: string
}

export const RecipeRow = (props: RecipeRowProps) => {
  const { recipe } = props
  const title = recipe.name as string
  const thumbnailUrl = recipe.thumbnailUrl as string
  const imageUrl = Array.isArray(recipe.image) ? recipe.image[0] : recipe.image
  const image = imageUrl || thumbnailUrl
  const author = Array.isArray(recipe?.author)
    ? (recipe?.author as Person[])
    : (recipe?.author as Person) ?? []
  const publisher = Array.isArray(recipe?.publisher)
    ? (recipe?.publisher as Organization[])
    : (recipe?.publisher as Organization) ?? []
  const authors = Array.isArray(author)
    ? author.map((a) => a.name)
    : [author.name]
  const publishers = Array.isArray(publisher)
    ? publisher.map((a) => a.name)
    : [publisher.name]
  const detail = [...authors, ...publishers].join(', ')

  return (
    <HStack p={0} spacing={4}>
      <Image src={image} boxSize={12} borderRadius={12} />

      <VStack spacing={1} alignItems="start">
        <Text fontSize={20} lineHeight="1.2" children={title} />
        <Text
          fontSize={16}
          lineHeight="1.2"
          color="gray.500"
          children={detail}
        />
      </VStack>
    </HStack>
  )
}
