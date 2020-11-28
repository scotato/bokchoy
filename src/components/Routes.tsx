import * as React from 'react'
import { Box, BoxProps } from '@chakra-ui/react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Library } from '../pages/Library'
import { LibraryHeader } from '../pages/LibraryHeader'
import { Recipe } from '../pages/Recipe'
import { RecipeHeader } from '../pages/RecipeHeader'
import { Debug } from '../pages/Debug'
import { DebugWebsite } from '../pages/DebugWebsite'
import { DebugWebsiteHeader } from '../pages/DebugWebsiteHeader'
import { Header } from './Header'

export const HeaderRoutes = (props: BoxProps) => (
  <Box as={Router} {...props}>
    <Switch>
      <Route exact path="/library" children={<LibraryHeader />} />
      <Route exact path="/library/:id" children={<RecipeHeader />} />
      <Route exact path="/debug" children={<Header title="Debug" />} />
      <Route exact path="/debug/:id" children={<DebugWebsiteHeader />} />
    </Switch>
  </Box>
)

export const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to="/library" />
      </Route>
      <Route exact path="/library" children={<Library />} />
      <Route exact path="/library/:id" children={<Recipe />} />
      <Route exact path="/debug" children={<Debug />} />
      <Route exact path="/debug/:id" children={<DebugWebsite />} />
      <Route path="*">
        <h1>404</h1>
      </Route>
    </Switch>
  </Router>
)
