import React, { Component } from "react";
import { Image, Grid, Dropdown, Accordion, Icon, Button } from "semantic-ui-react";

export default class brands extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };
  render() {
    const { activeIndex } = this.state;
    const friendOptions = [
      {
        key: "Acer",
        text: "Acer",
        value: "Acer",
      },
      {
        key: "Adata",
        text: "Adata",
        value: "Adata",
      },
      {
        key: "Apple",
        text: "Apple",
        value: "Apple",
      },
    ];

    return (
      <div>
        <Grid>
          <Grid.Column width={3}>
            <h4>
              <b>Tüm Markalar </b>{" "}
            </h4>
            <Dropdown
              placeholder="Marka seçiniz"
              openOnFocus
              selection
              options={friendOptions}
            />
            <br />
            <br />
            <Accordion styled   >
              <Accordion.Title
                active={activeIndex === 0}
                index={0}
                onClick={this.handleClick}
              >
                <Icon name="dropdown" />
               A B
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
                <Button color="white">
                Acer 
                </Button>
                <Button>
                Apple 
                </Button>
                <Button>
                Arnica
                </Button>
                <Button>
                Arzum
                </Button>
                  
              </Accordion.Content>

              <Accordion.Title 
                active={activeIndex === 1}
                index={1}
                onClick={this.handleClick}
                          >
                <Icon name="dropdown" />
                C D E
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 1}>
                <p >
                 c d d e e e e 
                </p>
              </Accordion.Content>

              <Accordion.Title
                active={activeIndex === 2}
                index={2}
                onClick={this.handleClick}
              >
                <Icon name="dropdown" />
                F G H 
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 2}>
                <p>
                  f g h h f h 
                </p>
                <p>
                 h f g 
                </p>
              </Accordion.Content>

            
              <Accordion.Title
                active={activeIndex === 3}
                index={3}
                onClick={this.handleClick}
              >
                <Icon name="dropdown" />
                I  J K L
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 3}>
                <p>
                  İ I J K L L K L 
                </p>
              </Accordion.Content>
           
                 

              <Accordion.Title
                active={activeIndex === 4}
                index={4}
                onClick={this.handleClick}
              >
                <Icon name="dropdown" />
                M N O P
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 4}>
                <p>
                 M N O P M N  
                </p>
                <p>
                O P M N 
                </p>
              </Accordion.Content>



              <Accordion.Title
                active={activeIndex === 5}
                index={5}
                onClick={this.handleClick}
              >
                <Icon name="dropdown" />
                Q R S T 
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 5}>
                <p>
                  R S T Q 
                </p>
              </Accordion.Content>



              <Accordion.Title
                active={activeIndex === 6}
                index={6}
                onClick={this.handleClick}
              >
                <Icon name="dropdown" />
                U V W X Y Z 
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 6}>
                <p>
                  X Y Z 
                </p>
                <p>
                 U V  W
                </p>
              </Accordion.Content>

            </Accordion>
          </Grid.Column>
          <Grid.Column width={13}>
            <Image  size="huge" src="images/markalar1.PNG" centered />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
