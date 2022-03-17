import React from 'react'
import ReactDOM from 'react-dom'

import Router from './Router'
import { AuthContextProvider } from './Contexts/AuthContext'

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
)
