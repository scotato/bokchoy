import * as React from 'react'
import { useParams } from 'react-router-dom'
import { RecipeScraper } from '../components/RecipeScraper'
import { MainLayout } from '../layouts/MainLayout'

export const Debug = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <MainLayout>
      <RecipeScraper recipeId={id} />
    </MainLayout>
  )
}
