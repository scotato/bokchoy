import * as React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import { Home } from '../pages/Home'
import { Recipe } from '../pages/Recipe'
import { Debug } from '../pages/Debug'

export const Routes = () => (
  <Router>
    <Switch>
      <Route path="/debug" children={<Debug />}/>
      <Route path="/recipe" children={<Recipe />} />
      <Route path="/" children={<Home />} />
    </Switch>
  </Router>
)
