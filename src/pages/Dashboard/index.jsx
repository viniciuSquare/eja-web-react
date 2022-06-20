import { StyledDashboard } from "./styled";

import { Link } from "react-router-dom";

import HelpButton from "../../Components/HelpButton";
import ExitButton from "../../Components/ExitButton";

import booksIcon from '../../assets/icons/Books_Aulas_Icon.png'
import abcIcon from '../../assets/icons/ABC_Alfabeto_Icon.png'

import { ProgressBar } from "../../Components/ProgressBar";

export function Dashboard() {

  return(
    <StyledDashboard id="dashboard">
      <ProgressBar />
      <ExitButton/>
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