import React, { useState, FormEvent } from 'react'
import {
  Grid,
  Flex,
  Code,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Spinner,
} from '@chakra-ui/react'
import { LinkIcon } from '@chakra-ui/icons'
import { useWebsite, useWebsites } from '../hooks'

const DEMO_RECIPE =
  'https://www.bonappetit.com/recipe/slow-roast-gochujang-chicken'

interface RecipeScraperProps {
  recipeId?: string
}

export const RecipeScraper = (props: RecipeScraperProps) => {
  const { websiteById } = useWebsites()
  const website = websiteById(props.recipeId)
  const [{ url }, setState] = useState({ url: website?.url ?? DEMO_RECIPE })
  const { data, loading } = useWebsite(url)

  const handleSubmit = (event: FormEvent) => {
    setState({ url: event.currentTarget.nodeValue ?? '' })
  }

  return (
    <Grid templateRows="auto 1fr">
      <form onSubmit={handleSubmit}>
        <HStack>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              children={
                loading ? (
                  <Spinner thickness="4px" size="md" />
                ) : (
                  <LinkIcon boxSize={5} height="100%" />
                )
              }
            />
            <Input
              placeholder="url"
              size="lg"
              value={url}
              onChange={(e) => setState({ url: e.target.value })}
              required
            />
          </InputGroup>

          <Button type="submit" size="lg" colorScheme="blue" disabled={loading}>
            get data
          </Button>

          <Button size="lg" onClick={() => setState({ url: '' })}>
            clear
          </Button>
        </HStack>
      </form>

      <Flex
        marginTop={9}
        overflowX="scroll"
        alignItems="stretch"
        justifyContent="stretch"
      >
        <Code>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </Code>
      </Flex>
    </Grid>
  )
}
