import { initializeApp } from 'firebase/app'

import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  //data given by Firebase project  
  apiKey: process.env.REACT_APP_APP_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};
console.log(firebaseConfig)
initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider();

export { provider }