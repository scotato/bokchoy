import * as React from 'react'
import {
  Box,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react'
import { Recipe as SchemaRecipe, WebPage, PronounceableText } from 'schema-dts'

interface RecipeProps {
  recipe: SchemaRecipe
  webpage?: WebPage
}

interface RecipeIngredientProps {
  ingredients: PronounceableText[]
}

const RecipeIngredients = (props: RecipeIngredientProps) => {
  return (
    <Box>
      <Heading fontWeight="bold" fontSize={24} mb={3} children="Ingredients" />
      <UnorderedList>
        {props.ingredients.map((ingredient, i) => (
          <ListItem children={ingredient} key={i} />
        ))}
      </UnorderedList>
    </Box>
  )
}

const RecipeSubtitle = (props: { text?: string }) => {
  const color = useColorModeValue('gray.600', 'gray.400')
  const { text } = props
  return text ? (
    <Text color={color} mb={3} fontSize={20} children={text} />
  ) : null
}

const RecipeDate = (props: { published: string; modified: string }) => {
  const { published, modified } = props
  const datePublished = published && new Date(published)
  const dateModified = modified && new Date(modified)
  const date = dateModified || datePublished
  return date ? <Text children={date.toLocaleDateString()} /> : null
}

export const Recipe = (props: RecipeProps) => {
  const { recipe, webpage } = props
  const {
    alternativeHeadline,
    dateModified,
    datePublished,
    keywords,
    thumbnailUrl,
    publisher,
    isPartOf,
    isAccessibleForFree,
    author,
    aggregateRating,
    description,
    image,
    name,
    recipeIngredient,
    recipeInstructions,
    recipeYield,
    cookTime,
    mainEntityOfPage,
    prepTime,
    recipeCategory,
    totalTime,
    ...rest
  } = recipe

  const ingredients = recipeIngredient as PronounceableText[]
  const headlineRecipe = alternativeHeadline as string
  const descriptionRecipe = description as string
  const descriptionWebpage = webpage?.description as string
  const subtitle = descriptionRecipe || headlineRecipe || descriptionWebpage

  console.log(rest)

  return (
    <Box mb={9}>
      <Heading fontWeight="bold" mb={3} children={name} />
      <RecipeSubtitle text={subtitle} />
      <RecipeDate
        published={datePublished as string}
        modified={dateModified as string}
      />
      <RecipeIngredients ingredients={ingredients} />

      <Text fontWeight="bold">keywords</Text>
      <Text>{JSON.stringify(keywords, null, 2)}</Text>
      <br />
      <Text fontWeight="bold">thumbnailUrl</Text>
      <Text>{JSON.stringify(thumbnailUrl, null, 2)}</Text>
      <br />
      <Text fontWeight="bold">publisher</Text>
      <Text>{JSON.stringify(publisher, null, 2)}</Text>
      <br />
      <Text fontWeight="bold">isPartOf</Text>
      <Text>{JSON.stringify(isPartOf, null, 2)}</Text>
      <br />
      <Text fontWeight="bold">isAccessibleForFree</Text>
      <Text>{JSON.stringify(isAccessibleForFree, null, 2)}</Text>
      <br />
      <Text fontWeight="bold">author</Text>
      <Text>{JSON.stringify(author, null, 2)}</Text>
      <br />
      <Text fontWeight="bold">aggregateRating</Text>
      <Text>{JSON.stringify(aggregateRating, null, 2)}</Text>
      <br />
      <Text fontWeight="bold">description</Text>
      <Text>{JSON.stringify(description, null, 2)}</Text>
      <br />
      <Text fontWeight="bold">image</Text>
      <Text>{JSON.stringify(image, null, 2)}</Text>
      <br />
      <Text fontWeight="bold">recipeInstructions</Text>
      <Text>{JSON.stringify(recipeInstructions, null, 2)}</Text>
      <br />
      <Text fontWeight="bold">recipeYield</Text>
      <Text>{JSON.stringify(recipeYield, null, 2)}</Text>
      <br />
      <Text fontWeight="bold">cookTime</Text>
      <Text>{JSON.stringify(cookTime, null, 2)}</Text>
      <br />
      <Text fontWeight="bold">mainEntityOfPage</Text>
      <Text>{JSON.stringify(mainEntityOfPage, null, 2)}</Text>
      <br />
      <Text fontWeight="bold">prepTime</Text>
      <Text>{JSON.stringify(prepTime, null, 2)}</Text>
      <br />
      <Text fontWeight="bold">recipeCategory</Text>
      <Text>{JSON.stringify(recipeCategory, null, 2)}</Text>
      <br />
      <Text fontWeight="bold">totalTime</Text>
      <Text>{JSON.stringify(totalTime, null, 2)}</Text>
    </Box>
  )
}
