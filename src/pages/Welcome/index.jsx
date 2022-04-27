import { StyledWelcome } from "./styled";

import googleIcon from '../../assets/icons/google-icon.svg'
import { useAuth } from "../../hooks/useAuth";

export function Welcome() {

  const { setUser } = useAuth();
  // TODO - IMPLEMENT SOCIAL AUTH
  
  const mock_userData= {
    name: "Vinicius",
    logged: true,
  }

  function siginWithGoogle() {
    // TODO -> SOCIAL LOGIN
    setUser(mock_userData)
  }

  return(
    <StyledWelcome>
      <h1 className="page-title saldacao">Sejam bem-vindos ao ALMA</h1>
      <div className="login">
        <button onClick={ siginWithGoogle } className="login" id="google-login">
          <img src={googleIcon} alt="Logo do Google" />
          Entrar com Google
        </button>
      </div>
    </StyledWelcome>
  )

}