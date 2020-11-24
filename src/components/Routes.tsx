import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Recipe } from '../pages/Recipe'
import { Website } from '../pages/Website'
import { WebsiteDebug } from '../pages/WebsiteDebug'
import { Debug } from '../pages/Debug'

export const Routes = () => (
  <Router>
    <Switch>
      <Route path="/debug/:id" children={<WebsiteDebug />} />
      <Route path="/debug" children={<Debug />} />
      <Route path="/recipe" children={<Recipe />} />
      <Route path="/:id" children={<Website />} />
      <Route path="/" children={<Home />} />
    </Switch>
  </Router>
)
