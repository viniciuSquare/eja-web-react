import { HeaderStyled } from "./styled";

import {BsFillHouseFill} from 'react-icons/bs'

export default function Header({tipoInteracao}) {
  return(
    <HeaderStyled>
      <h1>{tipoInteracao}</h1>
      <a href="/" className="link-btn">
        <BsFillHouseFill size="2rem" color="0f253b"/>
      </a>
    </HeaderStyled>
  )

}