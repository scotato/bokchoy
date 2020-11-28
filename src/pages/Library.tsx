import * as React from 'react'
import { VStack, StackDivider, useColorModeValue } from '@chakra-ui/react'
import { MainLayout } from '../layouts/MainLayout'
import { useWebsites, useLibrary } from '../hooks'
import { Link } from '../components/Link'
import { RecipeRow } from '../components/Recipe'

export const Library = () => {
  const dividerColor = useColorModeValue('gray.200', 'gray.800')
  const { websites } = useWebsites()
  const { library } = useLibrary()
  const recipes = websites.filter((website) => website?.graph?.recipe)

  return (
    <MainLayout>
      <VStack
        align="stretch"
        divider={<StackDivider borderWidth={1} borderColor={dividerColor} />}
      >
        {library.map((website) => (
          <Link to={`/library/${website.id}`} key={website.id}>
            <RecipeRow recipe={website.graph?.recipe!} />
          </Link>
        ))}
        <span>debug</span>
        {recipes.map((website) => (
          <Link to={`/library/${website.id}`} key={website.id}>
            <RecipeRow recipe={website.graph?.recipe!} />
          </Link>
        ))}
      </VStack>
    </MainLayout>
  )
}
