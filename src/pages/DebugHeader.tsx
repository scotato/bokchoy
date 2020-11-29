import * as React from 'react'
import { HStack } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { BackButton } from '../components/BackButton'
import { RecipeImport, RecipeExport } from '../components/Recipe'

export const DebugHeader = () => {
  return (
    <Header
      title="Debug"
      primary={<BackButton to="/settings" />}
      secondary={
        <HStack>
          <RecipeImport />
          <RecipeExport />
        </HStack>
      }
    />
  )
}
