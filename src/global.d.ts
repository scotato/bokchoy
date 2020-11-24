import { Recipe, Person, Article, WebPage, ImageObject, WebSite, Organization, HowToSection, HowToStep, NutritionInformation } from 'schema-dts'

declare global {
  type SchemaGraph = {
    organization: Organization
    website: WebSite
    webpage: WebPage
    article: Article
    recipe: Recipe
    howToSection: HowToSection
    howToStep: HowToStep
    nutritionInformation: NutritionInformation
    // author: Author
    person: Person
    imageObject: ImageObject
  }

  type WebsiteState = {
    data?: WebsiteNode
    loading: boolean
    error?: string
  }

  declare type UrlHash = {
    id: string
    url: string
  }

  declare type WebsiteNode = {
    id: string
    url: string
    createdAt: Date
    updatedAt?: Date
    graph?: SchemaGraph
    metadata?: object
  }
  declare interface WebsiteNodeInput {
    url: string
    graph?: SchemaGraph
    metadata?: object
  }
}