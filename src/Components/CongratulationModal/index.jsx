import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import { useEffect } from 'react';
import { useSession } from '../../hooks/useSession'
import { FeedbackModalStyled } from './styled'


export default function FeedbackModal({ feedbackText = "Concluído com sucesso" }) {

  const { setIsFeedbackShown } = useSession();

  useEffect(()=>{
    // CLOSE AND GO FORWARD AFTER X SECS  
    setTimeout(()=> {
      setIsFeedbackShown(false);
    }, 6000)
  },[])
  
  const handleToggleVisibility = (event) => {
    if(event.target == event.currentTarget) 
      setIsFeedbackShown(false)
    else return
  }

  return( 
    <FeedbackModalStyled onClick={handleToggleVisibility}>
      <div className="modal-content">
        <IoMdCheckmarkCircleOutline size='25rem' color='#19d316'/>
        <h1>{feedbackText}</h1>
      </div>
    </FeedbackModalStyled>

  )
}