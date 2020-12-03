import * as React from 'react'
import { VStack, Button, Icon, Text, useColorModeValue } from '@chakra-ui/react'
import { FaBug } from 'react-icons/fa'
import { MainLayout } from '../layouts/MainLayout'
import { useImport } from '../hooks'

export const DebugEmpty = () => {
  const { importRecipes, ImportInput } = useImport()
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
        <Icon color={iconColor} fontSize="25vw" as={FaBug} />
        <Text fontSize={24} textAlign="center" color={textColor} maxW="480px">
          Add a recipe or import backup data to begin. All data is stored in
          local browsers storage.
        </Text>
        <Button
          colorScheme="blue"
          bg="blue.500"
          color="white"
          size="lg"
          children="Import App Data"
          onClick={importRecipes}
        />
        <ImportInput />
      </VStack>
    </MainLayout>
  )
}
