import React from "react"
import Layout from "./Layout"
import RecipeScraper from "./RecipeScraper"

const IndexPage = () => (
  <Layout>
    <h1>bokchoy</h1>
    <p>scrape metadata and <a href="https://json-ld.org/">json-ld</a> from <a href="https://schema.org/Recipe">online recipes</a></p>
    <RecipeScraper />
  </Layout>
)

export default IndexPage
