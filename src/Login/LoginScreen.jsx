import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {  Divider, Grid, Segment} from "semantic-ui-react";
import Login from "../Login/Login";
import UyeOlYonlendirme from "../Login/UyeOlYonlendirme";
import firebase from "firebase";

 const LoginScreen = ()=> {
  
  const segmentdisayn=
  {
     backgroundColor:"#E0E0E0",
  }
  
  const [user, setUser]=useState(" ");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);


  const clearInputs=()=>
  {
    setEmail("");
    setPassword("");
  }

  const clearErrors=()=>
  {
    setPasswordError(" ");
    setEmailError(" ");
  }

  const handleLogin = () => {
    clearErrors();
    firebase
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break; 
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout=()=>
  {
   firebase.auth().signOut();
  };


  const authListener=()=>
  {
    firebase.auth().onAuthStateChanged((user)=>
     {
       if(user)
       {
         clearInputs();
         setUser(user);
       }else
       {
         setUser("")
       }
     })
  }

  useEffect(()=>
  {
    authListener();
  },[])

  return (
    <Segment style={segmentdisayn} >
      <Grid columns={2} relaxed="very">
        <Grid.Column>
           <UyeOlYonlendirme /> 
        </Grid.Column>
        <Grid.Column>
          <Login 
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleLogin={handleLogin}
              handleSignup={handleSignup}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
              emailError={emailError}
              passwordError={passwordError}  /> 
        </Grid.Column>
      </Grid>
      <Divider vertical>Or</Divider>
    </Segment>
  );
}

export default LoginScreen;

// import React,{useState, useEffect} from "react";
// import { auth } from "../firebase";
// import Login from "./Login";
// import Home from "../pages/Home";
// import "./LoginScreen";

// function LoginScreen() {
//   const [user, setUser]=useState(null);

//   useEffect(() => {
//   auth.onAuthStateChanged((authUser) =>  //durum değişirse
//   {
//     if(authUser)//Doluysa siteye giriş yapabil
//     {
//       setUser(authUser) //giriş yapıldı yani login ekranına yönlendirildi.
//     }else //değilse;
//     {
//       setUser(null) //giriş ekranında bekle
//     }
//   }) 
//   }, [])
  
// /* console.log(user); */
//   return (
//     <div className="app">
//       {user ? <Home user={user}/> : <Login />} {/* /*setUser props olarak göndercem*/ }
      
//     </div>
//   );
// }
// export default LoginScreen;
