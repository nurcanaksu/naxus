import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Grid,  Icon, Image } from "semantic-ui-react";

export default function clubKampanyalari() {
  return (
    <div>
      <Button.Group inverted size="large" widths="3">
        <Button
          inverted
          color="violet"
          as={NavLink}
          to="/tumkampanyalar"
          animated
        >

      
          <Button.Content visible>TÜM KAMPANYALAR</Button.Content>
          <Button.Content hidden>
            <Icon name="announcement" />
          </Button.Content>
        </Button>
        <Button
          inverted
          color="violet"
          as={NavLink}
          to="/birliktealkampanyalari"
          animated
        >
          <Button.Content visible>BİRLİKTE AL FIRSATLARI</Button.Content>
          <Button.Content hidden>
            <Icon name="tags" />
          </Button.Content>
        </Button>
        <Button
          inverted
          color="violet"
          as={NavLink}
          to="/clubkampanyalari"
          animated
        >
          <Button.Content visible>CLUB KAMPANYALARI</Button.Content>
          <Button.Content hidden>
            <Icon name="shopping bag" />
          </Button.Content>
        </Button>
      </Button.Group>
      <br />
      <br />
      <Image src="images/family2.PNG" size="massive" centered />
      <Image src="images/kampanyabitti.PNG" size="large" centered />
      <br />
      <br />
      <Grid columns="four" color="red">
        <Grid.Row>
          <Grid.Column color="purple">
            <Image src="images/crd.PNG" />
          </Grid.Column>
          <Grid.Column color="purple">
            <Image src="images/indirim1.jpg" size="big" />
          </Grid.Column>

          <Grid.Column color="purple" size="huge">
            <br />
            <br />
            <h4>
              NAXUS CLUB'A ÜYE OL FIRSATLARI KAÇIRMA
              <Icon name="warning" color="black" />
            </h4>
          </Grid.Column>
          <Grid.Column color="purple">
            <br />
            <Button
              type="submit"
              as={NavLink}
              to="/signup"
              size="huge"
              color="black"
            >
              Naxus CLUB'a Üye Ol <Icon name="arrow alternate circle right" />
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
