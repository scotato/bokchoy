import createPersistedState from 'use-persisted-state'
import hash from 'hash.js'
import { useToast } from '@chakra-ui/react'

function hashUrl<UrlHash>(url: string) {
  return hash.sha1().update(url).digest('hex')
}

const useWebsitesState = createPersistedState('websites')

export const useWebsites = () => {
  const [websites, setWebsites] = useWebsitesState<WebsiteNode[]>([])
  const toast = useToast()

  const websiteById = (id?: string) => websites.find(website => website.id === id)
  const websiteByUrl = (url?: string) => websites.find(website => website.url === url)

  const addWebsite = (websiteInput: WebsiteNodeInput) => {
    const website = websiteByUrl(websiteInput.url)

    if (website) return website

    const newWebsite: WebsiteNode = {
      id: hashUrl(websiteInput.url),
      createdAt: new Date(),
      ...websiteInput
    }

    setWebsites([...websites, newWebsite])

    return newWebsite
  }

  // used for bulk import
  const addWebsites = (websitesInput: WebsiteNode[]) => {
    const websiteIds = websites.map(website => website.id)
    const websitesNew = websitesInput.filter(website => !websiteIds.includes(website.id))
    if (websitesNew.length) {
      setWebsites([...websitesNew, ...websites])
      toast({
        title: 'Website Cache Updated',
        description: `Added ${websitesNew.length} websites`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    } else {
      toast({
        title: 'Add Websites to Cache',
        description: `No new websites found`,
        status: 'warning',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  const updateWebsite = (websiteInput: WebsiteNodeInput) => {
    const website = websiteByUrl(websiteInput.url)

    if (!website) return website

    const websiteUpdated = {
      ...website,
      ...websiteInput,
      updatedAt: new Date()
    }

    const updatedWebsites = websites.map(site =>
      site.url === website.url ? websiteUpdated : site)

    setWebsites(updatedWebsites)

    return websiteUpdated
  }

  const removeWebsite = (id: string) => setWebsites(websites.filter(website => website.id !== id))

  return {
    websites,
    websiteById,
    websiteByUrl,
    addWebsite,
    addWebsites,
    removeWebsite,
    updateWebsite,
    hashUrl,
  }
}
