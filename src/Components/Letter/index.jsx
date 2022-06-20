import styled from "styled-components"
import speak from "../../services/speak"

export default function Letter({refLetter, size}) {

  function playSound() {
    speak(refLetter.toLowerCase())
  }

  refLetter = size == "big" ? refLetter.toUpperCase() : refLetter.toLowerCase() ;
  return(
    <H1Styled onClick={playSound}>{ refLetter }</H1Styled>
  )
}

const H1Styled = styled.h1`
  cursor: pointer;
`