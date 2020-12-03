import * as React from 'react'
import { Header } from '../components/Header'
import { RecipeAdd } from '../components/Recipe'
import { BackButton } from '../components/BackButton'

export const DebugHeader = () => {
  return (
    <Header
      title="Debug"
      primary={<BackButton to="/settings" />}
      secondary={<RecipeAdd />}
    />
  )
}
