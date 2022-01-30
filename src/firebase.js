import firebase from 'firebase'

const firebaseApp=firebase.initializeApp
(
    {
        apiKey: "AIzaSyB_WXGSDM0ixt2RP3bJTG8isXQzTKDavLc",
        authDomain: "eticaret-5d817.firebaseapp.com",
        projectId: "eticaret-5d817",
        storageBucket: "eticaret-5d817.appspot.com",
        messagingSenderId: "250976253059",
        appId: "1:250976253059:web:ea3957d74555ceedeed7b6",
        measurementId: "G-8MFD5BZS8X"
    }
)

// const firebaseConfig = {
//     apiKey: "AIzaSyAcnluMVPFC9z0V09MbxLD7qOEODBKvidQ",
//     authDomain: "login-a4e7e.firebaseapp.com",
//     projectId: "login-a4e7e",
//     storageBucket: "login-a4e7e.appspot.com",
//     messagingSenderId: "470572146906",
//     appId: "1:470572146906:web:3a3137c7780da9b72005e3",
//     measurementId: "G-YS64NCNFKY"
//   };



const database=firebaseApp.firestore();//database ile iletişim kuracak olan yer.

const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
const storage=firebase.storage();


export default database;
export  {auth,provider,storage};

