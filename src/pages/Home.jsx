import React, { useState, useEffect } from "react";
import database  from "../firebase";
import firebase from "firebase";
import { Button } from "semantic-ui-react";
import Users from '../Login/Users'
import { NavLink } from "react-router-dom";

const Home= ({handleLogout})=> {

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   database
  //     .collection("users")
  //     .orderBy("timestamp", "desc")
  //     .onSnapshot((snapshop) =>
  //       setvalues(
  //         snapshop.docs.map((doc) => ({
  //           id: doc.id,
  //           data: doc.data(),
  //         }))
  //       )
  //     );
  // }, []);

   //onSnapshot: her satırı tek tek alıyor
   useEffect(() => {
    //veritabanından verileri çekiyor
    database.collection("users").onSnapshot((snapshot) =>
      setUsers(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []); //boş dizi vermezsem,sürekli döner.
 
  // function savetodatabase(value) {
  //   database.collection("users").add({
  //     name: value,
  //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  //     surname: "Aksu",
  //   });
  //   setinput("");
  // }
/* 
  function deletedata(value) {
    database.collection("users").doc(value).delete();
  }

  function Editdata(id,value) {
    database.collection("users").doc(id).set(
      {
        name:value,

      },{merge:true}
    )
  }
 */
  const add = (e) => {
    e.preventDefault(); //sayfa yenilenmesin diye uaptık
    database.collection("users").add({
      name: name,
      surname: surname,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setName("");
    setSurname("");
  };

  return (
    <div>
      {/* <h1>Hoşgeldiniz {user.displayName}</h1> */}
      {/* <button onClick={() => auth.signOut()}>Çıkış Yap </button> */}
      <form>
         Ad :
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
          Soyad :
        <input
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <Button onClick={add}>Ekle</Button>
      </form>
      
      {/* <div>
        {values.map((item) => (
          <ul>
            <li>
              {item.data.name}
              {item.data.surname}
              <div>
                <button onClick={() => deletedata(item.id)}>Delete</button>
                <button onClick={() => Editdata(item.id,"Hiçkimse")}>Edit</button>
              </div>
            </li>
          </ul>
        ))}
      </div> */}

      <div>
        {users.map(({ id, data }) => (
          <Users
            key={id}
            id={id}
            name={data.name}
            surname={data.surname}
            guncellenenisim={name}
            guncellenensoyad={surname}
            setName={setName}
            setSurname={setSurname}
          />
        ))}
      </div>
     <Button onClick={handleLogout}>Çıkış Yap</Button>
     <Button as={NavLink} to="/addproducts">
       Ürün ekle
     </Button>
    </div>
  );
}

export default Home;


// import { useState } from "react";
// import { Button } from "semantic-ui-react";
// import database from '../firebase';
// import firebase from "firebase";
// import { useEffect } from "react";
// import Users from '../Login/Users'

//  function Home() 
//  {
//   const [name, setName] = useState("");
//   const [surname, setSurname] = useState("");
//   const [users, setUsers] = useState([]);
//   //onSnapshot: her satırı tek tek alıyor
//   useEffect(() => {
//     //veritabanından verileri çekiyor
//     database.collection("users").onSnapshot((snapshot) =>
//       setUsers(
//         snapshot.docs.map((doc) => ({
//           id: doc.id,
//           data: doc.data(),
//         }))
//       )
//     );
//   }, []); //boş dizi vermezsem,sürekli döner.

//   console.log(users);

//   console.log();
//   const add = (e) => {
//     e.preventDefault(); //sayfa yenilenmesin diye uaptık
//     database.collection("users").add({
//       name: name,
//       surname: surname,
//       timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//     });
//     setName("");
//     setSurname("");
//   };

//   return (
//     <div>
//       <form>
//          Ad :
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//           Soyad :
//         <input
//           type="text"
//           value={surname}
//           onChange={(e) => setSurname(e.target.value)}
//         />
//         <Button onClick={add}>Ekle</Button>
//       </form>

//       <div>
//         {users.map(({ id, data }) => (
//           <Users
//             key={id}
//             id={id}
//             name={data.name}
//             surname={data.surname}
//             guncellenenisim={name}
//             guncellenensoyad={surname}
//             setName={setName}
//             setSurname={setSurname}
//           />
//         ))}
//       </div>

//       {/* <div>
//         {users.map(({ id, data: { name, surname } }) => (
//           <Users
//             key={id}
//             id={id}
//             name={name}
//             surname={surname}
//             setName={setName}
//             setSurname={setSurname}
//           />
//         ))}
//       </div> */}

//       {/* <div>
//         {users.map((item) => (
//           <ul>
//             <li>
//               {item.data.name} {item.data.surname}
//             </li>
//           </ul>
//         ))}
//       </div> */}
//     </div>
//   );
// }


// export default Home();