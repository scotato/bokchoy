import * as React from 'react'
import { Text, Grid, VStack } from '@chakra-ui/react'
import { MainLayout } from '../layouts/MainLayout'
import { useWebsites, useLibrary } from '../hooks'
import { Link } from '../components/Link'
import { RecipeRow } from '../components/Recipe'
import { RecipeSave } from '../components/Recipe'
import { DeleteWebsite } from '../components/DeleteWebsite'
import { Page } from '../components/Page'
import { Group } from '../components/Group'
import { Divider } from '../components/Divider'

export { DebugHeader } from './DebugHeader'

export const Debug = () => {
  const { websites } = useWebsites()
  const { libraryIds } = useLibrary()
  const other = websites.filter((website) => !website?.graph?.recipe)
  const recipes = websites.filter((website) => website?.graph?.recipe)
  const recipesSaved = recipes.filter((website) =>
    libraryIds.includes(website.id)
  )
  const recipesCached = recipes.filter(
    (website) => !libraryIds.includes(website.id)
  )

  return (
    <MainLayout>
      <Page>
        <VStack spacing={4} align="stretch">
          <Group title="Library">
            <VStack align="stretch" divider={<Divider />}>
              {recipesSaved.map((website) => (
                <Grid
                  templateColumns="1fr auto auto"
                  columnGap={2}
                  alignItems="center"
                  key={website.id}
                  px={3}
                  py={3}
                >
                  <Link to={`/settings/debug/${website.id}`}>
                    <RecipeRow recipe={website.graph?.recipe!} />
                  </Link>
                  <RecipeSave id={website.id} />
                  <DeleteWebsite id={website.id} />
                </Grid>
              ))}
            </VStack>
          </Group>

          <Group title="Cache">
            <VStack align="stretch" divider={<Divider />}>
              {recipesCached.map((website) => (
                <Grid
                  templateColumns="1fr auto auto"
                  columnGap={2}
                  alignItems="center"
                  key={website.id}
                  px={3}
                  py={3}
                >
                  <Link to={`/settings/debug/${website.id}`}>
                    <RecipeRow recipe={website.graph?.recipe!} />
                  </Link>
                  <RecipeSave id={website.id} />
                  <DeleteWebsite id={website.id} />
                </Grid>
              ))}
            </VStack>
          </Group>

          {other.length ? (
            <Group title="Websites Without Recipes">
              <VStack align="stretch" divider={<Divider />}>
                {other.map((website) => (
                  <Grid
                    templateColumns="1fr auto auto"
                    columnGap={2}
                    alignItems="center"
                    key={website.id}
                    px={4}
                    py={3}
                  >
                    <Link to={`/settings/debug/${website.id}`}>
                      <Text>{website.url}</Text>
                    </Link>
                    <DeleteWebsite id={website.id} />
                  </Grid>
                ))}
              </VStack>
            </Group>
          ) : null}
        </VStack>
      </Page>
    </MainLayout>
  )
}
