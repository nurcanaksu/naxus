import React,{useState, useEffect} from "react";
import { auth } from "../firebase";
import Home from "../pages/Home";
import LoginScreen from './LoginScreen';
import firebase from "firebase";

function LoginAndSİgnUpPage() {

    const [user, setUser]=useState(null);

    useEffect(() => {
    auth.onAuthStateChanged((authUser) =>  //durum değişirse
    {
      if(authUser)//Doluysa siteye giriş yapabil
      {
        setUser(authUser) //giriş yapıldı yani login ekranına yönlendirildi.
      }else //değilse;
      {
        setUser(null) //giriş ekranında bekle
      }
    }) 
    }, [])


  const handleLogout=()=>
  {
   firebase.auth().signOut();
  }

  /* console.log(user); */
    return (
      <div className="app">
        {
          user ? ( <Home handleLogout ={handleLogout}/> ) : ( <LoginScreen/>)
        }
       
      </div>
    );
}

export default LoginAndSİgnUpPage;