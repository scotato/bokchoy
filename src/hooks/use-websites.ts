import createPersistedState from 'use-persisted-state'
import hash from 'hash.js'

function hashUrl<UrlHash>(url: string) {
  return hash.sha1().update(url).digest('hex')
}

const useWebsitesState = createPersistedState('websites')

export const useWebsites = () => {
  const [websites, setWebsites] = useWebsitesState<WebsiteNode[]>([])

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
    removeWebsite,
    updateWebsite,
    hashUrl,
  }
}
