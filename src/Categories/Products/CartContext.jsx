import React, { createContext } from "react";
import { useReducer } from "react";
import { CartReducer } from "./CartReducer";
export const CartContext = createContext();

export const CartContextProvider = (props) => {
  const [cart, dispatch] = useReducer(CartReducer, {shoppingCart: [], totalPrice: 0,totalQty: 0, });

  return (
    <CartContext.Provider value={{ ...cart, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};

//Dispatch, gelen action'ı store'da mevcut state ile birlikte
//reducer'a parametre geçer. Bu işlem sonucunda state'in ilgili
//kısımları değişir ve yeni bir state oluşur.

/*Reducer: State ve action'ı parametre alan ve yeni state'i dönen pure bir fonksiyondur.
 Action'ın type'ına göre state'i değiştirir ve yeni state'i geri döner. Mutlaka state'in
 güncel bir kopyası geri dönmesi gerekiyor. Aksi halde, componentler kendini render etmez.*/
