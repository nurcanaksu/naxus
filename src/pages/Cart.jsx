import React from "react";
import { useContext } from "react";
import { CartContext } from "../Categories/Products/CartContext";
import { ic_add } from 'react-icons-kit/md/ic_add'
import { ic_remove } from 'react-icons-kit/md/ic_remove'
import { iosTrashOutline } from 'react-icons-kit/ionicons/iosTrashOutline'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { Icon } from 'react-icons-kit'

export const Cart = () => {
    const { shoppingCart, dispatch, totalPrice, totalQty } = useContext(CartContext);
    const history = useHistory();
  return (
    <>
      <>
        {shoppingCart.length !== 0 && <h1>SEPETİM</h1>}
        <div className="cart-container">
          {shoppingCart.length === 0 && (
            <>
              <div>
                sepetinizde ürün yok ya da yavaş internet problemi (Sayfayı yenileyin) ya da giriş yapın
              </div>
              <div>
                <Link to="/">Anasayfaya geri dön..</Link>
              </div>
            </>
          )}
          {shoppingCart &&
            shoppingCart.map(cart => (
              <div className="cart-card" key={cart.ProductID}>
                <div className="cart-img">
                  <img src={cart.ProductImg} alt="not found" />
                </div>

                <div className="cart-name">{cart.ProductName}</div>

                <div className="cart-price-orignal">
                  TL {cart.ProductPrice}.00
                </div>

                <div className="inc"
                  onClick={() =>dispatch({ type: "INC", id: cart.ProductID, cart }) } >
                  <Icon icon={ic_add} size={24} />
                </div>

                <div className="quantity">{cart.qty}</div>

                <div
                  className="dec"
                  onClick={() =>
                    dispatch({ type: "DEC", id: cart.ProductID, cart })
                  }
                >
                  <Icon icon={ic_remove} size={24} />
                </div>

                <div className="cart-price">Rs {cart.TotalProductPrice}.00</div>

                <button
                  className="delete-btn"
                  onClick={() =>
                    dispatch({ type: "DELETE", id: cart.ProductID, cart })
                  }
                >
                  <Icon icon={iosTrashOutline} size={24} />
                </button>
              </div>
            ))}
          {shoppingCart.length > 0 && (
            <div className="cart-summary">
              <div className="cart-summary-heading">Cart-Summary</div>
              <div className="cart-summary-price">
                <span>Toplam fiyat</span>
                <span>{totalPrice}</span>
              </div>
              <div className="cart-summary-price">
                <span>Toplam Miktar</span>
                <span>{totalQty}</span>
              </div>
              <Link to="cashout" className="cashout-link">
                <button
                  as={NavLink}
                  to="/cashout"
                  className="btn btn-success btn-md"
                  style={{ marginTop: 5 + "px" }}
                >
                  Ödeme Yap
                </button>
              </Link>
            </div>
          )}
        </div>
      </>
    </>
  );
};

// Pusula_2019
