import * as React from 'react'
import { Header } from '../components/Header'
import { BackButton } from '../components/BackButton'
import { SaveRecipe } from '../components/SaveRecipe'

export const RecipeHeader = () => {
  return (
    <Header
      title="Recipe"
      primary={<BackButton to="/library" />}
      secondary={<SaveRecipe />}
    />
  )
}
