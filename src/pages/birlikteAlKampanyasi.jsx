import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Image, List, Icon, Grid } from "semantic-ui-react";

export default function birlikteAlKampanyasi() {
  const containerstyle = {
    textAlign: "left",
  };

  return (
    <div>
      <Button.Group inverted size="large" widths="3">
      <Button inverted color="violet" as={NavLink} to="/tumkampanyalar" animated>
            <Button.Content visible>TÜM KAMPANYALAR</Button.Content>
            <Button.Content hidden>
              <Icon name="announcement" />
            </Button.Content>
        </Button>
        <Button inverted color="violet" as={NavLink} to="/birliktealkampanyalari" animated>
            <Button.Content visible>BİRLİKTE AL FIRSATLARI</Button.Content>
            <Button.Content hidden>
              <Icon name="tags" />
            </Button.Content>
        </Button>
        <Button inverted color="violet" as={NavLink} to="/clubkampanyalari" animated>
            <Button.Content visible>CLUB KAMPANYALARI</Button.Content>
            <Button.Content hidden>
              <Icon name="shopping bag" />
            </Button.Content>          
        </Button>
      </Button.Group>

      <br />
      <br />
      <Grid columns={2} relaxed="very">
        <Grid.Column  width={3}>
        <Image src="images/birlikteal.png" size="small" />
        </Grid.Column>
        <Grid.Column  width={13}>
        <List style={containerstyle} size="large">
          <br></br>
        <h2>Kampanyalar Hakkında Genel Bilgilendirme</h2>
        <List.Item>
          <Icon name="arrow right" size="large" color="purple" /> Kampanyalar
          başka kampanyalarla, kupon ve sepet kurgularıyla
          birleştirilememektedir
        </List.Item>
        <List.Item>
          <Icon name="arrow right" size="large" color="purple" />
          Naxus tarafından düzenlenen tüm kampanyalar tüketicilere
          yöneliktir.
        </List.Item>
        <List.Item>
          <Icon name="arrow right" size="large" color="purple" />
          Kampanyalardan ticari gaye ile yararlanıldığı ve ticari alımların
          tespiti halinde kampanya kapsamındaki sipariş iptal edilebilir.{" "}
        </List.Item>
        <List.Item>
          <Icon name="arrow right" size="large" color="purple" />
          Naxus; kampanyalar sırasında oluşabilecek öngörülemeyen
          değişiklikler nedeniyle ürün , fiyat değişimi yapma ve kampanyayı son
          erdirme hakkını saklı tutar.
        </List.Item>
      </List>
        </Grid.Column>
      </Grid>
      <br />
      <br />
      <Image  centered src="images/birlikteal1.png" size="huge" />
    </div>
  );
}
