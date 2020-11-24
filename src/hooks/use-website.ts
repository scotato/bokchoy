import * as React from "react"
import { useWebsites } from './use-websites'

const IS_DEV = window.location.hostname === "localhost";
const DEV_SCRAPER = "http://localhost:9000/recipe-scraper"
const PROD_SCRAPER = "/.netlify/functions/recipe-scraper"
const SCRAPER = IS_DEV ? DEV_SCRAPER : PROD_SCRAPER

const initialState: WebsiteState = {
  data: undefined,
  loading: true,
  error: undefined,
}

/**
 * Reack hook to fetch and cache website from a url
 *
 * @param url url of the website to fetch
 */
export function useWebsite<WebsiteNode>(url: string) {
  const [state, setState] = React.useState<WebsiteState>(initialState)
  const { websiteByUrl, addWebsite } = useWebsites()

  React.useEffect(() => {
    const website = websiteByUrl(url)

    if (website) {
      setState({
        loading: false,
        error: undefined,
        data: website
      })
    } else {
      fetch(SCRAPER, {
        method: "POST",
        body: JSON.stringify({ url }),
      })
        .then((response) => response.json())
        .then(({ graph, metadata, status }) => {
          const websiteInput = {
            url,
            graph,
            metadata
          }

          const websiteAdded = addWebsite(websiteInput)

          setState({
            loading: false,
            error: status !== 200 ? status : null,
            data: websiteAdded
          })
        })
        .catch((err) => {
          console.error(err);
          setState({
            loading: false,
            error: err,
            data: undefined
          })
        });
    }
    // eslint-disable-next-line
  }, [url])

  return state
}
