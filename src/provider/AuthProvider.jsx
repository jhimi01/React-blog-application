import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children})=>{

  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const createuserWithpass = (name, email, password) =>{
    setLoader(false)
    return createUserWithEmailAndPassword(auth,  email, password)
  }

  const login =(email, password)=>{
    setLoader(false)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = ()=>{
    setLoader(false)
    return signOut(auth)
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (loggedinuser)=>{
     setUser(loggedinuser)
    })

    return ()=>{
      unsubscribe()
    }

  },[])

    const authInfo = {
      user,
      loader,
      createuserWithpass,
      login,
      logOut
     }

    return (
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;