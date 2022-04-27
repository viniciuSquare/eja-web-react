import { FloattingButtonStyled } from './styled'
import helpIcon from '../../assets/icons/HELP_BTN.png'
import { useSession } from '../../hooks/useSession'
import speak from '../../services/speak'

export default function HelpButton() {
  // TODO - Get page meta data 
    // -> INTRODUCTION AUDIO TEXT
    // -> HELP AUDIO TEXT
  const {helpAudio} = useSession()

  function playHelpAudio() {
    speak(helpAudio)
  }

  return(
    <FloattingButtonStyled>
      <button onClick={playHelpAudio} >
        <img src={helpIcon} alt=""  />
      </button>
    </FloattingButtonStyled>
  )
}