import { useContext } from "react";
import { SessionContext } from "../Contexts/SessionContext";

export function useSession() {
  const sessionData = useContext(SessionContext);

  return sessionData;
}