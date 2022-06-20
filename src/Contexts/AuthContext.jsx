import { getAuth, signInWithPopup } from 'firebase/auth';
import {createContext, useState} from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, firebase, provider } from '../services/firebase';

export const AuthContext = createContext({});

export function AuthContextProvider(props) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {});

  useEffect(()=>{
    const localStorageUserData = JSON.stringify(user);
    localStorage.setItem('user', localStorageUserData);
    
  }, [user])
  
  const navigate = useNavigate();

  async function signInWithGoogle() {

    const auth = getAuth();
    signInWithPopup(auth, provider).then(({user: googleUser}) => {
      console.log(googleUser)
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