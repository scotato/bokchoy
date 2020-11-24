import * as React from 'react'
import { PronounceableText } from 'schema-dts'
import { Box, Heading, List, ListItem } from '@chakra-ui/react'

interface RecipeIngredientProps {
  ingredients: PronounceableText[]
}

export const RecipeIngredients = (props: RecipeIngredientProps) => {
  return (
    <Box>
      <Heading fontWeight="bold" fontSize={24} children="Ingredients" />
      <List>
        {props.ingredients.map((ingredient, i) => (
          <ListItem children={ingredient} key={i} />
        ))}
      </List>
    </Box>
  )
}
