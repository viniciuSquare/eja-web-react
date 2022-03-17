import { HeaderStyled } from "./styled";

export function Header({tipoInteracao}) {
  return(
    <HeaderStyled>
      <h1>{tipoInteracao}</h1>
      <a href="/" className="link-btn">home</a>
    </HeaderStyled>
  )

}