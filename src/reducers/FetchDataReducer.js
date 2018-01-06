// @flow

import type { Action } from '../types/Action';

export type dataType = Array<{ name: string, age: number }>;

type State = {
  data: dataType,
  dataFetched: boolean,
  isFetching: boolean,
  error: boolean,
}

const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false,
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'FETCH_DATA_START':
      return {
        ...state,
        data: [],
        isFetching: true,
      };
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    case 'FETCH_DATA_FAIL':
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};
