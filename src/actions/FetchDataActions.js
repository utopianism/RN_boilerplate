// @flow

import type { ThunkAction } from '../types/Store';
import type { dataType } from '../reducers/FetchDataReducer';


const fetchDataStart = () => ({ type: 'FETCH_DATA_START' });
const fetchDataFail = () => ({ type: 'FETCH_DATA_FAIL' });
const fetchDataSuccess = (data: typeof people) => ({ type: 'FETCH_DATA_SUCCESS', payload: data });

export function fetchData(): ThunkAction {
  return (dispatch) => {
    dispatch(fetchDataStart());
    getPeople()
    .then(data => dispatch(fetchDataSuccess(data)))
    .catch(() => dispatch(fetchDataFail()));
  };
}

// mock data
export const people = [
  { name: 'Nader', age: 36 },
  { name: 'Amanda', age: 24 },
  { name: 'Jason', age: 44 },
];

const getPeople = ():Promise<dataType> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(people);
    }, 3000);
  });
};
