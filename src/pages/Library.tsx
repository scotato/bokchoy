import * as React from 'react'
import { VStack, StackDivider, useColorModeValue } from '@chakra-ui/react'
import { MainLayout } from '../layouts/MainLayout'
import { useLibrary } from '../hooks'
import { Link } from '../components/Link'
import { RecipeRow } from '../components/Recipe'

export const Library = () => {
  const dividerColor = useColorModeValue('gray.200', 'gray.800')
  const { library } = useLibrary()

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
      </VStack>
    </MainLayout>
  )
}
