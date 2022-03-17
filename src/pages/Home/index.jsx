import { useAuth } from "../../hooks/useAuth"

import { Dashboard } from "../../pages/Dashboard"
import { Welcome } from "../../pages/Welcome"

export function Home() {
  const { user } = useAuth();

  return(
    <>
      {
        user.logged ?
          <Dashboard />
        : <Welcome />
      }
    </>
  )

}