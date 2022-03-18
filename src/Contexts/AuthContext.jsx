import {createContext, useState} from 'react'
import { useEffect } from 'react/cjs/react.development';

export const AuthContext = createContext({});

export function AuthContextProvider(props) {
  let userData = JSON.parse(localStorage.getItem("user")) || {};

  const [user, setUser] = useState(userData);

  useEffect(()=>{
    const localStorageUserData = JSON.stringify(user);
    localStorage.setItem('user', localStorageUserData);

  }, [user])
    
  return(
    <AuthContext.Provider value={{user, setUser}}>
      {props.children}
    </AuthContext.Provider>
  )
}