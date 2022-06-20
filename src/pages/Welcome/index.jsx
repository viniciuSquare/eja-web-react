import { StyledWelcome } from "./styled";

import googleIcon from '../../assets/icons/google-icon.svg'
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export function Welcome() {

  const { setUser, signInWithGoogle } = useAuth();
  // TODO - IMPLEMENT SOCIAL AUTH
  
  const mock_userData= {
    name: "Vinicius",
    logged: true,
  }

  const navigate = useNavigate()

  // function siginWithGoogle() {
  //   // TODO -> SOCIAL LOGIN
  //   setUser(mock_userData)
  //   navigate('/')
  // }

  return(
    <StyledWelcome>
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