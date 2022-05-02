import { StyledDashboard } from "./styled";

import { FaUserAlt } from 'react-icons/fa'
import { Link } from "react-router-dom";

import HelpButton from "../../Components/HelpButton";

import booksIcon from '../../assets/icons/Books_Aulas_Icon.png'
import abcIcon from '../../assets/icons/ABC_Alfabeto_Icon.png'
import { useEffect } from "react/cjs/react.development";
import { useSession } from "../../hooks/useSession";

export function Dashboard() {

  return(
    <StyledDashboard id="dashboard">
      <div className="user-header">
        <div className="badge">
          <FaUserAlt size='2.2rem' color="white" />
        </div>
        <div className="user-n-progession">
          {/* TODO - DYNAMIC HANDLING USER */}
          <h2 id="user-name" >Seu João</h2>
          <div className="progession">
            <span></span>
          </div>
        </div>
      </div>
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