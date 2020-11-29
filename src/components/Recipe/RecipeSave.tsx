import * as React from 'react'
import { useParams } from 'react-router-dom'
import { IconButton } from '@chakra-ui/react'
import { DownloadIcon, CheckIcon } from '@chakra-ui/icons'
import { useLibrary } from '../../hooks'

type RecipeProps = { id?: string }

export const RecipeSave = (props: RecipeProps) => {
  const { addToLibrary, removeFromLibrary, isInLibrary } = useLibrary()
  const params = useParams<RecipeProps>()
  const id = (props.id || params.id) as string

  return isInLibrary(id) ? (
    <IconButton
      aria-label="Remove from Library"
      onClick={() => removeFromLibrary(id)}
      icon={<CheckIcon />}
      color="blue.500"
      fontSize={20}
    />
  ) : (
    <IconButton
      aria-label="Add to Library"
      onClick={() => addToLibrary(id)}
      icon={<DownloadIcon />}
      color="blue.500"
      fontSize={20}
    />
  )
}
