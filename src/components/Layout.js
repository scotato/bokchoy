import React from "react"
import styled from 'styled-components'
import GlobalStyle from './GlobalStyle'

const Layout = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 64px;
  flex-direction: column;
  max-width: 1024px;
  min-height: 100vh;
`

const Main = styled.main`
  flex-grow: 1;
`

const Footer = styled.footer`
  display: flex;
  margin-top: 64px;
  justify-content: space-between;
`

export default props => (
  <Layout>
      <GlobalStyle />
      <Main>{props.children}</Main>
      <Footer>
        <a href="https://www.github.com/scotato/bokchoy">github</a>
      </Footer>
  </Layout>
)
