import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Library } from '../pages/Library'
import { Recipe } from '../pages/Recipe'
import { Debug } from '../pages/Debug'

export const Routes = () => (
  <Router>
    <Switch>
      <Route path="/recipe/:id" children={<Recipe />} />
      <Route path="/debug/:id" children={<Debug />} />
      <Route path="/debug" children={<Debug />} />
      <Route path="/" children={<Library />} />
    </Switch>
  </Router>
)
