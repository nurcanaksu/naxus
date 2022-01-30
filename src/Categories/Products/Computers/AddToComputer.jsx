import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import database,{storage} from "../../../firebase";
import {  Button } from "semantic-ui-react";
export const AddToComputer = () => {
    const[productName, setProductName]= useState("");
    const[productPrice, setProductPrice]=useState(0);
    const[productImg, setProductImg]=useState(null);
    const[productDescription, setProductDescription]= useState("");   
    const[error, setError]=useState("");
    const types = ['image/png', 'image/jpeg'];
    
    //product image handler
   const productImgHandler=(e)=>
   {
       let selectedFile=e.target.files[0];
       if(selectedFile && types.includes(selectedFile.type))
       {
           setProductImg(selectedFile);
           setError("");
       }else{
           setProductImg(null);
           setError("Lütfen geçerli formatta resim ekleyiniz (jpeg,png) ")
       }
   }
   //Add product form submit event
   const addProduct=(e)=>{
       e.preventDefault();//sayfanın yenilenmesini engelledi
       //storing the image
        const uploadTask = storage.ref(`product-images/${productImg.name}`).put(productImg);
        uploadTask.on('state_changed',snapshot=>{
            const progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
            console.log(progress);
        },err=>{
            setError(err.message)
        },()=>{
            //getting product url and if success then storing the product in database
            storage.ref('product-images').child(productImg.name).getDownloadURL().then(url=>
                {
                    database.collection('Computers').add({
                        ProductImg:url,
                        ProductName:productName,
                        ProductDescription:productDescription,
                        ProductPrice:Number(productPrice),
                    }).then(()=>
                    {
                        setProductName('');
                        setProductPrice(0);
                        setProductImg('');
                        setProductDescription('')
                        setError('');
                        document.getElementById('file').value=''
                    }).catch(err=>setError(err.message));
                })
        })
   }

  return (
    <div className="container">
      <br />
      <h2>Bilgisayar EKLE</h2>
      <hr />
      <form autoComplete="off" className="form-group" onSubmit={addProduct} >
          <label htmlFor="product-name">Ürün Adı</label>
           <br />
           <input type="text" className="form-control" required 
               onChange={(e)=>setProductName(e.target.value)} 
               value={productName}
            />
           <br />
           <label htmlFor="product-name">Ürün Açıklaması</label>
           <input type="text" className="form-control" required 
               onChange={(e)=>setProductDescription(e.target.value)} 
               value={productDescription}
            />
           <br />
           <label htmlFor="product-price">Product Price</label>
           <br />
           <input type="number" className="form-control" required 
               onChange={(e)=>setProductPrice(e.target.value)}
               value={productPrice}   
            />
           <br />
           <label htmlFor="product-img">Product Image</label>
           <br />
           <input type="file" className="form-control" onChange={productImgHandler} id='file' />
           <br />
           <button className="btn btn-success btn-md my btn">ADD</button>
      </form>
      {error && <span>{error}</span>}

         <Button as={NavLink} to="/bilgisayarlar" >Bilgisayarlar</Button>
    </div>
  
  );
};
