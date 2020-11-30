import * as React from 'react'
import { VStack, Icon, Text, useColorModeValue } from '@chakra-ui/react'
import { FaLayerGroup } from 'react-icons/fa'
import { MainLayout } from '../layouts/MainLayout'
import { useLibrary } from '../hooks'
import { Link } from '../components/Link'
import { RecipeRow } from '../components/Recipe'
import { Page } from '../components/Page'
import { Group } from '../components/Group'
import { Divider } from '../components/Divider'
import { RecipeAdd } from '../components/Recipe'

export { LibraryHeader } from './LibraryHeader'

const LibraryEmpty = () => {
  const iconColor = useColorModeValue('gray.100', 'gray.800')
  const textColor = useColorModeValue('gray.600', 'gray.300')

  return (
    <VStack
      p={8}
      borderRadius={16}
      direction="column"
      align="center"
      justifyContent="center"
      minH="100%"
      spacing={16}
    >
      <Icon color={iconColor} fontSize="25vw" as={FaLayerGroup} />
      <Text fontSize={24} textAlign="center" color={textColor} maxW="512px">
        Keek track of your favorite online recipes by storing them here in your
        recipe library.
      </Text>
      <RecipeAdd
        colorScheme="blue"
        bg="blue.500"
        color="white"
        size="lg"
        children="Add Recipe from URL"
      />
    </VStack>
  )
}

export const Library = () => {
  const { library } = useLibrary()

  return library.length ? (
    <MainLayout>
      <Page>
        <Group>
          <VStack align="stretch" divider={<Divider />}>
            {library.map((website) => (
              <Link
                to={`/library/${website.id}`}
                px={4}
                py={4}
                key={website.id}
              >
                <RecipeRow recipe={website.graph?.recipe!} />
              </Link>
            ))}
          </VStack>
        </Group>
      </Page>
    </MainLayout>
  ) : (
    <MainLayout>
      <LibraryEmpty />
    </MainLayout>
  )
}
