import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

export function useAuth() {
  const userData = useContext(AuthContext);

  return userData;
}