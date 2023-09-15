import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../Firebase/firebase.init';

const auth = getAuth(app);


const Main = () => {

    const [user, setUser] = useState({});
    console.log(user);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () =>{
        // console.log('clicked the function');
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const user = result.user;
            setUser(user)
            console.log(user);
        })
        .catch(error => console.log("Firebase Error :", error))
    }
    return (
        <div>
            <h1>Hello Firebase Are You Ready?</h1>
            <button onClick={handleGoogleLogin}>Login with Google</button>
        </div>
    );
};

export default Main;