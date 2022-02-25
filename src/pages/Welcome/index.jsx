import { StyledWelcome } from "./styled";

import googleIcon from '../../assets/icons/google-icon.svg'

export function Welcome() {
  return(
    <StyledWelcome>
      <h1 className="page-title saldacao">Sejam bem-vindos ao ALMA</h1>
      <div className="login">
        <button className="login" id="google-login">
          <img src={googleIcon} alt="Logo do Google" />
          Entrar com Google
        </button>
      </div>
    </StyledWelcome>
  )

}