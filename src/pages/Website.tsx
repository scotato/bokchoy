import * as React from 'react'
import { useParams } from 'react-router-dom'
import { Code } from '@chakra-ui/react'
import { WarningIcon } from '@chakra-ui/icons'
import { MainLayout } from '../layouts/MainLayout'
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
      <MainLayout>
        <WarningIcon />
      </MainLayout>
    )

  return (
    <MainLayout>
      {recipe ? <Recipe recipe={recipe} webpage={webpage} /> : null}

      <Code p={7} borderRadius={5} overflowX="scroll">
        <pre>
          {JSON.stringify(website?.graph, null, 2)}
          {JSON.stringify(website?.metadata, null, 2)}
        </pre>
      </Code>
    </MainLayout>
  )
}
