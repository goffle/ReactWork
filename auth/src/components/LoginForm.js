import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Card, CardSection, Button, Input } from './common';


class LoginForm extends Component {
  state = { text: '' };
  render() {
    return (
      <Card>
        <CardSection>
        </CardSection>
        <CardSection>
        </CardSection>
        <CardSection>
          <Button>Log in</Button>
        </CardSection>
      </Card>
    );
  }


}

export default LoginForm;
