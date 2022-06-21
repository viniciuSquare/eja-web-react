import { useEffect, useState } from "react";

import { Background, Progress, StyledProgressBar } from "./styled";

import { FaUserAlt } from 'react-icons/fa';


import api from '../../services/api';
import { useSession } from '../../hooks/useSession';
import { useAuth } from "../../hooks/useAuth";


function getCurrentProgressPecentage(currentStateBlocoId, blocosHead) {
  let currentProgressIndex = blocosHead.findIndex( blocoHead => blocoHead.id == currentStateBlocoId ) + 1;
  let totalBlocosLength = blocosHead.length;

  const currentPercentage = (currentProgressIndex/totalBlocosLength)*100

  return currentPercentage;
}

export function ProgressBar() {
  const [ progressPercent, setProgressPercent ] = useState(0);

  const { currentState } = useSession()
  const { user } = useAuth()

  useEffect(()=>{
    if(!isNaN(currentState.id)) {
      api.get().then(({data: result}) => {
        const {blocosHead} = result;
        setProgressPercent(getCurrentProgressPecentage(currentState.id, blocosHead))
        console.log(currentState.id, blocosHead)
      })
    }
  },[currentState])

  return(
    <StyledProgressBar className="user-header">
      <div className="badge">
        <FaUserAlt size='2.2rem' color="white" />
      </div>
      <div className="user-n-progession">
        {/* TODO - DYNAMIC HANDLING USER */}
        <h2 id="user-name" >{user.name}</h2>
        <div className="progession">
          <Background id="progress-bar-bg" />
          <Progress id="progress-bar" percent={progressPercent} />
        </div>
      </div>
    </StyledProgressBar>
  )
}