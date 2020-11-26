import * as React from 'react'
import { useParams } from 'react-router-dom'
import { WarningIcon } from '@chakra-ui/icons'
import { RecipeLayout } from '../layouts/RecipeLayout'
import { useWebsites } from '../hooks/use-websites'
import { Recipe } from '../components/Recipe'

type WebsiteParams = {
  id: string
}

export const Website = () => {
  const { id } = useParams<WebsiteParams>()
  const { websiteById } = useWebsites()
  const website = websiteById(id)
  const { recipe, webpage } = website?.graph ?? {}

  if (!website)
    return (
      <RecipeLayout>
        <WarningIcon />
      </RecipeLayout>
    )

  return (
    <RecipeLayout>
      {recipe ? <Recipe recipe={recipe} webpage={webpage} /> : null}
    </RecipeLayout>
  )
}
