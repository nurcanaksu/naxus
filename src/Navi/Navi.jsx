import React from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  Button,
  Dropdown,
  Grid,
  List,
  DropdownHeader,
} from "semantic-ui-react";

export default function Navi() {

  const kategorilerstyle=
  {
    paddingLeft: "20px",
    paddingRight: "50px"

  };


  const dropdownHeaderStyle=
  {
    textDecoration:"none",
    fontSize:"16px",
  };

  
  return (
    <div>
      <Grid columns={2} relaxed="very">
        <Grid.Column width={2}>
          <Menu position="left" >
            <Dropdown
              text="TÜM MARKALAR"
              pointing
              className="link item"
              style={{ color: "white", backgroundColor: "black" }}
            >
              <Dropdown.Menu  >
                <Dropdown.Header style={dropdownHeaderStyle}>KATEGORİLER</Dropdown.Header>
                <Dropdown.Item   >
                  <Dropdown text="Telefon" >
                    <Dropdown.Menu style={kategorilerstyle} >
                     <br />
                      <DropdownHeader
                        style={dropdownHeaderStyle}
                        as={NavLink}
                        to="/telefonlar"
                        content="Telefon Kategorisine Git"
                        icon="right arrow"
                        labelPosition="right"
                      />
                       <br />
                       <br />
                      <Grid divided="vertically"> 
                        <Grid.Row columns={2}>
                          <Grid.Column>
                            <List link>
                              <List.Item active>Android Telefonlar</List.Item>
                              <List.Item as="a">Samsung</List.Item>
                              <List.Item as="a">Oppo</List.Item>
                              <List.Item as="a">Xioami</List.Item>
                              <List.Item as="a">Huawei</List.Item>
                            </List>
                          </Grid.Column>
                          <Grid.Column>
                            <List link>
                              <List.Item active>İOS Telefonlar</List.Item>
                              <List.Item as="a">İphone 11</List.Item>
                              <List.Item as="a">İphone 12</List.Item>
                              <List.Item as="a">İphone 12 Pro</List.Item>
                              <List.Item as="a">İphone 12 Pro Max</List.Item>
                              <List.Item as="a">İphone 12 Mini</List.Item>
                              <List.Item as="a">İphone 13 Pro</List.Item>
                              <List.Item as="a">İphone 13 Pro Max</List.Item>
                              <List.Item as="a">İphone 12 Mini</List.Item>
                            </List>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Dropdown.Menu>
                  </Dropdown>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Dropdown text="Tv,Görüntü ve Ses">
                    <Dropdown.Menu style={kategorilerstyle}>
                    <br />
                      <DropdownHeader style={dropdownHeaderStyle}
                        as={NavLink}
                        to="/televizyonlar"
                        color="violet"
                        content="Tv,Görüntü ve Ses Kategorisine Git"
                        icon="right arrow"
                        labelPosition="right"
                      />
                       <br />
                       <br />
                      <Grid divided="vertically">
                        <Grid.Row columns={3}>
                          <Grid.Column>
                            <List link>
                              <List.Item active>Televizyon</List.Item>
                              <List.Item as="a">LG</List.Item>
                              <List.Item as="a">Sony</List.Item>
                              <List.Item as="a">Vestel</List.Item>
                              <List.Item as="a">Grunding</List.Item>
                              <List.Item as="a">Philips</List.Item>
                              <List.Item as="a">QLED TV</List.Item>
                            </List>
                          </Grid.Column>
                          <Grid.Column>
                            <List link>
                              <List.Item active>Ses Sistemleri</List.Item>
                              <List.Item as="a">Soundbar</List.Item>
                              <List.Item as="a">JBL</List.Item>
                              <List.Item as="a">Bluetooth kulaklık</List.Item>
                              <List.Item as="a">Sony</List.Item>
                              <List.Item as="a"> Harman Kardon</List.Item>
                              <List.Item as="a">LG</List.Item>
                            </List>
                            <List link>
                              <List.Item active>Güvenlik Kamerası</List.Item>
                            </List>
                          </Grid.Column>

                          <Grid.Column>
                            <List link>
                              <List.Item active>Kulaklılar</List.Item>
                              <List.Item as="a">Kulakiçi kulaklık</List.Item>
                              <List.Item as="a">Kulaküstü kulaklık</List.Item>
                            </List>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Dropdown.Menu>
                  </Dropdown>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Dropdown text="Bilgisayar">
                    <Dropdown.Menu style={kategorilerstyle}>
                    <br />
                      <DropdownHeader style={dropdownHeaderStyle}
                        as={NavLink}
                        to="/bilgisayarlar"
                        color="violet"
                        content="Bilgisayar Kategorisine Git"
                        icon="right arrow"
                        labelPosition="right"
                      />
                       <br />
                       <br />
                      <Grid divided="vertically">
                        <Grid.Row columns={3}>
                          <Grid.Column>
                            <List link>
                              <List.Item active>Laptoplar</List.Item>
                              <List.Item as="a">Macbook</List.Item>
                              <List.Item as="a">HP</List.Item>
                              <List.Item as="a">Lenovo</List.Item>
                              <List.Item as="a">Asus</List.Item>
                              <List.Item as="a">Oyuncu Laptop</List.Item>
                            </List>
                            <List link>
                              <List.Item active>
                                Masaüstü Bilgisayarlar
                              </List.Item>
                            </List>
                          </Grid.Column>
                          <Grid.Column>
                            <List link>
                              <List.Item active>Tabletler</List.Item>
                              <List.Item as="a">Apple İpad</List.Item>
                              <List.Item as="a">Lenovo</List.Item>
                              <List.Item as="a">Huawei </List.Item>
                              <List.Item as="a">Samsung</List.Item>
                            </List>
                          </Grid.Column>

                          <Grid.Column>
                            <List link>
                              <List.Item active>
                                Bilgisayar Bileşenleri
                              </List.Item>
                              <List.Item as="a">Anakart</List.Item>
                              <List.Item as="a">RAM Bellek</List.Item>
                              <List.Item as="a">İşlemci</List.Item>
                              <List.Item as="a">Ekran Kartı</List.Item>
                              <List.Item as="a">Yazılımlar</List.Item>
                              <List.Item as="a">Kasa</List.Item>
                            </List>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Dropdown.Menu>
                  </Dropdown>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Dropdown text="Aksesuarlar">
                    <Dropdown.Menu style={kategorilerstyle}>
                    <br />
                      <DropdownHeader style={dropdownHeaderStyle}
                        as={NavLink}
                        to="/aksesuarlar"
                        color="violet"
                        content="Aksesuar Kategorisine Git"
                        icon="right arrow"
                        labelPosition="right"
                      />
                       <br />
                       <br />
                      <Grid divided="vertically">
                        <Grid.Row columns={2}>
                        <Grid.Column>
                            <List link>
                              <List.Item active>Telefon Aksesuarları</List.Item>
                              <List.Item as="a">Apple Aksesuarları</List.Item>
                              <List.Item as="a">Samsung Aksesuarları</List.Item>
                              <List.Item as="a">Araç Kiti </List.Item>
                              <List.Item as="a">Ekran Koruyucu Film</List.Item>
                              <List.Item as="a">Şarj Cihazı</List.Item>
                            </List>
                          </Grid.Column>
                          <Grid.Column>
                            <List link>
                              <List.Item active>Tv Ve Ses Aksesuarları</List.Item>
                              <List.Item as="a">Askı Aparatları</List.Item>
                              <List.Item as="a">Tv Kumanda Ve Klavyeleri</List.Item>
                            </List>
                            <br/>
                            <List link>
                              <List.Item active>
                                Giyilebilir Teknoloji
                              </List.Item>
                              <List.Item as="a">Akıllı Saatler</List.Item>
                              <List.Item as="a">Akıllı Bileklik</List.Item>
                            </List>
                            </Grid.Column>
                           
                         
                        </Grid.Row>
                      </Grid>
                    </Dropdown.Menu>
                  </Dropdown>
                </Dropdown.Item>


              </Dropdown.Menu>
            </Dropdown>
          </Menu>
        </Grid.Column>
        <Grid.Column width={14} centered>
          <Button.Group size="large" widths="6">
            <Button
              color="purple"
              className="containerstyle"
              as={NavLink}
              to="/naxusclub"
            >
              NAXUS CLUB
            </Button>
            <Button color="purple" as={NavLink} to="/tumkampanyalar">
              KAMPANYALAR
            </Button>
            <Button color="purple" as={NavLink} to="/brands">
              MARKALAR
            </Button>
            <Button color="purple" as={NavLink} to="/artihizmetler">
              HİZMETLER
            </Button>

            <Button color="purple" as={NavLink} to="/help">
              YARDIM
            </Button>
          </Button.Group>
        </Grid.Column>
      </Grid>
    </div>
  );
}