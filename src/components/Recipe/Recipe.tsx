import * as React from 'react'
import { VStack } from '@chakra-ui/react'
import {
  Recipe as SchemaRecipe,
  AggregateRating,
  WebPage,
  PronounceableText,
  HowToStep,
} from 'schema-dts'
import {
  RecipeCard,
  RecipeDetails,
  RecipeIngredients,
  RecipeInstructions,
} from './'

interface RecipeProps {
  recipe: SchemaRecipe
  webpage?: WebPage
}

export const Recipe = (props: RecipeProps) => {
  const { recipe, webpage } = props

  const ingredients = recipe.recipeIngredient as PronounceableText[]
  const instructions = recipe.recipeInstructions as HowToStep[]
  const headlineRecipe = recipe.alternativeHeadline as string
  const descriptionRecipe = recipe.description as string
  const descriptionWebpage = webpage?.description as string
  const title = recipe.name as string
  const thumbnailUrl = recipe.thumbnailUrl as string
  const imageUrl = Array.isArray(recipe.image) ? recipe.image[0] : recipe.image
  const image = imageUrl || thumbnailUrl
  const subtitle = descriptionRecipe || headlineRecipe || descriptionWebpage

  return (
    <VStack alignItems="flex-start" spacing={8}>
      <RecipeCard title={title} subtitle={subtitle} image={image}>
        <RecipeDetails
          datePublished={recipe.datePublished as string}
          dateModified={recipe.dateModified as string}
          prepTime={recipe.prepTime as string}
          cookTime={recipe.cookTime as string}
          totalTime={recipe.totalTime as string}
          aggregateRating={recipe.aggregateRating as AggregateRating}
          recipeYield={recipe.recipeYield as string[]}
        />
      </RecipeCard>
      <RecipeIngredients ingredients={ingredients} />
      <RecipeInstructions instructions={instructions} />

      {/* <Box>
        <Text fontWeight="bold">keywords</Text>
        <Text>{JSON.stringify(keywords, null, 2)}</Text>
      </Box>
      <Box>
        <Text fontWeight="bold">publisher</Text>
        <Text>{JSON.stringify(publisher, null, 2)}</Text>
      </Box>

      <Box>
        <Text fontWeight="bold">isPartOf</Text>
        <Text>{JSON.stringify(isPartOf, null, 2)}</Text>
      </Box>

      <Box>
        <Text fontWeight="bold">isAccessibleForFree</Text>
        <Text>{JSON.stringify(isAccessibleForFree, null, 2)}</Text>
      </Box>

      <Box>
        <Text fontWeight="bold">author</Text>
        <Text>{JSON.stringify(author, null, 2)}</Text>
      </Box>
      <Box>
        <Text fontWeight="bold">image</Text>
        <Text>{JSON.stringify(image, null, 2)}</Text>
      </Box>
      <Box>
        <Text fontWeight="bold">mainEntityOfPage</Text>
        <Text>{JSON.stringify(mainEntityOfPage, null, 2)}</Text>
      </Box>

      <Box>
        <Text fontWeight="bold">recipeCategory</Text>
        <Text>{JSON.stringify(recipeCategory, null, 2)}</Text>
      </Box> */}
    </VStack>
  )
}
