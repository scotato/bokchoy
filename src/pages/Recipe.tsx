import * as React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { useWebsites } from '../hooks/use-websites'
import { Recipe as RecipeComponent } from '../components/Recipe'

type RecipeParams = { id: string }

export const Recipe = () => {
  const { id } = useParams<RecipeParams>()
  const { websiteById } = useWebsites()
  const website = websiteById(id)
  const { recipe, webpage } = website?.graph ?? {}

  if (!website) return <Redirect to="/library" />

  return (
    <MainLayout>
      {recipe ? <RecipeComponent recipe={recipe} webpage={webpage} /> : null}
    </MainLayout>
  )
}
