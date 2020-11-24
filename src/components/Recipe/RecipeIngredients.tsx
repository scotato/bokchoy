import * as React from 'react'
import { PronounceableText } from 'schema-dts'
import { Box, Heading, UnorderedList, ListItem } from '@chakra-ui/react'

interface RecipeIngredientProps {
  ingredients: PronounceableText[]
}

export const RecipeIngredients = (props: RecipeIngredientProps) => {
  return (
    <Box>
      <Heading fontWeight="bold" fontSize={24} children="Ingredients" />
      <UnorderedList>
        {props.ingredients.map((ingredient, i) => (
          <ListItem children={ingredient} key={i} />
        ))}
      </UnorderedList>
    </Box>
  )
}
