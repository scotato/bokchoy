import * as React from 'react'
import { VStack, StackDivider, useColorModeValue } from '@chakra-ui/react'
import { MainLayout } from '../layouts/MainLayout'
import { useLibrary } from '../hooks'
import { Link } from '../components/Link'
import { RecipeRow } from '../components/Recipe'

export { LibraryHeader } from './LibraryHeader'

export const Library = () => {
  const dividerColor = useColorModeValue('gray.200', 'gray.800')
  const { library } = useLibrary()

  return (
    <MainLayout>
      <VStack
        align="stretch"
        divider={
          <StackDivider
            borderWidth={1}
            borderColor={dividerColor}
            marginX={0}
            marginY={0}
            margin={0}
          />
        }
      >
        {library.map((website) => (
          <Link to={`/library/${website.id}`} px={4} py={3} key={website.id}>
            <RecipeRow recipe={website.graph?.recipe!} />
          </Link>
        ))}
      </VStack>
    </MainLayout>
  )
}
