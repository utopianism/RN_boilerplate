// @flow

import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { Container, Count } from '../components';

class IntoNavi extends Component<{}> {
  render() {
    return (
      <Container>
        <StatusBar barStyle="default" />
        <Count defaultCount={100} />
      </Container>
    );
  }
}

export default IntoNavi;
