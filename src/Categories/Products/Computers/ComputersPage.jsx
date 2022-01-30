import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Grid, Form, Menu, Checkbox, Rating, Header } from "semantic-ui-react";
import Radio from "@material-ui/core/Radio";
import { useState } from "react";
import { ProductsContext } from "../ProductsContext";
import { CartContext } from "../CartContext";

export const ComputersPage = () => {

  const {dispatch}= useContext(CartContext)//sepete eklemek için 

  const { computers } = useContext(ProductsContext); //ürünleri listelemek için
  console.log(computers);

  const baslikstyle = {
    fontSize: "14px",
    textAlign: "left",
    color: "purple",
  };

  const maddestyle = {
    fontSize: "13px",
    backgroundColor: "white",
    borderColor: "black",
    textAlign: "left",
  };
  const ratingStyle = {
    fontSize: "23px",
  };

  const [gender, setGender] = useState("");
  const handlGender = (e) => {
    setGender(e.target.value);
  };

  return (
    <Grid>
      <Grid.Column width={2}>
        <Menu text vertical style={maddestyle}>
          <Menu.Item header style={baslikstyle}>
            <b>İlgili Kategoriler</b>
          </Menu.Item>
          <Menu.Item name="Tabletler" as={NavLink} to="/computers">
            Tabletler
          </Menu.Item>
          <Menu.Item as={NavLink} to="/computers">
            Bilgisayar Bileşenleri
          </Menu.Item>
          <Menu.Item as={NavLink} to="/computers">
            Masaüstü Bileşenler
          </Menu.Item>
          <Menu.Item as={NavLink} to="/computers">
            Android Telefonlar
          </Menu.Item>
          <Menu.Item as={NavLink} to="/computers">
            IOS Telefonlar
          </Menu.Item>
          <Menu.Item as={NavLink} to="/computers">
            Televizyon
          </Menu.Item>
          <Menu.Item
            as={NavLink}
            to="/computers"
            // active={activeItem === 'mostPopular'}
            // onClick={this.handleItemClick}
          >
            Ses Sistemleri
          </Menu.Item>
          <Menu.Item
            as={NavLink}
            to="/computers"
            // active={activeItem === 'mostPopular'}
            // onClick={this.handleItemClick}
          >
            Kulaklıklar
          </Menu.Item>
          <Menu.Item as={NavLink} to="/computers">
            Güvenlik Kamerası
          </Menu.Item>
          <Menu.Item as={NavLink} to="/computers">
            Telefon Aksesuarları
          </Menu.Item>
          <Menu.Item as={NavLink} to="/computers">
            Tv Ve Ses Aksesuarları
          </Menu.Item>
          <Menu.Item as={NavLink} to="/computers">
            Giyilebilir Teknoloji
          </Menu.Item>
        </Menu>
        <br />
        <Menu text vertical style={maddestyle}>
          <Menu.Item header style={baslikstyle}>
            <b>Marka</b>
          </Menu.Item>
          <Menu.Item>
            <Checkbox label={<label>Asus</label>} />
          </Menu.Item>
          <Menu.Item>
            <Checkbox label={<label>HP</label>} />
          </Menu.Item>
          <Menu.Item>
            <Checkbox label={<label>Mackbook</label>} />
          </Menu.Item>
          <Menu.Item>
            <Checkbox label={<label>Lenovo</label>} />
          </Menu.Item>
          <Menu.Item>
            <Checkbox label={<label>Monster</label>} />
          </Menu.Item>
        </Menu>

        <br />
        <Menu text vertical style={maddestyle}>
          <Menu.Item header style={baslikstyle}>
            <b>Fiyat</b>
          </Menu.Item>

          <div>
            <Radio
              value="ilk"
              color="primary"
              checked={gender === "ilk"}
              onChange={handlGender}
            />
            <span>0 TL - 4500 TL</span>
          </div>
          <div>
            <Radio
              value="ikinci"
              color="primary"
              checked={gender === "ikinci"}
              onChange={handlGender}
            />
            <span>4500 TL - 8000 TL</span>
          </div>
          <div>
            <Radio
              value="ucuncu"
              color="primary"
              checked={gender === "ucuncu"}
              onChange={handlGender}
            />
            <span>8000 TL - 12500 TL</span>
          </div>
          <div>
            <Radio
              value="dorduncu"
              color="primary"
              checked={gender === "dorduncu"}
              onChange={handlGender}
            />
            <span>12500 TL - 17500 TL</span>
            <div>
              <Radio
                value="besinci"
                color="primary"
                checked={gender === "besinci"}
                onChange={handlGender}
              />
              <span>17500 TL - 35000 TL</span>
            </div>
          </div>
        </Menu>
      </Grid.Column>
      <Grid.Column width={14}>
        <>
          {computers.length !== 0 && <h1>Bilgisayarlar</h1>}
          <div className="products-container">
            {computers.length === 0 && <div>Lütfen Bekleyiniz</div>}
            {computers.map((product) => (
              <div className="product-card" key={product.ProductID}>
                <Rating
                  as="h1"
                  style={ratingStyle}
                  icon="heart"
                  defaultRating={0}
                  maxRating={1}
                ></Rating>
                <div className="product-img">
                  <img src={product.ProductImg} alt="not found" />
                </div>
                <div className="product-name">{product.ProductName}</div>
                <div className="product-price">
                  {product.ProductPrice}.00 TL
                </div>
                <div>
                  <Rating icon="star" defaultRating={3} maxRating={5} />
                </div>
                <div className="product-description">
                  {product.ProductDescription}
                </div>
                <button className="addcart-btn" 
                       onClick={()=>{dispatch({type:'ADD_TO_CART',
                                       id: product.ProductID,
                                       product})}}>
                         
                         Sepete Ekle</button>
              </div>
            ))}
          </div>
        </>
      </Grid.Column>
    </Grid>
  );
};
