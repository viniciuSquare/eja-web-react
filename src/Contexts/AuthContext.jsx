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
    if( user.logged == undefined && localstorageUserData.logged ) {
      setUser(localstorageUserData);
    }

  }, [])

  useEffect(()=>{
    const localStorageUserData = JSON.stringify(user);
    localStorage.setItem('user', localStorageUserData);

    if( user.logged && location.pathname == "/login" ) {
      navigate('/');
    }
  }, [user])
  


  async function signInWithGoogle() {
    const auth = getAuth();
    signInWithPopup(auth, provider).then(({user: googleUser}) => {
      console.log(googleUser)
      const { displayName, photoUrl } = googleUser;
      
      if( !displayName ) {
        console.log("NO USER DISPLAY NAME");
      } else {
        setUser({
          logged: true,
          name: displayName,
          photoUrl: photoUrl || ''
        })
      }
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