import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { CartContext } from "../Categories/Products/CartContext";
import database, { auth } from "../firebase";
import Navbar from "../Navi/Navbar";
export const Cashout = (props) => {
  const history = useHistory();
  const { shoppingCart, totalPrice, totalQty, dispatch } =
    useContext(CartContext);

  // defining state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cell, setCell] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");


  
  const cashoutSubmit = (e) => {
    e.preventDefault();
    auth.onAuthStateChanged(user => {
            const date = new Date();
            const time = date.getTime();
            database.collection('Buyer' + user.uid).doc('_' + time).set({
                BuyerName: name,
                BuyerEmail: email,
                BuyerCell: cell,
                BuyerAddress: address,
                BuyerPayment: totalPrice,
                BuyerQuantity: totalQty
            }).then(() => {
                setCell('');
                setAddress('');
                dispatch({ type: 'EMPTY' })
                setSuccessMsg('Your order has been placed successfully. Thanks for visiting us. You will be redirected to home page after 5 seconds');
                setTimeout(() => {
                    history.push('/')
                }, 5000)
            }).catch(err => setError(err.message))
        
    })
}


  return (
    <>
      <Navbar user={props.user} />
      <div className="container">
        <br />
        <h2>Cashout Details</h2>
        <br />
        {successMsg && <div className="success-msg">{successMsg}</div>}
        <form autoComplete="off" className="form-group" onSubmit={cashoutSubmit}>
          <label htmlFor="name">Adı Soyadı:</label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(e)=>setName(e.target.value)} value={name}
          />
          <br />
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            className="form-control"
            required
            onChange={(e)=>setEmail(e.target.email)} value={email}
          />
          <br />
          <label htmlFor="Cell No">İletişim Numarası:</label>
          <input
            type="number"
            className="form-control"
            required
            onChange={(e) => setCell(e.target.value)}
            value={cell}
            placeholder="+90 5369710081"
          />
          <br />
          <label htmlFor="Delivery Address">Teslimat Adresi:</label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
          <br />
          <label htmlFor="Price To Pay">Ödeyeceği Tutar:</label>
          <input
            type="number"
            className="form-control"
            required
            value={totalPrice}
            disabled
          />
          <br />
          <label htmlFor="Total No of Products">Sepetinizde bulunan toplam ürün: </label>
          <input
            type="number"
            className="form-control"
            required
            value={totalQty}
            disabled
          />
          <br />
          <button type="submit" className="btn btn-success btn-md mybtn">
            Siparişi Ver
          </button>
        </form>
        {error && <span className="error-msg">{error}</span>}
      </div>
    </>
  );
};
