import createPersistedState from 'use-persisted-state'
import { useWebsites } from './'

const useLibraryState = createPersistedState('library')

export const useLibrary = () => {
  const { websites } = useWebsites()
  const [libraryIds, setLibraryIds] = useLibraryState<string[]>([])
  const library = websites.filter((website) => libraryIds.includes(website.id))
  const isInLibrary = (siteId: string) => libraryIds.find((id) => id === siteId)

  console.log(websites, library, libraryIds)

  return {
    library,
    libraryIds,
    isInLibrary,
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
