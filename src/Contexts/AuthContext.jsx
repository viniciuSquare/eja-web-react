import {createContext, useState} from 'react'
import { useEffect } from 'react';

export const AuthContext = createContext({});

export function AuthContextProvider(props) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {});

  useEffect(()=>{
    const localStorageUserData = JSON.stringify(user);
    localStorage.setItem('user', localStorageUserData);

  }, [user])
    
  return(
    <AuthContext.Provider value={{user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  )
}