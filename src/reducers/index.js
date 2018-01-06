// @flow

import FetchDataReducer from './FetchDataReducer';

const reducers = {
  fetchDataReducer: FetchDataReducer,
  aa: FetchDataReducer,
};

export type Reducers = typeof reducers;

export default reducers;
