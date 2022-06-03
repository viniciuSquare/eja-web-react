import { StyledDashboard } from "./styled";

import { Link } from "react-router-dom";

import HelpButton from "../../Components/HelpButton";

import booksIcon from '../../assets/icons/Books_Aulas_Icon.png'
import abcIcon from '../../assets/icons/ABC_Alfabeto_Icon.png'

import { useSession } from "../../hooks/useSession";
import { ProgressBar } from "../../Components/ProgressBar";

export function Dashboard(props) {

  const { setHelpAudio } = useSession();

  // useEffect(()=>{
  //   setHelpAudio()
  // },[])

  return(
    <StyledDashboard id="dashboard">
      <ProgressBar />
      <div className="routing-menu">
        <Link to="alfabeto">
          <img src={abcIcon} alt="menu icon" />
          <h3>Alfabeto</h3>
        </Link>
        <Link to="bloco">
          <img src={booksIcon} alt="menu icon" />
          <h3>Aulas</h3>
        </Link>
      </div>
      <footer>
        <HelpButton/>
      </footer>

      
    </StyledDashboard>
  )

}