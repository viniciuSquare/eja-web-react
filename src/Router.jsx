import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { StyledApp } from './styled'

import { Bloco } from './pages/Blocos'

import { useAuth } from './hooks/useAuth'
import { Dashboard } from './pages/Dashboard'
import { Welcome } from './pages/Welcome'
import { SessionContextProvider } from './Contexts/SessionContext'

function isAuthenticated(bool) {
  return bool;
}

function Router() {
  const { user } = useAuth();

  return (
    <StyledApp>
      <img id="background" src="./src/assets/images/alma-logo.png" alt="Logo Alma"/>
      <div className="page-content">
        { !user.logged ?
          <Welcome />
          : 
          (
            <SessionContextProvider>
            {/* TODO - (SESSION) =>  setHelpAudio  */}  
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Dashboard/>} exact />
                  <Route path='/bloco' element={<Bloco/>} />
                </Routes>
              </BrowserRouter>
            </SessionContextProvider>
          )
        }
      </div>
    </StyledApp>
  )
}

export default Router
