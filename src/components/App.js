import React from "react"
import Layout from "./Layout"
import RecipeScraper from "./RecipeScraper"

const IndexPage = () => (
  <Layout>
    <h1>bokchoy</h1>
    <p>scrape meta and <a href="https://json-ld.org/">json-ld</a> data from <a href="https://schema.org/Recipe">online recipes</a></p>
    <RecipeScraper />
  </Layout>
)

export default IndexPage
