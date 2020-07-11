import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'



function App({ routes, store }) {
  return (
      <Provider dispatch={store.dispatch} store={store}>
            <Router>{routes}</Router>
      </Provider>
  )
}

App.propTypes = {
  routes: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
}

export default App
