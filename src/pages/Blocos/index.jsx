import { useSession } from "../../hooks/useSession"

import { BlocoStyled } from "./styled"

import { ActiveInteraction } from "./Interactions";
import FeedbackModal from "../../Components/CongratulationModal";

export function Bloco() {
  const { 
    activeInteraction,
    isLoading,
    isFeedbackShown
  } = useSession()

  return(
    <BlocoStyled>
      { (!isLoading && activeInteraction?.blocoId) &&   
          <ActiveInteraction />
      }
      {
        isFeedbackShown && 
          <FeedbackModal />
      }
    </BlocoStyled>
  )
}
