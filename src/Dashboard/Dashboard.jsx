import React from "react";
import { Route } from "react-router-dom";
import {  Grid } from "semantic-ui-react";
import LoginScreen from "../Login/LoginScreen";
import brands from "../pages/brands";
import help from "../pages/help";
import naxusClub from "../pages/naxusClub";
import opportunityOfTheDay from "../pages/opportunityOfTheDay";
import {SignUp} from "../Login/SignUp";
import myFavorite from "../pages/myFavorite";
import {Cart} from "../pages/Cart";
import allCampaings from "../pages/allCampaings";
import birlikteAlKampanyasi from "../pages/birlikteAlKampanyasi";
import clubKampanyalari from "../pages/clubKampanyalari";
import artiHizmetler from "../pages/Hizmetler/artiHizmetler";
import Home from "../pages/Home";
import LoginAndSİgnUpPage from "../Login/LoginAndSİgnUpPage";
import { AddProducts } from "../Categories/Products/AddProducts";
import { TviesPage } from "../Categories/Products/Tvies/TviesPage";
import { AddToTv } from "../Categories/Products/Tvies/AddToTv";
import { AddToAccessories } from "../Categories/Products/Accessories/AddToAccessories";
import { AddToPhones } from "../Categories/Products/Phones/AddToPhones";
import { ComputersPage } from "../Categories/Products/Computers/ComputersPage";
import { AddToComputer } from "../Categories/Products/Computers/AddToComputer";
import { AccessoriesPage } from "../Categories/Products/Accessories/AccessoriesPage";
import { PhonesPage } from "../Categories/Products/Phones/PhonesPage";
import { Cashout } from "../pages/Cashout";


export default function Dashboard() {

 
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Grid.Column>
            <Route exact path="/loginscreen" component={LoginScreen} />
            <Route exact path="/help" component={help} />
            <Route exact path="/brands" component={brands} />
            <Route exact path="/naxusclub" component={naxusClub} />
            <Route exact path="/opportunityoftheday"component={opportunityOfTheDay}/>
            <Route exact path="/artihizmetler" component={artiHizmetler} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/myfavorites" component={myFavorite} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={Home} />
            <Route exact path="/tumkampanyalar" component={allCampaings} />
            <Route exact path="/birliktealkampanyalari" component={birlikteAlKampanyasi} />
            <Route exact path="/clubkampanyalari" component={clubKampanyalari} />
            <Route exact path="/loginAndSignUpPage" component={LoginAndSİgnUpPage} />
            <Route exact path="/addproducts" component={AddProducts} />
            <Route exact path="/aksesuarEkle" component={AddToAccessories} />
            <Route exact path="/aksesuarlar" component={AccessoriesPage} />
            <Route exact path="/bilgisayarEkle" component={AddToComputer} />
            <Route exact path="/telefonEkle" component={AddToPhones} />
            <Route exact path="/televizyonEkle" component={AddToTv} />
            <Route exact path="/bilgisayarlar" component={ComputersPage} />
            <Route exact path="/televizyonlar" component={TviesPage} />
            <Route exact path="/telefonlar" component={PhonesPage}/>
            <Route exact path="/cashout" component={Cashout}/> 
          </Grid.Column>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
