import * as React from 'react'
import { HStack } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { BackButton } from '../components/BackButton'
import { RecipeSave } from '../components/Recipe'
import { DeleteWebsite } from '../components/DeleteWebsite'

export const DebugWebsiteHeader = () => {
  return (
    <Header
      title="Debug Recipe"
      primary={<BackButton to="/settings/debug" />}
      secondary={
        <HStack>
          <RecipeSave />
          <DeleteWebsite />
        </HStack>
      }
    />
  )
}
