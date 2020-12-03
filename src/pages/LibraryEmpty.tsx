import * as React from 'react'
import { VStack, Icon, Text, useColorModeValue } from '@chakra-ui/react'
import { FaLayerGroup } from 'react-icons/fa'
import { MainLayout } from '../layouts/MainLayout'
import { RecipeAdd } from '../components/Recipe'

export const LibraryEmpty = () => {
  const iconColor = useColorModeValue('gray.100', 'gray.800')
  const textColor = useColorModeValue('gray.600', 'gray.300')

  return (
    <MainLayout>
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
          Keek track of your favorite online recipes by storing them here in
          your recipe library.
        </Text>
        <RecipeAdd
          colorScheme="blue"
          bg="blue.500"
          color="white"
          size="lg"
          children="Add Recipe from URL"
        />
      </VStack>
    </MainLayout>
  )
}
