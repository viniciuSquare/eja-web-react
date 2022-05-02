import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { useAuth } from './hooks/useAuth'

import { StyledApp } from './styled'

import { SessionContextProvider } from './Contexts/SessionContext'

import { Bloco } from './pages/Blocos'
import { Dashboard } from './pages/Dashboard'
import { Welcome } from './pages/Welcome'

function isAuthenticated(bool) {
  return bool;
}

function Router() {
  const { user } = useAuth();

  return (
    <StyledApp>
      <img id="background" src="./src/assets/images/alma-logo.png" alt="Logo Alma"/>
      <div className="page-content">
        { user != null && !user?.logged ?
          <Welcome />
          : 
          (
            <>
            {/* TODO - (SESSION) =>  setHelpAudio  */}  
            <BrowserRouter>
              <SessionContextProvider>
                <Routes>
                  <Route path="/" element={<Dashboard/>} exact />
                  <Route path='/bloco' element={<Bloco/>}/>
                </Routes>
              </SessionContextProvider>
            </BrowserRouter>
            </>
          )
        }
      </div>
    </StyledApp>
  )
}

export default Router
