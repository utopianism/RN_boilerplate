// @flow

import React, { Component } from 'react';
import { StatusBar, Text } from 'react-native';

import { Container } from '../components';

class IntoNavi extends Component<{}> {
  render() {
    return (
      <Container>
        <StatusBar barStyle="default" />
        <Text >
          111
        </Text>
      </Container>
    );
  }
}

export default IntoNavi;
