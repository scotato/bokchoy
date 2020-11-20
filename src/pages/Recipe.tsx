import * as React from "react"
import { Grid, Code, Box, Text, Spinner } from "@chakra-ui/react"
import { WarningIcon } from "@chakra-ui/icons"
import { useRecipe } from "../hooks/use-recipe"

const DEMO_RECIPE = "https://www.bonappetit.com/recipe/slow-roast-gochujang-chicken"

export const Recipe = () => {
  const { data, loading, error } = useRecipe(DEMO_RECIPE)
  
  if (error) return (
    <Grid minH="100vh">
      <WarningIcon />
    </Grid>
  )
  
  if (loading) return (
    <Grid minH="100vh">
      <Spinner m="auto" size="xl" />
    </Grid>
  )

  return (
    <Grid minH="100vh" p={9}>
      {data?.recipe?.map(recipe => {
        return (
          <Box>
            <Text>{JSON.stringify(recipe.keywords, null, 2)}</Text>
          </Box>      
        )
      })}

      <Code p={9}>
        <pre>
          {JSON.stringify(data?.recipe, null, 2)}
          {JSON.stringify(data?.metadata, null, 2)}
        </pre>
      </Code>
    </Grid>
  )
}
