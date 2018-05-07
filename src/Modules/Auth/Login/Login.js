import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label,Button, Toast, Text } from 'native-base';
import { loginUser } from './LoginActions';
import {connect} from 'react-redux';

class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { username: "user@pagehits.com", password: "password" };
    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
  }

  focusNextField(id) {
    this.inputs[id].focus();
  }

  login() {
    this.props.onLogin(this.state.username, this.state.password);
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item fixedLabel>
              <Label>Username</Label>
              <Input placeholder="Email" onChangeText={(username) => {this.setState({username})}} value={this.state.username} />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input placeholder="Email" onChangeText={(password) => {this.setState({password})}} value={this.state.password} />
            </Item>
          </Form>
          {this.props.isLoading === true ? <Spinner /> : null}
          {this.props.isLoginError === true ? (
              Toast.show({ text: 'Wrong password!', buttonText: 'Okay'})) : null}
          <Button onPress={(e) => this.login(e)} block> <Text> Log In </Text> </Button>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.loginReducer.isLoggedIn,
    isLoading: state.loginReducer.isLoading,
    isLoginError:  state.loginReducer.isLoginError,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      onLogin: (username, password) => { dispatch(loginUser(username, password)); }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);