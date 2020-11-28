import * as React from 'react'
import { Grid, VStack, StackDivider, useColorModeValue } from '@chakra-ui/react'
import { MainLayout } from '../layouts/MainLayout'
import { useWebsites } from '../hooks'
import { Link } from '../components/Link'
import { RecipeRow } from '../components/Recipe'
import { SaveRecipe } from '../components/SaveRecipe'
import { DeleteWebsite } from '../components/DeleteWebsite'

export { DebugHeader } from './DebugHeader'

export const Debug = () => {
  const dividerColor = useColorModeValue('gray.200', 'gray.800')
  const { websites } = useWebsites()
  const recipes = websites.filter((website) => website?.graph?.recipe)

  return (
    <MainLayout>
      <VStack
        align="stretch"
        divider={<StackDivider borderWidth={1} borderColor={dividerColor} />}
      >
        {recipes.map((website) => (
          <Grid
            templateColumns="1fr auto auto"
            columnGap={2}
            alignItems="center"
            key={website.id}
          >
            <Link to={`/settings/debug/${website.id}`}>
              <RecipeRow recipe={website.graph?.recipe!} />
            </Link>
            <SaveRecipe id={website.id} />
            <DeleteWebsite id={website.id} />
          </Grid>
        ))}
      </VStack>
    </MainLayout>
  )
}
