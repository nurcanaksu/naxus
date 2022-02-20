import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import { Container, Divider } from "semantic-ui-react";
import Footer from "./Footer/Footer";
import Navbar from "./Navi/Navbar";
import Navi from "./Navi/Navi";
import { render } from "react-dom";
import {
  ComputerProductsContext,
  ComputerProductsContextProvider,
  ProductsContextProvider,
} from "./Categories/Products/ProductsContext";
import { BrowserRouter, Switch } from "react-router-dom";
import { CartContextProvider } from "./Categories/Products/CartContext";
import database, { auth } from "./firebase";

// export default class App extends Component {
//   state2 = {
//     schools: [
//       {
//         id: 1,
//         okuladi: "İnönü Üniversitesi",
//       },
//       {
//         id: 2,
//         okuladi: "Atatürk Üniversitesi",
//       },
//     ],
//   };

//   render() {
//     return (
//       // <div className="App"  style={{ backgroundImage: "url(images/arkaplan2.jpg " , backgroundSize:"cover" }}>
//       <div className="App" >
//         {/* </div> <div className="App" > */}
//         {/* <h2 className="header">Css denemesi</h2>
//           <h1 style={{ color: "purple", fontSize: "30px" }}>App Component </h1>
//           <h1 className="container">App Component </h1>
//           <Navbar title="Props Başlık" />
//           <Navbar />
//           <Users  />
//           <Schools schools={this.state2.schools}/> */}

//         <Navbar />
//         <Container className="container">
//           <Dashboard />
//         </Container>
//         {/* <Footer /> */}
//       </div>
//     );
//   }
// }

export class App extends Component {

  render() {
    return (
      <div className="App">
        <ProductsContextProvider>
          <CartContextProvider>
            <BrowserRouter>
              <Navbar/> 
              <br />
              <br />
              <Navi />
              <Container>
                <Dashboard className="App" />
              </Container>
            </BrowserRouter>
          </CartContextProvider>
        </ProductsContextProvider>
      </div>
    );
  }
}

export default App;

{
  /* <div className="App">
      <Navbar />
      <br />
      <br />
      <Navi />
      <Container className="main">
        <Dashboard />
      </Container>
      <Footer />
    </div> */
}
