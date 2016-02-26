require("babel-polyfill");
// /index.js

// environment
process.env.NODE_ENV = 'development' // 'production'

// requirements
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

// containers
import App from './containers/App'

// store
import configureStore from './store/configureStore'

const store = configureStore({})
const rootElement = document.getElementById('root')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
