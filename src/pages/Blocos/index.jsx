import { useSession } from "../../hooks/useSession"
import { Header } from "./components/Header"
import { BlocoStyled } from "./styled"

export function Bloco() {
  // TODO -> GET CURRENT BLOCO & INTERACTIONS STATE 

  const { currentBloco } = useSession()
  console.log("BLOCOS :", currentBloco);

  return(
    <BlocoStyled>
      <Header tipoInteracao="Aula"/>
      <h1>Bloco</h1>

    </BlocoStyled>
  )
}