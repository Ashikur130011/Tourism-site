import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setuser] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const provider = new GoogleAuthProvider();

        return signInWithPopup(auth, provider)
           
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                setuser(user)
            }
            else{
                setuser({})
            }
            setIsLoading(false);
        });
        return unsubscribe;
    },[])

    const logOut = () =>{
        setIsLoading(true)
        signOut(auth)
        .then( () => { 
            setuser({});
        })
        .finally(()=> setIsLoading(false))
    }

    return{
            user,
            signInUsingGoogle,
            logOut,
            setuser,
            isLoading,
            setIsLoading
    }
};

export default useFirebase;