import { AlfabetoStyled } from "./styled"

import Letter from '../../components/Letter'
import Header from "../../Components/Header";
import HelpButton from "../../Components/HelpButton";

export function Alfabeto() {
  let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
  let numbers = [];
  for (let num = 1; num < 11; num++) {
    numbers.push(num);
  }
  return(
    <AlfabetoStyled>
      <Header tipoInteracao="Alfabeto" /> 
      <div className="lists">
        <div className="list-box lower-case">
          {
            letters.map((letter)=>{
              return <p>{<Letter refLetter={letter} />}</p>
            })
          }
        </div>
        <div className="list-box upper-case">
          {
            letters.map((letter)=>{
              return <p>{<Letter refLetter={letter} />}</p>
            })
          }
        </div>
        <div className="list-box numbers">
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
