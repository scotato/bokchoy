import * as React from "react"
import { Text, Link } from "@chakra-ui/react"
import { RecipeScraper } from "../components/RecipeScraper"
import { MainLayout } from "../layouts/MainLayout"

export const Debug = () => (
  <MainLayout>
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
  </MainLayout>
)
