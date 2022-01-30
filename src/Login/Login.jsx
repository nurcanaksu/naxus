import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Button, Container, Icon } from "semantic-ui-react";
import { auth, provider } from "../firebase";
import "./Login.css";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [user, setUser] = useState(null); //null yazarsa giriş yapılmamış "rgf" yazarsa giriş yapıldı yazar.

  useEffect(() => {
    auth.onAuthStateChanged(
      (
        authUser //durum değişirse
      ) => {
        if (authUser) {
          //Doluysa siteye giriş yapabil
          setUser(authUser); //giriş yapıldı yani login ekranına yönlendirildi.
        } //değilse;
        else {
          setUser(null); //giriş ekranında bekle
        }
      }
    );
  }, []);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const login = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message)); //firebase.js den geldi auth ve provider
  };

  function handleSubmit(event) {
    event.preventDefault();
  }

  const containerstyle = {
    width: "300px",
    margin: "15px 50px 10px 700px ",
    backgroundColor: "#FFFFFF",
    height: "350px",
    borderStyle: "solid",
    borderColor: "#800080",
  };

  const girisyapstyle = {
    color: "black",
  };
  const buttonn = {
    backgroundColor: "#800080",
    color:"white"
  };

  return (
    <Container style={containerstyle}>
      {user ? <h6>Giriş yapıldı</h6> : <h6>Lütfen giriş yapınız...</h6>}
      <Form onSubmit={handleSubmit}>
        <Form.Group style={girisyapstyle}>
          <h1>
            <b>-Giriş Yap-</b>
          </h1>
        </Form.Group>
        <br />
        <Form.Group style={girisyapstyle} size="lg" controlId="email">
          <h6>
            <b>E-MAİL</b>
          </h6>
          <Form.Control
            type="text"
            autoFocus
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>{emailError}</p>
        </Form.Group>
        <br />
        <Form.Group style={girisyapstyle} size="lg" controlId="password">
          <h6>
            <b>ŞİFRE</b>
          </h6>

          <Form.Control
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>{passwordError}</p>
        </Form.Group>
        <br />
        <div>
          {/* <Button onClick={handleLogin}>Giriş Yap</Button>
          <p>
             Bir hesabın yok mu?
            <Button as={NavLink} to="/signup">
              Kayıt Ol
            </Button>
          </p> */}
          {hasAccount ? (
            <>
              <Button onClick={handleLogin} style={buttonn}>GİRİŞ YAP</Button>
              <p>
                Bir Hesabın Yok Mu? 
                <span onClick={() => setHasAccount(!hasAccount)}><b>Kayıt Ol</b></span>
              </p>
            </>
          ) : (
            <>
            <Button onClick={handleSignup}  style={buttonn}> KAYIT OL</Button>
              <p>Hesabın var mı?
              <span onClick={() => setHasAccount(!hasAccount)} > <b>Giriş Yap</b></span>
              </p>
            </>
          )}
        </div>
        <br />
        <h5 block type="submit" onClick={login}>
          <Icon name="google" />
          Google İle Giriş Yap
        </h5>
        <br />
      </Form>
      <br />
    </Container>
  );
};
export default Login;

// import React from 'react'
// import { auth, provider } from '../firebase'
// import "./Login.css"

// function Login () { //loginscreenden propsla aldım.
//    const login= ()=>{
//      auth.signInWithPopup(provider).catch((error) => alert(error.message));//firebase.js den geldi auth ve provider
//    };

//   return (
//     <div className='login'>
//       <div className='container'>
//         <button onClick={login}>Google ile giriş yap</button>
//       </div>
//     </div>
//   )
// }

// export default Login;
