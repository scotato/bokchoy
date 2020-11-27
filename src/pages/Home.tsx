import * as React from 'react'
import { MainLayout } from '../layouts/MainLayout'
import { useWebsites } from '../hooks/use-websites'
import { Grid } from '@chakra-ui/react'
import { Link } from '../components/Link'
import { RecipeRow } from '../components/Recipe'

export const Home = () => {
  const { websites } = useWebsites()
  return (
    <MainLayout>
      <Grid
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
        ]}
        gap={8}
      >
        {websites.map((website) => {
          return website.graph?.recipe ? (
            <Link to={`/recipe/${website.id}`} key={website.id}>
              <RecipeRow recipe={website.graph?.recipe} />
            </Link>
          ) : null
        })}
      </Grid>
    </MainLayout>
  )
}
