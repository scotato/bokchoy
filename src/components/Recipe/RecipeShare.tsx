import * as React from 'react'
import { useParams } from 'react-router-dom'
import { IconButton } from '@chakra-ui/react'
import { FaShare } from 'react-icons/fa'
import { useWebsites } from '../../hooks'

type RecipeProps = { id?: string }

export const RecipeShare = (props: RecipeProps) => {
  const params = useParams<RecipeProps>()
  const id = (props.id || params.id) as string
  const { websiteById } = useWebsites()
  const website = websiteById(id)

  const shareData = {
    title: website?.graph?.recipe?.name as string,
    text: website?.graph?.recipe?.description as string,
    url: website?.url,
  }

  const share = () => navigator.share(shareData).catch(console.log)

  return website?.url && navigator.share ? (
    <IconButton
      aria-label="Recipe URL"
      onClick={share}
      icon={<FaShare />}
      color="blue.500"
      fontSize={20}
    />
  ) : null
}
