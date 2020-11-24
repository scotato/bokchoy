import * as React from 'react'
import { MainLayout } from '../layouts/MainLayout'
import { useWebsites } from '../hooks/use-websites'
import { Box, Text } from '@chakra-ui/react'

export const Home = () => {
  const { websites } = useWebsites()
  return (
    <MainLayout>
      {websites.map((website) => (
        <Box key={website.id}>
          <Text>{website.id}</Text>
          <Text>{website.url}</Text>
          <Text>{website?.graph?.recipe?.name}</Text>
        </Box>
      ))}
    </MainLayout>
  )
}
