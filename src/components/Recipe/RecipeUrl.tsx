import * as React from 'react'
import { useParams } from 'react-router-dom'
import { IconButton } from '@chakra-ui/react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { useWebsites } from '../../hooks'

type RecipeProps = { id?: string }

export const RecipeUrl = (props: RecipeProps) => {
  const params = useParams<RecipeProps>()
  const id = (props.id || params.id) as string
  const { websiteById } = useWebsites()
  const { url } = websiteById(id) ?? {}

  return url ? (
    <IconButton
      aria-label="Recipe URL"
      onClick={() => window.open(url, '_blank')}
      icon={<FaExternalLinkAlt />}
      color="blue.500"
      fontSize={20}
    />
  ) : null
}
