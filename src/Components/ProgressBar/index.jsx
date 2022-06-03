import { Background, Progress, StyledProgressBar } from "./styled";
import { FaUserAlt } from 'react-icons/fa'
import { useEffect, useState } from "react/cjs/react.development";

export function ProgressBar() {
  const [ progressPercent, setProgressPercent ] = useState(0);

  useEffect(()=>{
    setTimeout(()=>{
      setProgressPercent(35);
    },3000)
  },[])

  return(
    <StyledProgressBar className="user-header">
      <div className="badge">
        <FaUserAlt size='2.2rem' color="white" />
      </div>
      <div className="user-n-progession">
        {/* TODO - DYNAMIC HANDLING USER */}
        <h2 id="user-name" >Seu João</h2>
        <div className="progession">
          <Background id="progress-bar-bg" />
          <Progress id="progress-bar" percent={progressPercent} />
        </div>
      </div>
    </StyledProgressBar>
  )
}