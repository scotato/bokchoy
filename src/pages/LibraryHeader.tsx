import * as React from 'react'
import { Header } from '../components/Header'
import { AddRecipe } from '../components/AddRecipe'

export const LibraryHeader = () => {
  return <Header title="Library" secondary={<AddRecipe />} />
}
