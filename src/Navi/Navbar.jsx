import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import {Button,Dropdown,Image,Menu,Input, Icon, Divider,Container} from "semantic-ui-react";
import { CartContext } from "../Categories/Products/CartContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { totalQty } = useContext(CartContext);
  return (
    <div className="navbox">
      <Menu inverted fixed="top">
        <Container>
          <Image as={NavLink}  to="/home" src="images/naxusicon.PNG" size="small" />
        </Container>
        <Menu.Item position="right">
          <Input action="Ara" placeholder="Aramak istediğiniz ürün.." />
        </Menu.Item>
        <Menu.Item>
          <Menu.Item></Menu.Item>
          <Button  size="small"  backgroundcolor="grey"  color="black" as={NavLink} to="/myfavorites" >
            <Icon name="heart outline" />
            Favorilerim
          </Button>
        </Menu.Item>
        <Menu.Item>
          <div className="rightside">
            <span>
              <Link to="/cart" className="navlink">
                <Icon name="shopping cart" />
                Sepetim
              </Link>
            </span>
            <div className="relative">
              <span className="no-of-products">{totalQty} </span>
            </div>
          </div>
        </Menu.Item>
    <Menu.Item>
      <Icon name="user outline" size="large" />
       <Dropdown item text="Hesabım">
         <Dropdown.Menu>
            <Dropdown.Item as={NavLink} to="/loginAndSignupPage" style={{ color: "black" }} text="Giriş Yap" icon="sign-in"/>
            <Dropdown.Item as={NavLink} to="/signup" style={{ color: "black" }} text="Kayıt Ol" icon="signup" />
         </Dropdown.Menu>
        </Dropdown>
        </Menu.Item>
      </Menu>
      <Divider />
    </div>
  );
}
export default Navbar;
