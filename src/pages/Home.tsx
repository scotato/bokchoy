import * as React from 'react'
import { MainLayout } from '../layouts/MainLayout'
import { useWebsites } from '../hooks/use-websites'
import { Box, Text } from '@chakra-ui/react'
import { Link } from '../components/Link'

export const Home = () => {
  const { websites } = useWebsites()
  return (
    <MainLayout>
      <Box>
        {websites.map((website) => (
          <Link to={website.id} key={website.id}>
            <Text fontSize={20} mb={4}>
              {website?.graph?.recipe?.name ?? website.url}
            </Text>
          </Link>
        ))}
      </Box>
    </MainLayout>
  )
}
