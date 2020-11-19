import * as React from "react"
import { Grid, Spinner } from "@chakra-ui/react"
import { WarningIcon } from "@chakra-ui/icons"
import { useRecipe } from "../hooks/use-recipe"

const DEMO_RECIPE = "https://www.bonappetit.com/recipe/slow-roast-gochujang-chicken"

export const Recipe = () => {
  const { data, loading, error } = useRecipe(DEMO_RECIPE)
  
  if (error) return <WarningIcon />
  
  if (loading) return (
    <Grid minH="100vh">
      <Spinner m="auto" size="xl" />
    </Grid>
  )

  return (
    <Grid minH="100vh" p={9}>
      {JSON.stringify(data?.metadata)}
      {JSON.stringify(data?.jsonld)}
    </Grid>
  )
  
}