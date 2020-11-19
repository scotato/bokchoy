import * as React from "react"
import { Text, Link, Grid } from "@chakra-ui/react"
import { RecipeScraper } from "../components/RecipeScraper"

export const Debug = () => (
  <Grid minH="100vh" p={9}>
    <RecipeScraper />
    <Text textAlign="center" fontSize="xl" alignSelf="flex-end">
      scrape metadata and <Link
        color="blue.500"
        href="https://json-ld.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        json-ld
      </Link> from <Link
        color="blue.500"
        href="https://schema.org/Recipe"
        target="_blank"
        rel="noopener noreferrer"
      >
        online recipes
      </Link>
    </Text>
  </Grid>
)
