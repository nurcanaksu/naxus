import React from "react";
import { Button } from "semantic-ui-react";
import database from "../firebase";
function Users({ id, name, surname , guncellenenisim,guncellenensoyad,setName,setSurname}) {


    const guncelle=()=>
    {
      database.collection("users").doc(id).update(
          {
              name:guncellenenisim,
              surname:guncellenensoyad,
          }
      );
      setName("");
      setSurname("")
    };

    const sil= ()=>
    {
       database.collection("users").doc(id).delete();
    }


  return (
    <div>
      {name} {surname} 
      <Button onClick={sil}> Sil</Button>
      <Button onClick={guncelle}>Güncelle</Button>
    </div>
    
  );
}

export default Users;
