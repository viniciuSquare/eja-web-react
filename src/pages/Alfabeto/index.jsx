import { AlfabetoStyled } from "./styled"

import Letter from '../../Components/Letter'
import Header  from "../../Components/Header";
import HelpButton from "../../Components/HelpButton";

export function Alfabeto() {
  const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  let numbers = [];
  for (let num = 1; num < 11; num++) {
    numbers.push(num);
  }
  return(
    <AlfabetoStyled id="alphabet">
      <Header tipoInteracao="Alfabeto" /> 
      <div className="lists">
        <div className="list-box lower-case">
          <h2 className="alphabet-legend">Letras minúsculas</h2>
          {
            alphabet.map((letter, idx)=>{
              return <Letter key={idx} refLetter={letter} size="small" />
            })
          }
        </div>
        <div className="list-box upper-case">
          <h2 className="alphabet-legend">Letras miúsculas</h2>
          {
            alphabet.map((letter, idx)=>{
              return <Letter key={idx} refLetter={letter} />
            })
          }
        </div>
        <div className="list-box numbers">
          <h2 className="alphabet-legend">Números</h2>
        {
            numbers.map((number, idx)=>{
              return <Letter key={idx} refLetter={number} />
            })
          }

        </div>
      </div>
      <HelpButton />
    </AlfabetoStyled>
  )
}
