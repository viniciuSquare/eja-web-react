import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { StyledApp } from './styled'

import { Welcome } from './pages/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <StyledApp >
      <div className="page-content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome/>} exact />
          </Routes>
        </BrowserRouter>
      </div>
    </StyledApp>
  )
}

export default App
