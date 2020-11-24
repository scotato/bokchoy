import * as React from 'react'
import { useParams } from 'react-router-dom'
import { Code } from '@chakra-ui/react'
import { WarningIcon } from '@chakra-ui/icons'
import { MainLayout } from '../layouts/MainLayout'
import { useWebsites } from '../hooks/use-websites'

type WebsiteParams = {
  id: string
}

export const WebsiteDebug = () => {
  const { id } = useParams<WebsiteParams>()
  const { websiteById } = useWebsites()
  const website = websiteById(id)

  if (!website)
    return (
      <MainLayout>
        <WarningIcon />
      </MainLayout>
    )

  return (
    <MainLayout>
      <Code p={8} mb={4} borderRadius={5} overflowX="scroll">
        <pre>{JSON.stringify(website?.graph, null, 2)}</pre>
      </Code>

      <Code p={8} mb={4} borderRadius={5} overflowX="scroll">
        <pre>{JSON.stringify(website?.metadata, null, 2)}</pre>
      </Code>
    </MainLayout>
  )
}
