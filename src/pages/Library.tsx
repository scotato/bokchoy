import * as React from 'react'
import { VStack } from '@chakra-ui/react'
import { MainLayout } from '../layouts/MainLayout'
import { useLibrary } from '../hooks'
import { Link } from '../components/Link'
import { RecipeRow } from '../components/Recipe'
import { Page } from '../components/Page'
import { Group } from '../components/Group'
import { Divider } from '../components/Divider'
import { LibraryEmpty } from './LibraryEmpty'

export { LibraryHeader } from './LibraryHeader'

export const Library = () => {
  const { library } = useLibrary()

  return library.length ? (
    <MainLayout>
      <Page>
        <Group>
          <VStack align="stretch" divider={<Divider />}>
            {library.map((website) => (
              <Link
                to={`/library/${website.id}`}
                px={3}
                py={3}
                key={website.id}
              >
                <RecipeRow recipe={website.graph?.recipe!} />
              </Link>
            ))}
          </VStack>
        </Group>
      </Page>
    </MainLayout>
  ) : (
    <LibraryEmpty />
  )
}
