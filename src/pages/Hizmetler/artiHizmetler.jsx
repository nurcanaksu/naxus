import React from "react";
import {
  Button,
  Grid,
  Icon,
  Image,
  Rail,
  Segment,
} from "semantic-ui-react";

export default function artiHizmetler() {
  return (
    <div>
      <Grid columns="three" color="red" textAlign="center">
        <Grid.Row>
          <Grid.Column color="red">
            <h2>
              {" "}
              <Icon name="home" size="large" /> GÜVENLİ ALIŞVERİŞ İLKELERİMİZ{" "}
            </h2>
          </Grid.Column>

          <Grid.Column color="red" textAlign="right">
            <Button type="submit" size="massive" color="black">
              Detaylı İncele <Icon name="arrow alternate circle right" />
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <br />
      <br />

      <Grid centered columns={3}>
        <Grid.Column>
          <Segment>
            <Image src="images/adam.jpg" />
            <Rail position="left">
              <Segment color="purple">
                <h3>
                  KEYFİNE KEYİF KATACAK PEK ÇOK TEKNİK HİZMETLER NAXUS CLUB'DA !
                </h3>
              </Segment>
            </Rail>

            <Rail position="right">
              <Segment color="purple">
                {" "}
                <h3>ARTI HİZMETLERLE KEYFİNE BAK !</h3>
              </Segment>
            </Rail>
          </Segment>
        </Grid.Column>
      </Grid>
      <br />
      <br />
      <Button.Group inverted size="huge" widths="5">
        <Button inverted color="red">
          <Icon name="plus" size="small" /> Artı Hizmetler
        </Button>
        <Button inverted color="red">
          <Icon name="truck" size="small" />
          Teslimat Hizmetleri
        </Button>
        <Button inverted color="red">
          <Icon name="commenting" size="small" /> Satış Sonrası Hizmetleri
        </Button>
        <Button inverted color="red">
          <Icon name="phone" size="small" /> Çağrı Merkezi Hizmetleri
        </Button>
        <Button inverted color="red">
          <Icon name="sitemap" size="small" /> Satış Kanalları
        </Button>
      </Button.Group>
    </div>
  );
}
