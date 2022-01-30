import React from "react";

import { NavLink } from "react-router-dom";
import { Button, Form, Icon, Message } from "semantic-ui-react";

export default function SignedIn() {
  const message = {
    width: "513px",
  };

  const buttonsstyle = {
    backgroundColor: "#800080",
    color: "white",
  };

  return (
    <div>
      <Form>
        <Form.Group>
          <br />
          <Message size="hug" style={message}>
            <Message.Header>
              <Icon name="add user" /> Hemen Üye Ol
            </Message.Header>
            <p>Join the opportunity-filled world of Naxus!</p>
            <Button type="submit" style={buttonsstyle} as={NavLink} to="/signup">
              Üye Ol <Icon name="arrow alternate circle right" />
            </Button>
          </Message>
        </Form.Group>
        <br />
        <Form.Group>
          <Message size="hug">
            <Message.Header>
              <Icon name="lock" /> Naxus Card'a Üye Ol
            </Message.Header>
            <p>
             MediaMarkt CLUB’a mağazalarımızdan üye olduysanız, 
             şifre belirleyerek CLUB avantajlarınızı web sitemizde de kullanabilirsiniz.
            </p>
            <Button type="submit" style={buttonsstyle}>
              Devam Et <Icon name="arrow alternate circle right" />
            </Button>
          </Message>
        </Form.Group>
      </Form>
    </div>
  );
}
