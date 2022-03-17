import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { StyledApp } from './styled'

import { Home } from './pages/Home'
import { Bloco } from './pages/Blocos'
import { AuthContextProvider } from './Contexts/AuthContext'
import { SessionContextProvider } from './Contexts/SessionContext'

function Router() {
  const [count, setCount] = useState(0)

  return (
    <AuthContextProvider>
      <SessionContextProvider>
      {/* TODO - (SESSION) =>  setHelpAudio  */}
        <StyledApp >
          <img id="background" src="./src/assets/images/alma-logo.png" alt="Logo Alma"/>
          <div className="page-content">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home/>} exact />
                <Route path='/bloco' element={<Bloco/>} />
              </Routes>
            </BrowserRouter>
          </div>
        </StyledApp>
      </SessionContextProvider>
    </AuthContextProvider>
  )
}

export default Router
