import speak from "../../../../services/speak"

export function Letter({refLetter}) {

  function playSound() {
    speak(refLetter.toLowerCase())
  }
  return(
    <h1 onClick={playSound}>{refLetter}</h1>
  )
}