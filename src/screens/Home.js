// @flow

import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Button } from 'react-native-elements';
import { colors } from '../config';

import { Container } from '../components';

class Home extends Component<{}> {
  render() {
    return (
      <Container >
        <StatusBar barStyle="default" />
        <Button
          raised
          iconRight={{ name: 'chevron-right', size: 20, type: 'octicon' }}
          buttonStyle={{ backgroundColor: colors.primary, borderRadius: 1 }}
          textStyle={{ textAlign: 'center' }}
          title="Jump to next screen"
          onPress={() => {
            // $FlowFixMe
            this.props.navigation.navigate('Profile', { name: 'Jordan' });
          }}
        />
      </Container>
    );
  }
}

export default Home;
