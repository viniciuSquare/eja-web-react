import { BrowserRouter, Route, Routes } from "react-router-dom";

import { StyledApp } from "./styled";

import { SessionContextProvider } from "./Contexts/SessionContext";

import { Welcome } from "./pages/Welcome";
import { Dashboard } from "./pages/Dashboard";
import { Bloco } from "./pages/Blocos";
import { Alfabeto } from "./pages/Alfabeto";

function isAuthenticated(bool) {
  return bool;
}

function Router() {
  return (
    <StyledApp>
      <img
        id="background"
        src="./src/assets/images/alma-logo.png"
        alt="Logo Alma"
      />
      <div className="page-content">
        {/* TODO - (SESSION) =>  setHelpAudio  */}
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<Welcome />} exact />
          </Routes>
          <SessionContextProvider>
            <Routes>
              <Route path="/" element={<Dashboard />} exact />
              <Route path="/alfabeto" element={<Alfabeto />} exact />
              <Route path="/bloco" element={<Bloco />} />
            </Routes>
          </SessionContextProvider>
        </BrowserRouter>
      </div>
    </StyledApp>
  );
}

export default Router;
