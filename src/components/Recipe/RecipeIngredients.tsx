import * as React from 'react'
import { PronounceableText } from 'schema-dts'
import { Heading, List, ListItem } from '@chakra-ui/react'
import { Card } from '../Card'

interface RecipeIngredientProps {
  ingredients: PronounceableText[]
}

export const RecipeIngredients = (props: RecipeIngredientProps) => {
  return (
    <Card py={6} px={8}>
      <Heading fontWeight="bold" fontSize={24} children="Ingredients" />
      <List>
        {props.ingredients.map((ingredient, i) => (
          <ListItem children={ingredient} key={i} />
        ))}
      </List>
    </Card>
  )
}
