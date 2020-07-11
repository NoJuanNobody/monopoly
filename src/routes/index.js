import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'

export default function createRoutes(store) {
  return (
    <div>
      <Switch>
        <Route exact path={Home.path} component={() => <Home.component />} />
        {/* Build Route components from routeSettings */
        [
          /* Add More Routes Here */
        ].map((settings, index) => (
          <Route key={`Route-${settings.path}`} {...settings} />
        ))}
      </Switch>
    </div>
  )
}
