import * as React from 'react'
import { Input, useToast } from '@chakra-ui/react'
import { useWebsites, useLibrary } from './'

export const useExport = () => {
  const { websites } = useWebsites()
  const { libraryIds } = useLibrary()
  const data = JSON.stringify({ websites, libraryIds })
  const dataEncoded = encodeURIComponent(data)
  const href = `data:application/json;charset=utf-8,${dataEncoded}`
  const download = `bokchoy-export-${dateFormatted()}.json`

  return { href, download }
}

function dateFormatted() {
  const now = new Date()
  const date = now.toLocaleDateString().split('/').join('-')
  const time = now.getTime()
  return `${date}-${time}`
}

export const useImport = () => {
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

  return {
    importRecipes: () => ref.current?.click(),
    ImportInput: () => (
      <Input
        type="file"
        accept="application/json"
        display="none"
        onChange={readFile}
        ref={ref}
      />
    ),
  }
}
