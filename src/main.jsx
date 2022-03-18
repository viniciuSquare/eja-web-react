import React from 'react'
import ReactDOM from 'react-dom'

import { AuthContextProvider } from './Contexts/AuthContext'
import { SessionContextProvider } from './Contexts/SessionContext'

import Router from './Router'

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
