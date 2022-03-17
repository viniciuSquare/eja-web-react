import {createContext, useState} from 'react'

export const AuthContext = createContext({});

export function AuthContextProvider(props) {
  let userData = (localStorage.getItem("user")) || "";

  const [user, setUser] = useState({
    logged: false,
    userData
  });
  
  return(
    <AuthContext.Provider value={{user, setUser}}>
      {props.children}
    </AuthContext.Provider>
  )
}