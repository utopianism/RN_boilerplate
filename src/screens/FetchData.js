// @flow

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

import { colors } from '../config';
import { fetchDataStart } from '../actions';
import { Container } from '../components';

import type { State } from '../types/State';
import type { dataType } from '../reducers/FetchDataReducer';

type Props = {
   fetchDataStart: typeof fetchDataStart;
   peopleData: dataType;
}

class FetchData extends Component<Props, void> {

  onPress() {
    this.props.fetchDataStart();
  }

  render() {
    return (
      <Container>
        <Button
          raised
          buttonStyle={{ backgroundColor: colors.primary, borderRadius: 1 }}
          textStyle={{ textAlign: 'center' }}
          title="Start Fetch data"
          onPress={() => this.onPress()}
        />
        <View style={{ marginTop: 10 }}>
          {
            this.props.isFetching && <Text>Loading</Text>
          }
          {
          this.props.peopleData.length ? (
            this.props.peopleData.map((person) => {
              return (
                <View key={`${person.name}11`} >
                  <Text>Name: {person.name}</Text>
                  <Text>Age: {person.age}</Text>
                </View>
              );
            })
          ) : null
        }
        </View>
      </Container>
    );
  }
}

const mapStateToProps = ({ fetchDataReducer }: State) => {
  console.log('mapStateToProps', fetchDataReducer);
  const { data, isFetching, error } = fetchDataReducer;
  return {
    peopleData: data, isFetching, error,
  };
};

export default connect(mapStateToProps, { fetchDataStart })(FetchData);
