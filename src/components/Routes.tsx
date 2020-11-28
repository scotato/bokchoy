import * as React from 'react'
import { Box, BoxProps } from '@chakra-ui/react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Library, LibraryHeader } from '../pages/Library'
import { Recipe, RecipeHeader } from '../pages/Recipe'
import { Settings, SettingsHeader } from '../pages/Settings'
import { Debug, DebugHeader } from '../pages/Debug'
import { DebugWebsite, DebugWebsiteHeader } from '../pages/DebugWebsite'
export { BrowserRouter as Router } from 'react-router-dom'

export const HeaderRoutes = (props: BoxProps) => (
  <Box as={Switch} {...props}>
    <Route exact path="/library" children={<LibraryHeader />} />
    <Route exact path="/library/:id" children={<RecipeHeader />} />
    <Route exact path="/settings" children={<SettingsHeader />} />
    <Route exact path="/settings/debug" children={<DebugHeader />} />
    <Route exact path="/settings/debug/:id" children={<DebugWebsiteHeader />} />
  </Box>
)

export const PageRoutes = () => (
  <Switch>
    <Route exact path="/" children={<Redirect to="/library" />} />
    <Route exact path="/library" children={<Library />} />
    <Route exact path="/library/:id" children={<Recipe />} />
    <Route exact path="/settings" children={<Settings />} />
    <Route exact path="/settings/debug" children={<Debug />} />
    <Route exact path="/settings/debug/:id" children={<DebugWebsite />} />
    <Route path="*" children={<h1>404</h1>} />
  </Switch>
)
