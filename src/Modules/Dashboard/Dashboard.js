import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label,Button, Footer, FooterTab, Text } from 'native-base';
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          ASDFGHJKL
        </Content>
        <Footer>
          <FooterTab>
            <Button>
              <Text>Apps</Text>
            </Button>
            <Button>
              <Text>Camera</Text>
            </Button>
            <Button active>
              <Text>Navigate</Text>
            </Button>
            <Button>
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}