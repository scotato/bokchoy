import * as React from 'react'
import { VStack, StackDivider, useColorModeValue } from '@chakra-ui/react'
import { MainLayout } from '../layouts/MainLayout'
import { useWebsites } from '../hooks/use-websites'
import { Link } from '../components/Link'
import { RecipeRow } from '../components/Recipe'

export const Library = () => {
  const { websites } = useWebsites()
  const dividerColor = useColorModeValue('gray.200', 'gray.800')

  return (
    <MainLayout>
      <VStack
        align="stretch"
        divider={<StackDivider borderWidth={1} borderColor={dividerColor} />}
      >
        {websites.map((website) => {
          return website.graph?.recipe ? (
            <Link to={`/recipe/${website.id}`} key={website.id}>
              <RecipeRow recipe={website.graph?.recipe} />
            </Link>
          ) : null
        })}
      </VStack>
    </MainLayout>
  )
}
