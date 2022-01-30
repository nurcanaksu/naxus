import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBILhxYIZOchgN12DHlq7Zrs7e8BlVdT_g",
  authDomain: "react-project-2c698.firebaseapp.com",
  projectId: "react-project-2c698",
  storageBucket: "react-project-2c698.appspot.com",
  messagingSenderId: "900974538249",
  appId: "1:900974538249:web:894787e69f51cb59ded2d8",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const user = firebase.auth().currentUser;
const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").add({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const updateInformation = async (name, surname, university, fakulte, bolum) => {
  let uid;
  if (user != null) {
    uid = user.uid;
    const db = firebase.firestore();
    const docRef = db.collection("users").doc(uid);
    docRef
      .update({
        name,
        surname,
        university,
        fakulte,
        bolum,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        console.log("Profile Successfully Edited!");
      })
      .catch((error) => {
        console.log("Error updating the document:", error);
      });
  }
};

const registerWithEmailAndPassword = async (
  name,
  surname,
  university,
  fakulte,
  bolum,
  email,
  password
) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection("users").add({
      uid: user.uid,
      name,
      surname,
      university,
      fakulte,
      bolum,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("Şifre sıfırlama bağlantısı gönderildi!!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  auth.signOut();
};

export {
  auth,
  db,
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
  updateInformation,
};
