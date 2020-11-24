import * as React from 'react'
import { Code, Box, Text, Spinner } from '@chakra-ui/react'
import { WarningIcon } from '@chakra-ui/icons'
import { MainLayout } from '../layouts/MainLayout'
import { useWebsite } from '../hooks/use-website'

const DEMO_RECIPE =
  // 'https://www.bonappetit.com/recipe/slow-roast-gochujang-chicken'
  'https://domesticate-me.com/crispy-orange-chicken-with-lemon-ginger-broccoli-rice/'

export const Recipe = () => {
  const { data, loading, error } = useWebsite(DEMO_RECIPE)

  const {
    alternativeHeadline,
    dateModified,
    datePublished,
    keywords,
    thumbnailUrl,
    publisher,
    isPartOf,
    isAccessibleForFree,
    author,
    aggregateRating,
    description,
    image,
    name,
    recipeIngredient,
    recipeInstructions,
    recipeYield,
    ...rest
  } = data?.graph?.recipe ?? {}

  console.log(data, rest)

  if (error)
    return (
      <MainLayout>
        <WarningIcon />
      </MainLayout>
    )

  if (loading)
    return (
      <MainLayout>
        <Spinner m="auto" size="xl" />
      </MainLayout>
    )

  return (
    <MainLayout>
      <Box mb={9}>
        <Text fontWeight="bold">alternativeHeadline</Text>
        <Text>{JSON.stringify(alternativeHeadline, null, 2)}</Text>
        <br />
        <Text fontWeight="bold">dateModified</Text>
        <Text>{JSON.stringify(dateModified, null, 2)}</Text>
        <br />
        <Text fontWeight="bold">datePublished</Text>
        <Text>{JSON.stringify(datePublished, null, 2)}</Text>
        <br />
        <Text fontWeight="bold">keywords</Text>
        <Text>{JSON.stringify(keywords, null, 2)}</Text>
        <br />
        <Text fontWeight="bold">thumbnailUrl</Text>
        <Text>{JSON.stringify(thumbnailUrl, null, 2)}</Text>
        <br />
        <Text fontWeight="bold">publisher</Text>
        <Text>{JSON.stringify(publisher, null, 2)}</Text>
        <br />
        <Text fontWeight="bold">isPartOf</Text>
        <Text>{JSON.stringify(isPartOf, null, 2)}</Text>
        <br />
        <Text fontWeight="bold">isAccessibleForFree</Text>
        <Text>{JSON.stringify(isAccessibleForFree, null, 2)}</Text>
        <br />
        <Text fontWeight="bold">author</Text>
        <Text>{JSON.stringify(author, null, 2)}</Text>
        <br />
        <Text fontWeight="bold">aggregateRating</Text>
        <Text>{JSON.stringify(aggregateRating, null, 2)}</Text>
        <br />
        <Text fontWeight="bold">description</Text>
        <Text>{JSON.stringify(description, null, 2)}</Text>
        <br />
        <Text fontWeight="bold">image</Text>
        <Text>{JSON.stringify(image, null, 2)}</Text>
        <br />
        <Text fontWeight="bold">name</Text>
        <Text>{JSON.stringify(name, null, 2)}</Text>
        <br />
        <Text fontWeight="bold">recipeIngredient</Text>
        <Text>{JSON.stringify(recipeIngredient, null, 2)}</Text>
        <br />
        <Text fontWeight="bold">recipeInstructions</Text>
        <Text>{JSON.stringify(recipeInstructions, null, 2)}</Text>
        <br />
        <Text fontWeight="bold">recipeYield</Text>
        <Text>{JSON.stringify(recipeYield, null, 2)}</Text>
      </Box>

      <Code p={7} borderRadius={5} overflowX="scroll">
        <pre>
          {JSON.stringify(data?.graph, null, 2)}
          {JSON.stringify(data?.metadata, null, 2)}
        </pre>
      </Code>
    </MainLayout>
  )
}
