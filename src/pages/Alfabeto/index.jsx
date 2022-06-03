import { AlfabetoStyled } from "./styled"

import Letter from '../../components/Letter'
import Header  from "../../Components/Header";
import HelpButton from "../../Components/HelpButton";

export function Alfabeto() {
  let alphabet = [];

  for (let char = 'a'; char <= 'z'; char++) {
    alphabet[char - 'a'] = char;
  }

  let numbers = [];
  for (let num = 1; num < 11; num++) {
    numbers.push(num);
  }
  return(
    <AlfabetoStyled>
      <Header tipoInteracao="Alfabeto" /> 
      <div className="lists">
        <div className="list-box lower-case">
          <h2 className="alphabet-legend">Letras minúsculas</h2>
          {
            alphabet.map((letter)=>{
              return <p>{<Letter refLetter={letter} />}</p>
            })
          }
        </div>
        <div className="list-box upper-case">
          <h2 className="alphabet-legend">Letras miúsculas</h2>
          {
            alphabet.map((letter)=>{
              return <p>{<Letter refLetter={letter} />}</p>
            })
          }
        </div>
        <div className="list-box numbers">
          <h2 className="alphabet-legend">Números</h2>
        {
            numbers.map((number)=>{
              return <p>{<Letter refLetter={number} />}</p>
            })
          }

        </div>
      </div>
      <HelpButton />
    </AlfabetoStyled>
  )
}
