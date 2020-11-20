import * as React from "react"
import { Code, Box, Text, Spinner } from "@chakra-ui/react"
import { WarningIcon } from "@chakra-ui/icons"
import { MainLayout } from "../layouts/MainLayout"
import { useRecipe } from "../hooks/use-recipe"

const DEMO_RECIPE = "https://www.bonappetit.com/recipe/slow-roast-gochujang-chicken"

export const Recipe = () => {
  const { data, loading, error } = useRecipe(DEMO_RECIPE)
  
  if (error) return (
    <MainLayout>
      <WarningIcon />
    </MainLayout>
  )
  
  if (loading) return (
    <MainLayout>
      <Spinner m="auto" size="xl" />
    </MainLayout>
  )

  return (
    <MainLayout>
      {data?.recipe?.map(recipe => {
        return (
          <Box mb={9}>
            <Text>{JSON.stringify(recipe.keywords, null, 2)}</Text>
          </Box>      
        )
      })}

      <Code p={7} borderRadius={5} overflowX="scroll">
        <pre>
          {JSON.stringify(data?.recipe, null, 2)}
          {JSON.stringify(data?.metadata, null, 2)}
        </pre>
      </Code>
    </MainLayout>
  )
}
