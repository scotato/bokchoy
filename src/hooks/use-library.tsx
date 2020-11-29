import createPersistedState from 'use-persisted-state'
import { useToast } from '@chakra-ui/react'
import { useWebsites } from './'

const useLibraryState = createPersistedState('library')

export const useLibrary = () => {
  const toast = useToast()
  const { websites } = useWebsites()
  const [libraryIds, setLibraryIds] = useLibraryState<string[]>([])
  const library = websites.filter((website) => libraryIds.includes(website.id))
  const isInLibrary = (siteId: string) => libraryIds.find((id) => id === siteId)

  return {
    library,
    libraryIds,
    isInLibrary,
    addLibraryIds(websiteIds: string[]) {
      const newIds = websiteIds.filter((id) => !isInLibrary(id))
      if (newIds.length) {
        setLibraryIds([...newIds, ...libraryIds])

        toast({
          title: 'Library Updated',
          description: `Added ${newIds.length} favorites`,
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
      } else {
        toast({
          title: 'Add Library Entries',
          description: `No new library entries found`,
          status: 'warning',
          duration: 3000,
          isClosable: true,
        })
      }
    },
    addToLibrary(websiteId: string) {
      if (!isInLibrary(websiteId)) {
        setLibraryIds([websiteId, ...libraryIds])
      }
    },
    removeFromLibrary(websiteId: string) {
      if (isInLibrary(websiteId)) {
        setLibraryIds(libraryIds.filter((id) => id !== websiteId))
      }
    },
  }
}
