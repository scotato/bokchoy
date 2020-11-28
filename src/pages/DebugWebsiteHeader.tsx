import * as React from 'react'
import { HStack } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { BackButton } from '../components/BackButton'
import { SaveRecipe } from '../components/SaveRecipe'
import { DeleteWebsite } from '../components/DeleteWebsite'

export const DebugWebsiteHeader = () => {
  return (
    <Header
      title="Debug Recipe"
      primary={<BackButton to="/debug" />}
      secondary={
        <HStack>
          <SaveRecipe />
          <DeleteWebsite />
        </HStack>
      }
    />
  )
}
