// @flow


import React from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { Provider, connect } from 'react-redux';
import Navigator from './config/router';

import store from './config/store';

const App = ({ dispatch, nav }) => (
  <Navigator
    navigation={addNavigationHelpers({
      dispatch,
      state: nav,
    })}
  />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

// $FlowFixMe
const AppWithNavigation = connect(mapStateToProps)(App);

export default () => (
  <Provider store={store}>
    <AppWithNavigation />
  </Provider>
);
