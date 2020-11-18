import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  Grid,
  theme,
} from "@chakra-ui/react"
import { RecipeScraper } from "./RecipeScraper"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box>
      <Grid minH="100vh" p={9}>
        <RecipeScraper />
        <Text textAlign="center" fontSize="xl" alignSelf="flex-end">
          scrape metadata and <Link
            color="teal.500"
            href="https://json-ld.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            json-ld
          </Link> from <Link
            color="teal.500"
            href="https://schema.org/Recipe"
            target="_blank"
            rel="noopener noreferrer"
          >
            online recipes
          </Link>
        </Text>
      </Grid>
    </Box>
  </ChakraProvider>
)
