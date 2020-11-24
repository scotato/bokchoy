import * as React from 'react'
import { useParams } from 'react-router-dom'
import { Code, Box, Text, Spinner } from '@chakra-ui/react'
import { WarningIcon } from '@chakra-ui/icons'
import { MainLayout } from '../layouts/MainLayout'
import { useWebsites } from '../hooks/use-websites'

type WebsiteParams = {
  id: string
}

export const Website = () => {
  const { id } = useParams<WebsiteParams>()
  const { websiteById } = useWebsites()
  const website = websiteById(id)

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
  } = website?.graph?.recipe ?? {}

  console.log(website, rest)

  if (!website)
    return (
      <MainLayout>
        <WarningIcon />
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
          {JSON.stringify(website?.graph, null, 2)}
          {JSON.stringify(website?.metadata, null, 2)}
        </pre>
      </Code>
    </MainLayout>
  )
}
