import React, { Component, useEffect } from 'react'
import styled from 'styled-components'
import ReactJson from 'react-json-view'

const RecipeScraperSearch = styled.div`
  display: flex;
  margin-bottom: 32px;
`

const RecipeScraperInput = styled.input`
  flex-grow: 1;
  padding: 16px 32px;
  border-radius: 64px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-right: 16px;
`

const RecipeScraperButton = styled.button`
  padding: 16px 32px;
  background-color: dodgerblue;
  color: white;
  border-radius: 64px;
  border: 0;
  font-weight: 700;
  transition: background-color 0.2s ease-out;

  &:disabled {
    background-color: rgba(0, 0, 0, 0.5);
  }
`

class RecipeScraper extends Component {
  stateInit = {
    isLoading: false,
    isFailed: false,
    metadata: null,
    jsonld: null,
    message: null,
    url: 'https://www.allrecipes.com/recipe/8941/slow-cooker-chicken-and-dumplings'
  }

  state = this.stateInit

  reset = message => {
    this.setState({
      ...this.stateInit,
      url: this.state.url,
      message
    })
  }

  handleSubmit = (e) => {
    e && e.preventDefault()
    const { url } = this.state
    const isDev = window.location.hostname === 'localhost'
    const lambdaRecipeScraper = isDev
      ? 'http://localhost:9000/recipe-scraper'
      : '/.netlify/functions/recipe-scraper'

    this.setState({ isLoading: true });
    fetch(lambdaRecipeScraper, {
      method: "POST",
      body: JSON.stringify({ url }),
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          isLoading: false,
          isFailed: json.status !== 200,
          metadata: json.metadata,
          jsonld: json.jsonld
        })
      })
      .catch(err => {
        console.error(err)
        this.reset("unable to fetch page")
      });
  }

  componentDidMount = () => {
    this.handleSubmit()
  }

  render = () => (
    <form onSubmit={this.handleSubmit}>
      <RecipeScraperSearch>
        <RecipeScraperInput
          placeholder="url"
          value={this.state.url}
          onChange={e => this.setState({ url: e.target.value })}
          required
        />

        <RecipeScraperButton type='submit' disabled={this.state.isLoading}>
          get data
        </RecipeScraperButton>
      </RecipeScraperSearch>
      
      { (this.state.metadata || this.state.jsonld) && (
          <div>
            <ReactJson src={this.state.metadata} />
            <ReactJson src={this.state.jsonld} />
          </div>
      )}
      {this.state.message && <p>{this.state.message}</p>}
    </form>
  )
}

export default RecipeScraper
