import * as React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { Code, Grid } from '@chakra-ui/react'
import { MainLayout } from '../layouts/MainLayout'
import { useWebsites } from '../hooks/use-websites'
import { Recipe } from '../components/Recipe'

export { DebugWebsiteHeader } from './DebugWebsiteHeader'

type RecipeParams = { id: string }

export const DebugWebsite = () => {
  const { id } = useParams<RecipeParams>()
  const { websiteById } = useWebsites()
  const website = websiteById(id)
  const { recipe, webpage } = website?.graph ?? {}

  if (!website) return <Redirect to="/settings/debug" />

  return (
    <MainLayout>
      <Grid mb={8}>
        <Code bg="transparent" p={4} overflowX="scroll">
          <pre>{JSON.stringify(website, null, 2)}</pre>
        </Code>
      </Grid>
      {recipe ? <Recipe recipe={recipe} webpage={webpage} /> : null}
    </MainLayout>
  )
}
