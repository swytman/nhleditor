import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import TeamPage from './containers/TeamPage'
import Games from './containers/Games'
import Game from './containers/Game'
import NotFound from './components/NotFound'

export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={TeamPage} />
      <Route path='teams' component={TeamPage} />
      <Route path='games' component={Games}>
        <Route path=':game_id' component={Game}/>
      </Route>
    </Route>

    <Route path='*' component={NotFound} />
  </div>
)
