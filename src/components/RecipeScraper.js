import React, { useState } from 'react'
import {
  Box,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Spinner,
} from '@chakra-ui/react'
import { LinkIcon } from '@chakra-ui/icons'
import ReactJson from 'react-json-view'
import { useWebsite } from '../hooks/use-website'

const DEMO_RECIPE =
  // 'https://domesticate-me.com/crispy-orange-chicken-with-lemon-ginger-broccoli-rice/'
  'https://www.bonappetit.com/recipe/slow-roast-gochujang-chicken'

export const RecipeScraper = () => {
  const [{ url }, setState] = useState({ url: DEMO_RECIPE })
  const { data, loading } = useWebsite(url)

  const handleSubmit = (e) => {
    setState({ url: e.target.value })
  }

  return (
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

      {data && (
        <Box marginTop={9} overflowX="scroll">
          <h3>metadata</h3>
          <ReactJson src={data.metadata} />
          <br />
          <h3>json-ld</h3>
          <ReactJson src={data.jsonld} />
        </Box>
      )}
    </form>
  )
}
