import * as React from 'react'
import { Header } from '../components/Header'
import { RecipeAdd } from '../components/Recipe'
import { useLibrary } from '../hooks'

export const LibraryHeader = () => {
  const { library } = useLibrary()
  return (
    <Header
      title="Library"
      secondary={library.length ? <RecipeAdd /> : undefined}
    />
  )
}
