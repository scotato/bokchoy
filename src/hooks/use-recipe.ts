import * as React from "react"

const IS_DEV = window.location.hostname === "localhost";
const DEV_SCRAPER = "http://localhost:9000/recipe-scraper"
const PROD_SCRAPER = "/.netlify/functions/recipe-scraper"
const SCRAPER = IS_DEV ? DEV_SCRAPER : PROD_SCRAPER

type RecipeResponse = {
  metadata: object
  jsonld: object
}

type RecipeState = {
  data?: RecipeResponse
  loading: boolean
  error?: string
}

const initialState: RecipeState = {
  data: undefined,
  loading: true,
  error: undefined,
}

/**
 * Reack hook to fetch a recipe from a url
 *
 * @param url url of the recipe to fetch
 */
export function useRecipe(
  url: string,
) {
  const [state, setState] = React.useState<RecipeState>(initialState)

  React.useEffect(() => {
    fetch(SCRAPER, {
      method: "POST",
      body: JSON.stringify({ url }),
    })
      .then((response) => response.json())
      .then((json) => {
        setState({
          loading: false,
          error: json.status !== 200 ? json.status : null,
          data: {
            metadata: json.metadata,
            jsonld: json.jsonld
          }
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
  }, [url])

  return state
}
