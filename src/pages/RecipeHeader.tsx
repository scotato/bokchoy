import * as React from 'react'
import { HStack } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { BackButton } from '../components/BackButton'
import { RecipeSave, RecipeShare, RecipeUrl } from '../components/Recipe'

export const RecipeHeader = () => {
  return (
    <Header
      title="Recipe"
      primary={<BackButton to="/library" />}
      secondary={
        <HStack>
          <RecipeSave />
          <RecipeShare />
          <RecipeUrl />
        </HStack>
      }
    />
  )
}
