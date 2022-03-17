import { FloattingButtonStyled } from './styled'
import helpIcon from '../../assets/icons/HELP_BTN.png'

export function HelpButton() {
  // TODO - Get page meta data 
    // -> INTRODUCTION AUDIO TEXT
    // -> HELP AUDIO TEXT

  function playHelpAudio() {

  }

  return(
    <FloattingButtonStyled>
      <button onClick={playHelpAudio} >
        <img src={helpIcon} alt=""  />
      </button>
    </FloattingButtonStyled>
  )
}