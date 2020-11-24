import createPersistedState from 'use-persisted-state'
import hash from 'hash.js'

function hashUrl<UrlHash>(url: string) {
  return hash.sha512().update(url).digest('hex')
}

const useWebsitesState = createPersistedState('websites')

export const useWebsites = () => {
  const [websites, setWebsites] = useWebsitesState<WebsiteNode[]>([])

  const websiteById = (id: string) => websites.find(website => website.id === id)
  const websiteByUrl = (url: string) => websites.find(website => website.url === url)
  const storeWebsite = (website: WebsiteNode) => {
    const websiteOriginal = websiteById(website.id)
    const websiteRecord = websiteOriginal ? {
      ...website,
      updatedAt: new Date()
    } : {
      ...website
    }

    setWebsites([...websites, websiteRecord])
  }

  return {
    websites,
    websiteById,
    websiteByUrl,
    hashUrl,
    storeWebsite
  }
}
