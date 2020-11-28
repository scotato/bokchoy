import createPersistedState from 'use-persisted-state'

const useLibraryState = createPersistedState('library')

export const useLibrary = () => {
  const [library, setLibrary] = useLibraryState<WebsiteNode[]>([])
  const isInLibrary = (id: string) => library.find((entry) => entry.id === id)

  return {
    library,
    isInLibrary,
    addToLibrary(website: WebsiteNode) {
      if (!isInLibrary(website.id)) {
        setLibrary([website, ...library])
      }
    },
    removeFromLibrary(website: WebsiteNode) {
      if (isInLibrary(website.id)) {
        setLibrary(library.filter((entry) => entry.id !== website.id))
      }
    },
  }
}
