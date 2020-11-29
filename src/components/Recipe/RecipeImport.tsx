import * as React from 'react'
import { IconButton, Input, useToast } from '@chakra-ui/react'
import { FaFileImport } from 'react-icons/fa'
import { useWebsites, useLibrary } from '../../hooks'

export const RecipeImport = () => {
  const ref = React.useRef<HTMLInputElement>(null)
  const toast = useToast()
  const { addWebsites } = useWebsites()
  const { addLibraryIds } = useLibrary()

  const readFile = () => {
    if (
      !window.File ||
      !window.FileReader ||
      !window.FileList ||
      !window.Blob
    ) {
      toast({
        title: 'Unable to Read',
        description: 'The File APIs are not fully supported in this browser.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return
    }

    const file = ref?.current?.files?.[0]
    const reader = new FileReader()

    reader.readAsText(file as File)

    reader.onload = function () {
      const { websites, libraryIds } = JSON.parse(reader.result as string) ?? {}
      if (!websites && !libraryIds) {
        toast({
          title: 'Data not found',
          description: 'No websites or library items found in file',
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      } else {
        addWebsites(websites)
        addLibraryIds(libraryIds)
      }
    }

    reader.onerror = function () {
      console.log(reader.error)
      toast({
        title: 'Unable to Read',
        description:
          reader.error?.message ??
          'There was an issue reading the selected file.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  return (
    <>
      <Input
        type="file"
        accept="application/json"
        display="none"
        onChange={readFile}
        ref={ref}
      />
      <IconButton
        aria-label="Import App Data"
        icon={<FaFileImport />}
        onClick={() => ref.current?.click()}
        color="blue.500"
        fontSize={20}
      />
    </>
  )
}
