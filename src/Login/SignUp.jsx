import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import { Button, Container } from "semantic-ui-react";
import "./Login.css";
import firebase from "firebase";
import { auth } from "../firebase";

const SignUp = () => {
   
  const[user,setUser]=useState("");
  const[firstName,setFirstName]=useState(" ");
  const[lastName,setLastName]=useState(" ");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
 


  const clearInputs=()=>
  {
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  }

  const clearErrors=()=>
  {
    setPasswordError(" ");
    setEmailError(" ");
  }

  


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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <Container style={containerstyle}>
      <Form onSubmit={handleSubmit}>
        <Form.Group style={girisyapstyle}>
          <h1>
            <b>-Kayıt Ol</b>
          </h1>
        </Form.Group>
        <br />
        <Form.Group style={girisyapstyle} size="lg">
          <h6>
            <b>Adı:</b>
          </h6>
          <Form.Control
          required
            type="text"
            autoFocus
            value={firstName}
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
          <h6>
            <b>Soyadı:</b>
          </h6>
          <Form.Control
            required
            type="text"
            autoFocus
            value={lastName}
            required
            onChange={(e) => setLastName(e.target.value)}
          />

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
          <Button onClick={handleSignup} >Kayıt Ol</Button>
          <p>
            Bir hesabın var mı?
            <Button as={NavLink} to="/loginAndSignUpPage">
              Giriş Yap
            </Button>
          </p>
        </div>
        <br />
      </Form>
      <br />
    </Container>
  );
};
export default SignUp;

/* import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Container, Label } from "semantic-ui-react";
import { auth, provider } from "../firebase";
import firebase from "firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const Form = ({ handleClose }) => {
  const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
    handleClose();
  };

  const containerdisayn = {
    border: "solid",
    borderColor: "#800080",
    width: "400px",
  };

  const buttonback = {
    backgroundColor: "#800080",
    color: "white",
  };

  const labelstyle = {
    color: "black",
  };

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

  const handleSignup = () => {
    clearErrors();
    firebase.auth()
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

  return (
    <Container style={containerdisayn} text>
      <h1 size="massive"> SİGN-UP </h1>
      <form className={classes.root} onSubmit={handleSubmit}>
        <Label size="large" style={labelstyle}>
          First Name
        </Label>
        <TextField
          label="First Name"
          variant="filled"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Label size="large" style={labelstyle}>
          Last Name
        </Label>
        <TextField
          label="Last Name"
          variant="filled"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Label size="large" style={labelstyle}>
          E-MAİL
        </Label>
        <TextField
          label="Email"
          variant="filled"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Label size="large" style={labelstyle}>
          Password
        </Label>
        <TextField
          label="Password"
          variant="filled"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button style={buttonback} type="submit" variant="contained">
          Signup
        </Button>
        <Button onClick={handleSignup} style={buttonback}>
          Kayıt Ol
        </Button>
        <p>
          Bir hesabın var mı?
          <span >Sign in</span>
        </p>
      </form>
    </Container>
  );
};

export default Form;
 */
