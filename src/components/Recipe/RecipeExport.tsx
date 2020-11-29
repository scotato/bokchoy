import * as React from 'react'
import { IconButton, Link } from '@chakra-ui/react'
import { FaFileExport } from 'react-icons/fa'
import { useWebsites, useLibrary } from '../../hooks'

export const RecipeExport = () => {
  const { websites } = useWebsites()
  const { libraryIds } = useLibrary()
  const data = JSON.stringify({ websites, libraryIds })
  const dataEncoded = encodeURIComponent(data)
  const href = `data:application/json;charset=utf-8,${dataEncoded}`
  const filename = `bokchoy-export-${dateFormatted()}.json`

  return (
    <IconButton
      as={Link}
      aria-label="Export App Data"
      icon={<FaFileExport />}
      color="blue.500"
      fontSize={20}
      href={href}
      download={filename}
    />
  )
}

function dateFormatted() {
  const now = new Date()
  const date = now.toLocaleDateString().split('/').join('-')
  const time = now.getTime()
  return `${date}-${time}`
}
