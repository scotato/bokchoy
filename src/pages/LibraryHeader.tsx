import * as React from 'react'
import { Header } from '../components/Header'
import { RecipeAdd } from '../components/Recipe'

export const LibraryHeader = () => {
  return <Header title="Library" secondary={<RecipeAdd />} />
}
