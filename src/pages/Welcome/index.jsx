import { StyledWelcome } from "./styled";

import googleIcon from '../../assets/icons/google-icon.svg'

import { useAuth } from "../../hooks/useAuth";

export function Welcome() {

  const { signInWithGoogle } = useAuth();

  return(
    <StyledWelcome id="welcome">
      <h1 className="page-title saldacao">Sejam bem-vindos ao ALMA</h1>
      <img
        id="login-background"
        src={require("../../assets/images/alma-logo.png")}
        alt="Logo Alma"
      />
      <div className="login-button">
        <button onClick={ signInWithGoogle } className="login" id="google-login">
          <img src={googleIcon} alt="Logo do Google" />
          Entrar com Google
        </button>
      </div>
    </StyledWelcome>
  )

}