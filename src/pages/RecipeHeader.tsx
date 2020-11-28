import * as React from 'react'
import { Header } from '../components/Header'
import { SaveRecipe } from '../components/SaveRecipe'

export const RecipeHeader = () => {
  return <Header title="Recipe" secondary={<SaveRecipe />} />
}
