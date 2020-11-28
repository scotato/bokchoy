import * as React from 'react'
import { HStack } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { SaveRecipe } from '../components/SaveRecipe'
import { DeleteWebsite } from '../components/DeleteWebsite'

export const DebugWebsiteHeader = () => {
  return (
    <Header
      title="Debug Recipe"
      secondary={
        <HStack>
          <SaveRecipe />
          <DeleteWebsite />
        </HStack>
      }
    />
  )
}
