import { IoMdExit } from "react-icons/io";
import { useAuth } from "../../hooks/useAuth";
import { ExitButtonStyled } from "./styled";

export default function ExitButton() {

  const {logoutUser} = useAuth();

  return( 
    <ExitButtonStyled onClick={logoutUser}>
      <IoMdExit size="28px" />
    </ExitButtonStyled>
  )
}