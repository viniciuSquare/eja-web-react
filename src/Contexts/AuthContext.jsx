import { getAuth, signInWithPopup } from 'firebase/auth';
import {createContext, useState} from 'react'
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { provider } from '../services/firebase';

export const AuthContext = createContext({});

export function AuthContextProvider(props) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {});
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  useEffect(() => {
    const localstorageUserData = JSON.parse(localStorage.getItem('user'))
    console.log(user);
    if( user && localstorageUserData == null ) {
      setUser(localstorageUserData);
    }

  }, [])

  useEffect(()=>{
    const localStorageUserData = JSON.stringify(user);
    localStorage.setItem('user', localStorageUserData);

    if( user && location.pathname == "/login" ) {
      navigate('/');
    }
  }, [user])
  
  async function signInWithGoogle() {
    setUser({
      logged: true,
      name: "Seu João"
    })
  }

  function logoutUser() {
    localStorage.removeItem('user',"");

    navigate('/login');
  }
    
  return(
    <AuthContext.Provider value={{ user, setUser, signInWithGoogle, logoutUser }}>
      {props.children}
    </AuthContext.Provider>
  )
}